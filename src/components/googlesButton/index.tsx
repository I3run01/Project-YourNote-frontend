import { GoogleButtonStyled } from './styled'
import { useGoogleLogin} from '@react-oauth/google';
import { useEffect, useState } from 'react'
import { Auth } from '../../Auth/request'
import axios from "axios"
import GoogleLogo from '../../../public/images/googleLogo.svg'
import Image from 'next/image'


export const GoogleButton = () => {
    const [ user, setUser ] = useState<any>();

    const login = useGoogleLogin({
        onSuccess: (codeResponse: any) => setUser(codeResponse),
        onError: (error: unknown) => console.log('Login Failed:', error)
    });

    const userRequqst = async () => {
        if(!user) return

        try {
            let googleResponse = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: 'application/json'
                }
            })

            
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        userRequqst()
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