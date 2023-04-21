import { GoogleButtonStyled } from './styled'
import GoogleLogo from '../../../public/images/googleLogo.svg'
import Image from 'next/image'

export const GoogleButton = () => {

    return (
        <GoogleButtonStyled>
                    <Image
                        src={GoogleLogo}
                        alt='logo of google'

                        className='googleLogo'
                    />
                    <p>Continue with google</p>
        </GoogleButtonStyled>
    )
}