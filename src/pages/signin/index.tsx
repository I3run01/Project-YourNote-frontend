import { SignIn_SignUp } from '../../styles/signIn&signUp'
import Image from 'next/image'
import GoogleLogo from '../../../public/images/googleLogo.svg'

const SignIn = () => {

    return (
        <SignIn_SignUp>
            <form id='container'>
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