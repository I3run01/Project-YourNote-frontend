import { SignInStyled } from '../../styles/signIn'
import { useState } from 'react'
import { Auth } from '../../Auth/request'
import { useRouter } from 'next/router';
import { GoogleButton } from '../../components/googlesButton'
import { useDispatch } from 'react-redux'
import { changeUser } from '../../slice/userSlice';
import { Loading } from '../../components/loading'
import Link from 'next/link'
import Image from 'next/image'
import backButton from '../../../public/images/backButton.svg'

const SignIn = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setIsLoanding] = useState<boolean>(false)
    const router = useRouter()
    const dispatch = useDispatch();

    const signinRequest = async () => {
        setIsLoanding(true)

        let response = JSON.parse(await new Auth().signIn(email, password))

        setIsLoanding(false)

        if (response.status == 200 && response.data.status === 'Active'){
            dispatch(changeUser(response))
            return router.push('/dashboard')
        }

        alert(response.data.message)   
    }

    return (
        <>
            {isLoading === true && <Loading/>}
        
            <SignInStyled>
                <form id='container'>
                    <Link href={'/'} className='backButton'>
                        <Image
                            src={backButton}
                            alt='back button' 
                        />
                    </Link>

                    <input type="text" placeholder='Email' name='Email'
                    onChange={(event)=>{setEmail(event.target.value)}}/>

                    <input type="password" placeholder='Password' 
                    onChange={(event)=>{setPassword(event.target.value)}}/>

                    <div id='submit' onClick={signinRequest}>Submit</div>

                    <p id='forgetPassword' onClick={() => (router.push('/forgot-password'))}>I forgot my password</p>
                    
                    <GoogleButton/>
                </form>
            </SignInStyled>
        </>
    )
}

export default SignIn