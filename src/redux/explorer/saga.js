import {
    FETCH_FOLDER,
    FETCHING_FOLDER,
    FETCHING_FOLDER_SUCCESS,
    FETCHING_FOLDER_FAILED,
} from './types';
import { put, call, takeEvery } from 'redux-saga/effects'

import {listFolderApi} from 'api/explorer'

function* fetchFolder({payload}) {
    yield put({type:FETCHING_FOLDER});
    try{
        const result = yield call(listFolderApi, payload);
        yield put({
            type:FETCHING_FOLDER_SUCCESS,
            payload:result
        });
    }catch(err){
        console.log(err.message);
        yield put({type:FETCHING_FOLDER_FAILED});
    }
}

function* watchFolder(){
    yield takeEvery(FETCH_FOLDER, fetchFolder);
}

export default watchFolder;