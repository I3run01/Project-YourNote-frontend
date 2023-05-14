import { LeftMenuDiv } from './styled'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useState } from 'react'

export const  LeftMenu = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)

    const [isMenuOpend, setIsMenuOpened] = useState<boolean>(false)

    return (
        <LeftMenuDiv
            id="container" 
            isDark={isDark}
            isMenuOpened={isMenuOpend}
        >
            
        <div id='icon' onClick={() => ( setIsMenuOpened(!isMenuOpend))}>

        </div>

        </LeftMenuDiv>
    )
}