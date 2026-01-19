import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    theme:{
        extend:{
            colors:{
                primary: '#635BFF',
                'primary-light': '#ECEBFF',
                'primary-hover':'#A6A2F4',
                'primary-dark' :'#2F2A83',
                secondary:'#1F2A3D',
                'secondary-darker':"#1A2537",
                gray:'#F4F7FB',
                
            }
        }
    }
}