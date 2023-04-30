import { GoogleButtonStyled } from './styled'
import { useGoogleLogin} from '@react-oauth/google';
import { useEffect, useState } from 'react'
import { Auth } from '../../Auth/request'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'
import { changeAuth } from '@/slice/authSLice';
import axios from "axios"
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

        try {
            let googleResponse = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: 'application/json'
                }
            })

            let googleUserData = googleResponse.data

            console.log(googleUserData)
            
            let userResponse = JSON.parse(await new Auth().googleSignIn(
                googleUserData.email,
                googleUserData.name,
                googleUserData.picture,
            ))

            if(userResponse.data) {
                dispatch(changeAuth(true))
                return router.push('/dashboard')
            }
            
        } catch(error) {
            console.log(error)
        }

        router.push('/dashboard')
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