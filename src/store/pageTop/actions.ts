import {ActionTypes} from '../actionTypes';
import {NoNameActions} from './types';

//action creator
export const NoNameAction1 = (): NoNameActions => {
    return {
        type: ActionTypes.noname1,
    }
}

export const NoNameAction2 = (): NoNameActions => {
    return {
        type: ActionTypes.noname2
    }
}

