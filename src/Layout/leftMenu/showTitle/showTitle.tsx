import { useEffect, useState } from 'react'
import { MainTitle } from './mainTitleStyle'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { FilesRequest } from '../../../Request/filesRequests'
import { useRouter } from 'next/router';

type props = {
    title: string
    fileID: string
    deleteFile: (fileID: string) => void
}

export const ShowTilte = ({title, fileID, deleteFile}: props) => {
    const [tempTitle, setTempTitle] = useState<string>(title)
    const [cursorPointer, setCursorPointer] = useState<boolean>(true)
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const router = useRouter()

    useEffect(() => {
        updateTitle();
    }, [tempTitle]);

    useEffect(() => {
        setTempTitle(title);
    }, [title]);

    async function updateTitle() {
        let response = await new FilesRequest().updateTitle(fileID, tempTitle);
        let parsedResponse = JSON.parse(response);

        if(parsedResponse.status !== 200) {
            alert('title is not saved')
        }
    }

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
                    value={tempTitle} 
                    onChange={(e) => setTempTitle(e.target.value)}
                    onDoubleClick={()=> setCursorPointer(false)} 
                    onBlur={() => setCursorPointer(true)}
                />
                <div id='deleteButton' onClick={handleDelete}>❌</div>
            </div>
        </MainTitle>
    )
}