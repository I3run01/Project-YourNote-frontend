import { useSelector } from 'react-redux'
import { TitleDiv } from './styled'
import { RootState } from '@/redux/store'
import { useEffect } from 'react'
import { changeFileTitle ,changeSpecTitle } from '../../redux/slice/filesTitles'
import { useDispatch } from 'react-redux'

type props = {
    fileID: string
}

export const Title = ({fileID}:props) => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const title = useSelector((state: RootState) => state.filesTitles)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(changeSpecTitle({_id: fileID}))
    }, [title.files, fileID] )

    return (
        <TitleDiv isDark={isDark}>
            {/* <input 
                type='text'
                value={title.specTitle}
                onChange={(e) => dispatch(changeFileTitle({_id: fileID, newTitle: e.target.value}))}
            /> */}
            <h1>Title</h1>
        </TitleDiv>
    )
}