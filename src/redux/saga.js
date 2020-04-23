import { all } from 'redux-saga/effects';
import explorerSaga from './explorer/saga';

function* saga(){
    yield all([
        explorerSaga(),
    ])
}

export default saga;