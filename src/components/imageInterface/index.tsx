import { useState } from 'react'
import { ImageDiv } from './styled'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

type Props = {
    src: string
    alt: string
}

export const ImageInterface = ({src, alt}: Props) => {
    const [isZoom, setIdZoom] = useState<boolean>(false)
    const [imageSrc, setImageSrc] = useState<string>(src)

    const isDark = useSelector((state: RootState) => state.theme.isDark)

    const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const fileReader = new FileReader()

            fileReader.onload = (event: ProgressEvent<FileReader>) => {
                setImageSrc(event.target?.result as string)
            }

            fileReader.readAsDataURL(event.target.files[0])
        }
    }

    return (
        <ImageDiv isZoom={isZoom} isDark={isDark}>
            <div className='changeImage'>
                <div id='icon'>
                    <img src='/images/icons/change.svg' alt=''/>
                </div>
                <div id='text'>
                    <input type="file" accept="image/*" 
                        onChange={handleChangeImage}    
                        style={{ display: 'none' }} 
                        id="change-image-input" 
                    />
                    <label htmlFor="change-image-input">
                        <p>Change image</p>
                    </label>
                </div>
            </div>
            <img src={imageSrc} alt={alt} 
                className='mainImage' 
                onClick={() => setIdZoom(!isZoom)}
            />
        </ImageDiv>
    ) 
}
