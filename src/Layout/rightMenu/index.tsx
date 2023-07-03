import { RightMenuDiv } from './styled'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { useRouter } from 'next/router';

export const RightMenu = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const specificID = useSelector((state: RootState) => state.filesTitles.specificId)
    const router = useRouter()

    let goToFile = () => {
        if(!specificID) return

        router.push(`../read/${specificID}`)
    }

    return (
        <RightMenuDiv isDark={isDark} id='rightMenu' onClick={goToFile}>
            <div className='sharedContent' >
                www
            </div>
        </RightMenuDiv>
    )
}