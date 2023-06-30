import { takeEvery, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { filesSlice, ChangeTitlePayload } from '@/redux/slice/filesTitles';
import { FilesRequest } from '@/Request/filesRequests';

const myApiService = new FilesRequest();

function* updateTitleSaga(action: PayloadAction<ChangeTitlePayload>): Generator<any, void, any> {
    try {
        const payload = action.payload;
        const response = yield call([myApiService, myApiService.updateTitle], payload._id, payload.newTitle);
    } catch (error: any) {
        alert('not saving')
        
        if (error.data?.message) return alert(error.data?.message)

        else if (error.message) return alert(error.message)

        alert('something wrong happened')
    }
}

export function* watchUpdateTitleSaga(): Generator<any, void, any> {
    yield takeEvery(filesSlice.actions.changeFileTitle.type, updateTitleSaga);
}
