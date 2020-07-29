import {ActionTypes} from '../actionTypes';
import {Action} from 'redux';

//stateの型
export type nonamestate = {
    nonamestate1: string;
    nonamestate2: string;
}

//actionの型
interface NoNameAction1 extends Action {
    type: typeof ActionTypes.noname1;
}

interface NoNameAction2 extends Action {
    type: typeof ActionTypes.noname2;
}

export type NoNameActions = NoNameAction1 | NoNameAction2;