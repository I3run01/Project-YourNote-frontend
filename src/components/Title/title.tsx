import { useSelector } from 'react-redux'
import { TitleDiv } from './styled'
import { RootState } from '@/redux/store'
import { useEffect, useState } from 'react'
import { changeFileTitle } from '../../redux/slice/filesTitles'
import { useDispatch } from 'react-redux'

type props = {
    title: string
    fileID: string
}

export const Title = ({title, fileID}:props) => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const [newTitle, setNewTitle] = useState<string>(title)
    const dispatch = useDispatch();

    useEffect(() => {
        setNewTitle(title);
      }, [title]);

    useEffect(()=>{
        console.log(fileID)
        dispatch(changeFileTitle({_id: fileID, newTitle}))
    },[newTitle])
 
    return (
        <TitleDiv isDark={isDark}>
            <input 
                type='text'
                value={newTitle} 
                onChange={(event) => {setNewTitle(event.target.value)}}/>
        </TitleDiv>
    )
}