import {
    FETCHING_FOLDER,
    FETCHING_FOLDER_SUCCESS,
    FETCHING_FOLDER_FAILED,
    FETCH_FOLDER
} from './types';
import getContentFromPath from '../../utils/getContentFromPath';

const initialState = {
    path: '/',
    content:{files:[], folders:{}},
    status:'init',
}

const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case FETCH_FOLDER:
            return {
                ...state,
                path:payload,
            }
        case FETCHING_FOLDER:
            return {
                ...state,
                status:'fetching',
            }
        case FETCHING_FOLDER_SUCCESS:{
            const content = payload;
            const newState = JSON.parse(JSON.stringify(state));
            const folder = getContentFromPath(newState.path, newState.content);
            folder.files = content.files;
            folder.folders = {};
            Object.keys(content.folders).forEach(f => {
                const key = content.folders[f];
                folder.folders[key] = {}
            });
            return {
                ...newState,
                status: 'success',
            }
        }
        case FETCHING_FOLDER_FAILED:
            return {
                ...state,
                status:'fail',
            }
        default:
            return state;
    }
}

export default reducer;