import {combineReducers, createStore} from 'redux';
import {toppage_reducer} from './pageTop/reducer';

//store

const rootReducer = combineReducers({
    toppage: toppage_reducer,
});

export type rootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer);

export default store;