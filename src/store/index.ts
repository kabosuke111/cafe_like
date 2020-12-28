import {combineReducers, createStore} from 'redux';
import {toppage_reducer} from './pageTop/title/reducer';
import {toppage_titleimage_reducer} from './pageTop/image/reducer';

//store

const rootReducer = combineReducers({
    toppage: toppage_reducer,
    titleimage: toppage_titleimage_reducer,
});

export type rootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer);

export default store;