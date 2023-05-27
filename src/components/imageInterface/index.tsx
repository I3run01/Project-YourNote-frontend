import React, { useState, useRef } from 'react'
import { ImageDiv } from './styled'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

type Props = {
    src: string
    alt: string
    index: number
    onDataReceived: (index:number, data:string) => void
}

export const ImageInterface = ({src, alt, index, onDataReceived}: Props) => {
    const [isZoom, setIdZoom] = useState<boolean>(false)
    const [imageSrc, setImageSrc] = useState<string>(src)
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const isDark = useSelector((state: RootState) => state.theme.isDark)

    const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            // Check if file is an image
            const validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/svg'];
            if (!validImageTypes.includes(file.type)) {
                // If the file is not an image, show an alert and do not continue
                alert("Only image files are allowed");
                return;
            }
            const reader = new FileReader();
            reader.onloadend = function () {
                if (reader.result) {
                    let imageCode64 = reader.result.toString()
                    setImageSrc(imageCode64)
                    onDataReceived(index, imageCode64)
                }
            }
            reader.readAsDataURL(file);
        }
    }

    const handleFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    return (
        <ImageDiv isZoom={isZoom} isDark={isDark}>
            <div className='changeImage' onClick={handleFileInput}>
                <div id='icon'>
                    <img src='/images/icons/change.svg' alt=''/>
                </div>
                <div id='text'>
                    <div>
                        <p>Change image</p>
                        <input ref={fileInputRef} type='file' style={{display: 'none'}} onChange={handleChangeImage} />
                    </div>
                </div>
            </div>
            <img src={imageSrc} alt={alt} 
                className='mainImage' 
                onClick={() => setIdZoom(!isZoom)}
            />
        </ImageDiv>
    ) 
}
