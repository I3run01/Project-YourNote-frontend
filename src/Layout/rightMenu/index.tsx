import { RightMenuDiv } from './styled'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import Image from 'next/image'
import newElement from '../../../public/images/newElement.svg'
import { PopUp } from './styled'

export const RightMenu = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)

    return (

        <>
            <PopUp isDark={isDark}>
                <div>+ New paragraph</div>
                <div>+ New image</div>
                <div>+ New IDE</div>
            </PopUp>
        
            <RightMenuDiv isDark={isDark} id='rightMenu'>
                <div id='social'></div>
                <div id='newElement'>
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