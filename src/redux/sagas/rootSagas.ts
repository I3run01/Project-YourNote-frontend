import { all } from 'redux-saga/effects';
import userSaga from '@/redux/sagas/userSaga';
import { watchUpdateTitleSaga } from '@/redux/sagas/filesTitlesSaga';

export function* rootSaga() {
    yield all([
        userSaga(),
        watchUpdateTitleSaga(),
    ])
}