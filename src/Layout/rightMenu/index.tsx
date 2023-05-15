import { RightMenuDiv } from './styled'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

export const RightMenu = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)

    return (

        <RightMenuDiv isDark={isDark}>
            
        </RightMenuDiv>
    )
}