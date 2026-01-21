import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    theme:{
        extend:{
            colors:{
                primary: '#5A54CF',
                'primary-light': '#ECEBFF',
                'primary-hover':'#A6A2F4',
                'primary-dark' :'#2F2A83',
                secondary:'#1F2A3D',
                'secondary-darker':"#1A2537",
                gray:'#F4F7FB',
                'confirm-light':'#FEF9C2',
                confirm:'#8A6115',
                'junior-light':'#DCFCE7',
                junior:'#126457',
                'senior-light':'#F3E8FF',
                senior:'#9810FA'
                
            }
        }
    }
}