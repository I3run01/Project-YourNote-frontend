import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slice/themeSlice'
import userReducer from './slice/userSlice'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer
  },
  middleware:()=>[sagaMiddleware]
})

//sagaMiddleware.run();

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch