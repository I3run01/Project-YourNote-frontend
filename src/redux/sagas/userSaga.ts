import { takeLatest, put, call } from 'redux-saga/effects';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchUser, changeUser } from '../slice/userSlice';
import { Auth } from '@/Auth/request';

function* fetchUserSaga(action: PayloadAction<void>): Generator<any, void, any> {
  try {
    const auth = new Auth();
    const response: string = yield call([auth, auth.user]);

    yield put(changeUser(JSON.parse(response)));
  } catch (err: any) {
    yield put(changeUser(null));
    
    if(err.data?.message) return console.log(err.data.message)

    else if(err.message) return console.log(err.message)

    else return console.log('Something wrong happened')

  }
}

function* userSaga(): Generator<any, void, any> {
  yield takeLatest(fetchUser.type, fetchUserSaga);
}

export default userSaga;
