import {
    SET_SELECTED, SELECT_ALL, PRESS_KEY, RELEASE_KEY,NEW_FOLDER
} from './types';

export const setSelected = name => ({type:SET_SELECTED, payload:name});
export const selectAll = () => ({type:SELECT_ALL});

export const newFolder = name => ({type:NEW_FOLDER, payload:name});

export const pressKey = key => ({type:PRESS_KEY, payload:key});
export const releaseKey = key => ({type:RELEASE_KEY, payload:key});