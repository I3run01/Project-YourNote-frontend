import { InitialStyled } from '../styles/initialStyled'
import { InitionalMenu } from '../components/initialMenu'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../slice/themeSlice'
import type { RootState } from '../store'

export default function Home() {
  const theme = useSelector((state: RootState) => state.theme.value)
  const dispatch = useDispatch()

  return (
    <InitialStyled>
      <InitionalMenu/>
    </InitialStyled>
  )
}
