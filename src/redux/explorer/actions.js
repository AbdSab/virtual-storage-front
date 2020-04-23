import {
    FETCH_FOLDER
} from './types';

export const getFolderContent = (path="") => ({type:FETCH_FOLDER, payload:path});