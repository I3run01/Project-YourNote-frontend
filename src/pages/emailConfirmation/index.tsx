import { EmailConfirmationDiv } from '../../styles/email Confirmation'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'
import { Loading } from '../../components/loading'
import { utilsFunctions } from '../../utils/funtions'
import Link from 'next/link'
import Image from 'next/image'
import backButton from '../../../public/images/backButton.svg'


const emailConfirmation = (email:string, password: string) => {
    const [isLoading, setIsLoanding] = useState<boolean>(false)
    const [emailCodeSent, setEmailCodeSent] = useState<string>('')
    const [emailCodeInput, setEmailCodeInput] = useState<string>(utilsFunctions.generateFourRandomNumbers)
    const router = useRouter()
    const dispatch = useDispatch();

    useEffect(() => {
        matchEmailCode()
    }, [emailCodeInput])

    const matchEmailCode = () => {
        if(emailCodeSent === emailCodeInput) return alert('match code')
    }

    return (
        <>
            {isLoading && <Loading/>}

            <EmailConfirmationDiv
            >
                <div id='container'>
                    <Link href={'/'} className='backButton'>
                        <Image
                            src={backButton}
                            alt='back button' 
                        />
                    </Link>

                    <label htmlFor="Email code">Post Email Code</label>
                    <input type="text" onChange={(event) => setEmailCodeSent(event.target.value)} placeholder="Enter email code" />
                </div>
            </EmailConfirmationDiv>
        </>
    )
}

export default emailConfirmation