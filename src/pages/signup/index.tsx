import { SignUpStyled } from '../../styles/signUp'
import { Auth } from '../../Auth/request'
import { useEffect, useState } from 'react'
import { GoogleButton } from '../../components/googlesButton'
import { Loading } from '../../components/loading'
import Link from 'next/link'
import Image from 'next/image'
import backButton from '../../../public/images/icons/backButton.svg'


const SignUp = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [corretEmail, setCorrectEmail] = useState<boolean>(false)
    const [mathPassword, setMathPassword] = useState<boolean>(false)
    const [isLoading, setIsLoanding] = useState<boolean>(false)

    useEffect(() => {
        correctDatas()
    }, [email, password, confirmPassword])

    const isValidEmail = (email: string): Boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        return emailRegex.test(email);
    }

    const correctDatas = (): void => {
        isValidEmail(email) ? setCorrectEmail(true) : setCorrectEmail(false)
        password === confirmPassword && password ? setMathPassword(true) : setMathPassword(false)
    }

    const signupRequest = async () => {
        setIsLoanding(true)
        
        let response = JSON.parse(await new Auth().signUp(email, password))

        setIsLoanding(false)

        if (response.status == 200) {
            return alert('A link was sent in your email to verify your account')
        }

        else if (response.message) return alert(response.message)

        else if (response.data && response.data.message) {
            return alert(response.data.message)
        }
        
        alert('something wrong happened')
        
    }

    return (
        <>
            {isLoading && <Loading/>}

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

                    <div id='submit' onClick={signupRequest}>Submit</div>
                    
                    <GoogleButton/>

                </form>
            </SignUpStyled>
        </>
    )
}

export default SignUp