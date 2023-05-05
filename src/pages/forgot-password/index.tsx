import { SignInStyled } from '../../styles/signIn'
import { useState } from 'react'
import { Auth } from '../../Auth/request'
import { Loading } from '../../components/loading'
import Link from 'next/link'
import Image from 'next/image'
import backButton from '../../../public/images/backButton.svg'

const SignIn = () => {
    const [email, setEmail] = useState<string>('')
    const [isLoading, setIsLoanding] = useState<boolean>(false)

    const signinRequest = async () => {
        setIsLoanding(true)

        let response = await new Auth().forgotPassword(email)
        let json = JSON.parse(response)

        setIsLoanding(false)

        if (json.status == 200){
            alert('A link was sent in your email')
        }

        alert(json.data.message)   
    }

    return (
        <>
            {isLoading === true && <Loading/>}
        
            <SignInStyled>
                <form id='container'>
                    <Link href={'/signin'} className='backButton'>
                        <Image
                            src={backButton}
                            alt='back button' 
                        />
                    </Link>

                    <input type="text" placeholder='Email' name='Email'
                    onChange={(event)=>{setEmail(event.target.value)}}/>

                    <div id='submit' onClick={signinRequest}>Submit</div>
                </form>
            </SignInStyled>
        </>
    )
}

export default SignIn