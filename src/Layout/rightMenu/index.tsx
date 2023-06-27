import { RightMenuDiv } from './styled'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export const RightMenu = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)

    return (
        <>
            <RightMenuDiv isDark={isDark} id='rightMenu'>
            </RightMenuDiv>
        </>
    )
}