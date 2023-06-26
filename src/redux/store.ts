import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import themeReducer from './slice/themeSlice'
import userReducer from './slice/userSlice'
import filesTitleReducer from './slice/filesTitles'
import { rootSaga } from './sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    filesTitles: filesTitleReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
