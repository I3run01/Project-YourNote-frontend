import { useState } from 'react'
import { ImageDiv } from './styled'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

type props = {
    src: string
    alt: string
}

export const ImageInterface = ({src, alt}: props) => {
    const [isZoom, setIdZoom] = useState<boolean>(false)

    const isDark = useSelector((state: RootState) => state.theme.isDark)

    return (
        <ImageDiv isZomm={isZoom} isDark={isDark}>
            <div className='changeImage'>
                <div id='icon'>
                    <img src='/images/icons/change.svg' alt=''/>
                </div>
                <div id='text'>
                    <p>Change image</p>
                </div>

            </div>

            <img src={src} alt={alt} 
                className='mainImage' 
                onClick={() => {setIdZoom(!isZoom)}}
            />
        </ImageDiv>
    ) 
}
        
         