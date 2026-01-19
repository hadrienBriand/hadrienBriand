import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    theme:{
        extend:{
            colors:{
                primary: '#635BFF',
                'primary-light': '#ECEBFF',
                'primary-dark' :'#2F2A83',
                secondary:'#F4F7FB'
            }
        }
    }
}