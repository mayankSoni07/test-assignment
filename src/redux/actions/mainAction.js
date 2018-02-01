/**
 * Action constants
 */
import * as Action from '../constants/actionConst';

/**
 * Actions Definition starts here
 */

export const changeView = (payload) => {
    return ({
        type: Action.CHANGE_VIEW,
        payload: payload
    })
}

export const dataToProps = (payload) => {
    return ({
        type: Action.DATA_TO_PROPS,
        payload: payload
    })
}