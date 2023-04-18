import { useSelector } from 'react-redux'
import { InitialMenuStyled } from './styled'
import { RootState } from '@/store'

export const InitionalMenu = () => {
    const theme = useSelector((state: RootState) => state.theme.value)

    return (
        <InitialMenuStyled
        theme={theme}>
            <div id='container'>
                <div className='signin'>
                    <p>Sign In</p>
                </div>
                <div className='signup'>
                    <p>Sign Up</p>
                </div>
            </div>
        </InitialMenuStyled>
    )
}
