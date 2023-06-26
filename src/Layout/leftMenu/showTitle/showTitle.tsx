import { useEffect, useState } from 'react'
import { MainTitle } from './mainTitleStyle'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { FilesRequest } from '../../../Request/filesRequests'
import { useRouter } from 'next/router';
import { changeFileTitle } from '@/redux/slice/filesTitles'

type props = {
    title: string
    fileID: string
    deleteFile: (fileID: string) => void
    index: Number
}

export const ShowTilte = ({title, fileID, deleteFile, index}: props) => {
    const [cursorPointer, setCursorPointer] = useState<boolean>(true)
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const router = useRouter()
    const dispatch = useDispatch()

    const handleDelete = () => {
        deleteFile(fileID)
    }

    return (
        <MainTitle
            isDark = {isDark}
            cursorPointer = {cursorPointer}
            onClick={() => {router.push(`../dashboard/${fileID}`)}}
        >
            <div id='title'>
                <input 
                    value={title} 
                    onChange={(e) => dispatch(changeFileTitle({_id: fileID, newTitle: e.target.value}))}
                    onDoubleClick={()=> setCursorPointer(false)} 
                    onBlur={() => setCursorPointer(true)}
                />
                <div id='deleteButton' onClick={handleDelete}>❌</div>
            </div>
        </MainTitle>
    )
}