/**
 * It is the Root reducer where all the reducers combined and exported.
 */

import { combineReducers } from 'redux';

import mainReducer from './MainReducer';

const rootReducer = combineReducers({
    mainReducer
});

export default rootReducer;