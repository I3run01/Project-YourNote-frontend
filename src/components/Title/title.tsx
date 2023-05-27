import { useSelector } from 'react-redux'
import { TitleDiv } from './styled'
import { RootState } from '@/redux/store'
import { useEffect, useState } from 'react'

type props = {
    title: string
    onDataReceived: (newTitle: string) => void
}

export const Title = ({title, onDataReceived}:props) => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const [newTitle, setNewTitle] = useState<string>(title)

    useEffect(() => {
        setNewTitle(title);
      }, [title]);

    useEffect(()=>{onDataReceived(newTitle)},[newTitle])
 
    return (
        <TitleDiv isDark={isDark}>
            <input 
                type='text'
                value={newTitle} 
                onChange={(event) => {setNewTitle(event.target.value)}}/>
        </TitleDiv>
    )
}