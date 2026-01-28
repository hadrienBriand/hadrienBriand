import {Resend} from 'resend'

const rateLimitMap = new Map<string, number[]>();

const MAX_REQUESTS = 3;
const TIME_WINDOW = 60 * 1000;

export default defineEventHandler(async (event) => {

    const ip = getRequestIP(event, { xForwardedFor: true }) || "unknown";
    const now = Date.now();

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, []);
    }

    const attempts = rateLimitMap.get(ip)!;

    const recentAttempts = attempts.filter((time) => now - time < TIME_WINDOW);

    if (recentAttempts.length >= MAX_REQUESTS) {
      console.warn(`⚠️ Rate limit dépassé pour IP: ${ip}`);
      throw createError({
        statusCode: 429,
        message: `Trop de tentatives. Veuillez réessayer dans ${Math.ceil(
          TIME_WINDOW / 1000
        )} secondes.`,
      });
    }

    recentAttempts.push(now);
    rateLimitMap.set(ip, recentAttempts);

    if (rateLimitMap.size > 1000) {
      const cutoff = now - TIME_WINDOW * 2;
      for (const [key, times] of rateLimitMap.entries()) {
        if (times.every((time) => time < cutoff)) {
          rateLimitMap.delete(key);
        }
      }
    }
    const body = await readBody(event)
    const {fullName,email,message} = body

    
    if(!fullName || !email || !message){
        throw createError({
            statusCode:400,
            message:'Tous les champs sont obligatoires'
        })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    try {
        const data = await resend.emails.send({
      from: 'hadrienbriand.com <onboarding@resend.dev>', 
      to: process.env.CONTACT_EMAIL!, 
      replyTo: email, 
      subject: `Nouveau message de ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        </head>
        <body style="margin: 0; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
        
        <div style="max-width: 600px; margin: 0 auto;">
            
            <!-- Titre -->
            <h1 style="margin: 0 0 30px 0; color: #5a54cf; font-size: 24px; font-weight: 600;">
            Nouveau message
            </h1>

            <!-- Infos -->
            <div style="margin-bottom: 30px;">
            <p style="margin: 0 0 8px 0; color: #000; font-size: 16px;">
                <strong>${fullName}</strong>
            </p>
            <p style="margin: 0; color: #666; font-size: 14px;">
                ${email}
            </p>
            </div>

            <!-- Séparateur -->
            <div style="height: 1px; background-color: #e5e5e5; margin: 30px 0;"></div>

            <!-- Message -->
            <div style="color: #000; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
            ${message}
            </div>

        </div>

        </body>
        </html>
        `
    })
      console.log('✅ Email envoyé avec succès!')
      console.log('Réponse complète de Resend:', JSON.stringify(data, null, 2))
      
    return { 
      success: true, 
      message: 'Message envoyé avec succès!' 
    }
    } catch (error) {
         console.error('Erreur Resend:', error)
    throw createError({
      statusCode: 500,
      message: 'Impossible d\'envoyer le message'
    })
    }
})