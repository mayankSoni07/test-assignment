/**
 * Import Action constants.
 */
import * as Action from '../constants/actionConst';

/**
 * Define Initial state for reducer.
 */
const INITIAL_STATE = {
    isListView: false, locations: []
};

/**
 * Export reducer
 * It takes previous state, action and returns new state.
 */
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Action.CHANGE_VIEW:
            return { ...state, isListView: action.payload};
        case Action.DATA_TO_PROPS:
            return { ...state, locations: action.payload};
            
        default:
            return state;
    }
}