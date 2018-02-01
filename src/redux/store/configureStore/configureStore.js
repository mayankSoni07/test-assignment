/**
 * => Create and export Redux Store here.
 */

import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../../reducers';

/**
 * Redux middileware, Used for Async actions.
 */
import ReduxThunk from 'redux-thunk';

const createRNReduxStore = applyMiddleware(ReduxThunk)(createStore);
const store = createRNReduxStore(rootReducer);

export default store;





