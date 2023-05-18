import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slice/themeSlice'
import userReducer from './slice/userSlice'
import fileReducer from '../redux/slice/fileSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    file: fileReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch