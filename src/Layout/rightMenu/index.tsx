import { RightMenuDiv } from './styled'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import Image from 'next/image'
import newElement from '../../../public/images/icons/newElement.svg'
import { PopUp } from './styled'
import { useState } from 'react'

export const RightMenu = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)

    const [isPopUpOpened, setIsPopUpOpened] = useState<boolean>(false)

    return (

        <>
            <PopUp isDark={isDark} isPopUpOpened={isPopUpOpened}>
                <div>+ New paragraph</div>
                <div>+ New image</div>
                <div>+ New IDE</div>
            </PopUp>

        
            <RightMenuDiv isDark={isDark} id='rightMenu'>
                <div id='social'></div>
                <div id='newElement' onClick={() => {setIsPopUpOpened(!isPopUpOpened)}}>
                    <Image
                        src={newElement}
                        alt=''

                        id='plusIMG'
                    />
                </div>
            </RightMenuDiv>
        </>
    )
}