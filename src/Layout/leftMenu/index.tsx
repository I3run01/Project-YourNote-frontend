import { LeftMenuDiv } from './styled'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { useState } from 'react'
import { changeTheme } from '../../redux/slice/themeSlice'
import menuIcon from '../../../public/images/openAndClosemenuIcon.svg'
import settingsIcon from '../../../public/images/Settings.svg'
import Image from 'next/image'
import { useRouter } from 'next/router';

const list = [
    {title: 'title', id: 1},
    {title: 'title', id: 2},
    {title: 'title', id: 3},
    {title: 'title', id: 4},
    {title: 'title', id: 5},
    {title: 'title', id: 6},
    {title: 'title', id: 7},
    {title: 'title', id: 8},
    {title: 'title', id: 9},
    {title: 'title', id: 10},
]

export const  LeftMenu = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const dispatch = useDispatch();
    const route = useRouter()

    const [isMenuOpend, setIsMenuOpened] = useState<boolean>(false)

    return (
        <LeftMenuDiv
            id='leftMenu'
            isDark={isDark}
            isMenuOpened={isMenuOpend}
        >
            
            <div id='icon' onClick={() => ( setIsMenuOpened(!isMenuOpend))}>
                <Image
                    src={menuIcon}
                    alt=''

                    id='menuIcon'
                />
            </div>

            <div id='newFile'>+ New File</div>

            <div id='filerConainer'>
                {
                    list.map((item, key) => {
                        return (
                            <div className='item' key={key} onClick={() => {route.push(`../dashboard/${item.id}`)}}>
                                - {item.title}
                            </div>
                        )
                    })
                }
            </div>
            
            <div id='settings' onClick={() => {dispatch(changeTheme())}}>
                <Image
                    src={settingsIcon}
                    alt=''
                />
                <p>Change theme</p>
            </div>

        </LeftMenuDiv>
    )
}