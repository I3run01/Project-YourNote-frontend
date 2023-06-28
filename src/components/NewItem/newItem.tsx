import { RootState } from '@/redux/store'
import { NewItemDiv } from './newItemStyle'
import { useSelector } from 'react-redux'
import { useState } from 'react'

type props = {
    index: number
    lastItem?:boolean
    newParagraph?: (index: number) => void
    newIDE?: (index: number) => void
    newImage?: (index: number) => void
}

export const NewItem = ({newParagraph, newIDE, newImage, lastItem, index}:props) => {
    const isDark = useSelector((state: RootState) => state.theme.isDark) 
    const [showItensButton, setShowItensButton] = useState<boolean>(false)

    const newParagraphChild = () => {
        
        if(!newParagraph) return

        newParagraph(index)
    }

    const newIDEChild = () => {
        if(!newIDE) return
        
        newIDE(index)
    }

    const newImageChild = () => {
        if(!newImage) return
        
        newImage(index)
    }

    return (
        <NewItemDiv
            isDark={isDark}
            showItensButton={showItensButton}
            lastItem={lastItem}
        >
            <div className='addNewItem'>
                <div className='addNewItemButton' onClick={() => {setShowItensButton(!showItensButton)}}>
                    <img src='/images/icons/newElement.svg' alt=""/>
                </div>
               
                <div className='chooseItemContainer'>
                    <div onClick={newParagraphChild}>Add new a Paragraph</div>
                    <div onClick={newIDEChild}>Add a new IDE</div>
                    <div onClick={newImageChild}>Add new a Image</div>
                </div>
            </div>
        </NewItemDiv>
    )
}