import { GoogleButtonStyled } from './styled'
import GoogleLogo from '../../../public/images/googleLogo.svg'
import Image from 'next/image'

export const GoogleButton = () => {
    const googleSignIn = () => {
        alert('googlesSign')
    }
 
    return (
        <GoogleButtonStyled onClick={googleSignIn}>
            <Image
                src={GoogleLogo}
                alt='logo of google'

                className='googleLogo'
            />
            <p>Continue with google</p>
    </GoogleButtonStyled>
    )
}