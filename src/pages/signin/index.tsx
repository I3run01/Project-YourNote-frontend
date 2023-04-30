import { SignInStyled } from '../../styles/signIn'
import { useEffect, useState } from 'react'
import { Auth } from '../../Auth/request'
import { useRouter } from 'next/router';
import { GoogleButton } from '../../components/googlesButton'
import { useDispatch } from 'react-redux'
import { changeAuth } from '@/slice/authSLice';
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

    useEffect(() => {
        signinRequest()
    }, [email, password])

    const signinRequest = async () => {
        setIsLoanding(true)

        let response = await new Auth().signIn(email, password)
        let json = JSON.parse(response)

        if (json.data){
            dispatch(changeAuth(true))
            return router.push('/dashboard')
        }

        setIsLoanding(false)
    }

    return (
        <>
            {isLoading && <Loading/>}
        
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

                    <p id='forgetPassword'>I forget my password</p>
                    
                    <GoogleButton/>
                </form>
            </SignInStyled>
        </>
    )
}

export default SignIn