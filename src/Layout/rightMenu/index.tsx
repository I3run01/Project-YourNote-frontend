import { RightMenuDiv } from './styled'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import Image from 'next/image'
import newElement from '../../../public/images/newElement.svg'

export const RightMenu = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)

    return (

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
    )
}