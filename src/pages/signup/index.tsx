import { SignUpStyled } from '../../styles/signUp'
import { useEffect, useState } from 'react'
import { Auth } from '../../Auth/request'
import Link from 'next/link'
import Image from 'next/image'
import GoogleLogo from '../../../public/images/googleLogo.svg'
import backButton from '../../../public/images/backButton.svg'


const SignUp = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [corretEmail, setCorrectEmail] = useState<boolean>(false)
    const [mathPassword, setMathPassword] = useState<boolean>(false)

    useEffect(() => {
        correctDatas()
    }, [email, password, confirmPassword])

    function isValidEmail(email: string): Boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        return emailRegex.test(email);
    }

    const correctDatas = () => {
        isValidEmail(email) ? setCorrectEmail(true) : setCorrectEmail(false)
        password === confirmPassword ? setMathPassword(true) : setMathPassword(false)
    }

    const request = async () => {
        let request = await Auth.signUp(email, password)
        console.log(request)
    }

    return (
        <SignUpStyled
            correctEmail={corretEmail}
            mathPassword={mathPassword}
        >
            <form id='container'>
                <Link href={'/'} className='backButton'>
                    <Image
                        src={backButton}
                        alt='back button' 
                    />
                </Link>

                <input type="text" placeholder='Email' name='Email'               onChange={(event)=>{setEmail(event.target.value)}}/>
                <p className='corretEmail'>{corretEmail ? 'Email is correct' : 'Email is incorrect'}</p>

                <input type="password" placeholder='Password' 
                onChange={(event)=>{setPassword(event.target.value)}}/>
                <p className='mathPassword'>{mathPassword ? "Password match" : "Passwords do not match"}</p>


                <input type="password" placeholder='Confirm password' 
                onChange={(event)=>{setConfirmPassword(event.target.value)}}/>
                <p className='mathPassword'>{mathPassword ? "Password match" : "Passwords do not match"}</p>

                <div id='submit' onClick={request}>Submit</div>
                
                <div id="GooglesLogin" >
                    <Image
                        src={GoogleLogo}
                        alt='logo of google'

                        className='googleLogo'
                    />
                    <p>Continue with google</p>
                </div>

            </form>
        </SignUpStyled>
    )
}

export default SignUp