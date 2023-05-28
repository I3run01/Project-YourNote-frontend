import { GoogleButtonStyled } from './styled'
import { useGoogleLogin} from '@react-oauth/google';
import { useEffect, useState } from 'react'
import { Auth } from '../../Auth/request'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'
import { changeUser } from '../../redux/slice/userSlice';
import { Loading } from '../../components/loading'
import GoogleLogo from '../../../public/images/icons/googleLogo.svg'
import Image from 'next/image'


export const GoogleButton = () => {
    const [ user, setUser ] = useState<any>();
    const [isLoading, setIsLoanding] = useState<boolean>(false)
    const router = useRouter()
    const dispatch = useDispatch();

    const login = useGoogleLogin({
        onSuccess: (codeResponse: any) => setUser(codeResponse),
        onError: (error: unknown) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        userRequest()
    }, [user])

    const userRequest = async () => {
        if(!user) return

        setIsLoanding(true)

        let response = JSON.parse(await new Auth().googleSignIn(user.access_token))

        setIsLoanding(false)

        console.log(response)
        
        if(response.status == 200) {
            dispatch(changeUser(response))
            return router.push('/dashboard')
        }

        else if (response.data.error) alert(response.data.error)

        else if (response.status.message) alert(response.status.message)
        
        alert('something wrong happened')
    }

    
 
    return (
        <>
            {isLoading && <Loading/>}

            <GoogleButtonStyled onClick={() => login()}>
                <Image
                    src={GoogleLogo}
                    alt='logo of google'

                    className='googleLogo'
                />
                <p>Continue with google</p>
            </GoogleButtonStyled>  
        </>
    )
}