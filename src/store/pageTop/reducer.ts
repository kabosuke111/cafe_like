import {ActionTypes} from '../actionTypes';
import {nonamestate, NoNameActions} from './types';

//reducer

const initialState: nonamestate = {
    nonamestate1: "reduxの設定がありません",
    nonamestate2: "reduxの設定がありません"
}

export const toppage_reducer = (state = initialState, action: NoNameActions): nonamestate => {
    switch(action.type) {
        case ActionTypes.noname1:
            return {
                ...state,
                nonamestate1: "リダックスができません"
            };
        case ActionTypes.noname2:
            return {
                ...state,
                nonamestate1: "ReDuxができません"
            };
        default:
            return state;
    }
}