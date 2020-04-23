import { createStore,combineReducers, applyMiddleware  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import saga from './saga';


import explorerReducer from 'redux/explorer/reducer';
import folderReducer from 'redux/folder/reducer';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    explorer:explorerReducer,
    folder:folderReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(saga)

export default store;
