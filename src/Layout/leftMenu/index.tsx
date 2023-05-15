import { LeftMenuDiv } from './styled'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useState } from 'react'
import menuIcon from '../../../public/images/openAndClosemenuIcon.svg'
import Image from 'next/image'

const list = [
    {title: 'title'},
    {title: 'title'},
    {title: 'title'},
    {title: 'title'},
    {title: 'title'},
    {title: 'title'},
    {title: 'title'},
    {title: 'title'},
    {title: 'title'},
    {title: 'title'},
    {title: 'title'},
    {title: 'title'},
]

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
                        <div className='item' key={key}>
                            {item.title}
                        </div>
                    )
                })
            }
        </div>
        
        <div id='settings'>Settings</div>

        </LeftMenuDiv>
    )
}