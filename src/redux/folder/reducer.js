import {
    SET_SELECTED, SELECT_ALL, PRESS_KEY, RELEASE_KEY, NEW_FOLDER,
} from './types';

const initialState = {
    selections: {},
    keys:{},
}

const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case SET_SELECTED:
            const selections = state.keys["Shift"] ? {...state.selections} : {};
            selections[payload] = true
            return {
                ...state,
                selections,
            }
        case SELECT_ALL:{
            return {
                ...state,
            }
        }
        case NEW_FOLDER:{
            return state;
        }
        case PRESS_KEY:{
            const keys = {...state.keys};
            keys[payload] = true;
            return {
                ...state,
                keys,
            }
        }
        case RELEASE_KEY:{
            const keys = {...state.keys};
            delete keys[payload];
            return {
                ...state,
                keys,
            }
        }
        default:
            return state;
    }
}

export default reducer;