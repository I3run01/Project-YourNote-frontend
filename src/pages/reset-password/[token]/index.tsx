import { ResetPasswordDiv } from '../../../styles/reset-password'
import { useState } from 'react'
import { Auth } from '../../../Auth/request'
import { Loading } from '../../../components/loading'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import backButton from '../../../../public/images/backButton.svg'

const ResetPassword = () => {
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPasswordPassword] = useState<string>('')
    const [isLoading, setIsLoanding] = useState<boolean>(false)
    const router = useRouter()

    const { token } = router.query

    const signinRequest = async () => {

        if(password !== repeatPassword) return

        setIsLoanding(true)

        let response = await new Auth().resetPassword(String(token), password)
        let json = JSON.parse(response)

        setIsLoanding(false)

        if (json.status == 200 && json.data.status === 'Active'){
            router.push('/dashboard')
        }

        alert(json.data.message)   
    }

    return (
        <>
            {isLoading === true && <Loading/>}
        
            <ResetPasswordDiv>
                <form id='container'>
                    <Link href={'/signin'} className='backButton'>
                        <Image
                            src={backButton}
                            alt='back button' 
                        />
                    </Link>

                    <input type="password" placeholder='new password' name='Password'
                    onChange={(event)=>{setPassword(event.target.value)}}/>

                    <input type="password" placeholder='repeat the password' name='repeatPassword'
                    onChange={(event)=>{setPassword(event.target.value)}}/>

                    <div id='submit' onClick={signinRequest}>Submit</div>
                </form>
            </ResetPasswordDiv>
        </>
    )
}

export default ResetPassword