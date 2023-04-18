import Link from 'next/link'
import { SignInStyled } from '../../styles/signIn'
import Image from 'next/image'
import GoogleLogo from '../../../public/images/googleLogo.svg'
import backButton from '../../../public/images/backButton.svg'
import { useState } from 'react'


const SignUp = () => {

    return (
        <SignInStyled>
            <form id='container'>
                <Link href={'/'} className='backButton'>
                    <Image
                        src={backButton}
                        alt='back button' 
                    />
                </Link>

                <input type="text" placeholder='Email' name='Email'               onChange={(event)=>{setEmail(event.target.value)}}/>

                <input type="password" placeholder='Password' 
                onChange={(event)=>{setPassword(event.target.value)}}/>

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
        </SignInStyled>
    )
}

export default SignUp