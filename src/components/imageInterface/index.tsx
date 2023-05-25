import { useState } from 'react'
import { ImageDiv } from './styled'
import changeIMAGE from '../../../public/images/icons/change.svg'
import Image from 'next/image'

type props = {
    src: string
    alt: string
}

export const ImageInterface = ({src, alt}: props) => {
    const [isZoom, setIdZoom] = useState<boolean>(false)

    return (
        <ImageDiv isZomm={isZoom}>
            <div className='changeImage'>
                <div id='icon'>
                    <Image src={changeIMAGE} alt=''/>
                </div>
                <div id='text'>
                    <p>Change image</p>
                </div>

            </div>
            <img src={src} alt={alt} className='mainImage' onClick={() => {setIdZoom(!isZoom)}}/>
        </ImageDiv>
    ) 
}
        
         