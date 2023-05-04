import { GoogleButtonStyled } from './styled'
import { useGoogleLogin} from '@react-oauth/google';
import { useEffect, useState } from 'react'
import { Auth } from '../../Auth/request'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'
import { changeAuth } from '@/slice/authSLice';
import GoogleLogo from '../../../public/images/googleLogo.svg'
import Image from 'next/image'


export const GoogleButton = () => {
    const [ user, setUser ] = useState<any>();
    const router = useRouter()
    const dispatch = useDispatch();

    const login = useGoogleLogin({
        onSuccess: (codeResponse: any) => setUser(codeResponse),
        onError: (error: unknown) => console.log('Login Failed:', error)
    });

    const userRequest = async () => {
        if(!user) return

        let response = JSON.parse(await new Auth().googleSignIn(user.access_token))
        
        if(response.status == 200) return router.push('/dashboard')

        alert(response.status.message)
    }

    useEffect(() => {
        userRequest()
    }, [user])
 
    return (
        <GoogleButtonStyled onClick={() => login()}>
            <Image
                src={GoogleLogo}
                alt='logo of google'

                className='googleLogo'
            />
            <p>Continue with google</p>
    </GoogleButtonStyled>
    )
}