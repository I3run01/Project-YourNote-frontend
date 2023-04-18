import Link from 'next/link'
import { SignIn_SignUp } from '../../styles/signIn&signUp'
import Image from 'next/image'
import GoogleLogo from '../../../public/images/googleLogo.svg'
import backButton from '../../../public/images/backButton.svg'


const SignIn = () => {

    return (
        <SignIn_SignUp>
            <form id='container'>
                <Link href={'/'} className='backButton'>
                    <Image
                        src={backButton}
                        alt='back button' 
                    />
                </Link>

                <input type="text" placeholder='Email' name='Email'/>
                <input type="password" placeholder='Password' />

                <p id='forgetPassword'>I forget my password</p>
                
                <div id="GooglesLogin" >
                    <Image
                        src={GoogleLogo}
                        alt='logo of google'

                        className='googleLogo'
                    />
                    <p>Continue with google</p>
                </div>
            </form>
        </SignIn_SignUp>
    )
}

export default SignIn