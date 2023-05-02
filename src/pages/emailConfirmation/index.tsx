import { EmailConfirmationDiv } from '../../styles/emailConfirmation'

const EmailConfirmation = () => {

    return (
        <>
            <EmailConfirmationDiv>
                <div id='container'>
                    <p>
                        We sent a link to your email <br />
                        Click on the link to confirm the login
                    </p>
                    <p id='subtitle'>
                        if you does not see the email, check the span
                    </p>
                </div>
            </EmailConfirmationDiv>
        </>
    )
}

export default EmailConfirmation