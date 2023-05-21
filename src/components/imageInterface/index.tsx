import { useState } from 'react'
import { ImageDiv } from './styled'

type props = {
    src: string
    alt: string
}

export const ImageInterface = ({src, alt}: props) => {
    const [isZoom, setIdZoom] = useState<boolean>(false)

    return (
        <ImageDiv isZomm={isZoom}>
            <img src={src} alt={alt} onClick={() => {setIdZoom(!isZoom)}}/>
        </ImageDiv>
    ) 
}
        
         