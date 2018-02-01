/**
 * Write API calls here
 */

import { URI } from '../config/constants';

/**
 * Data can be simply get using fetch as shown below, anywhere in app.
 * This function is just used to show professional structure. According to this structure all the API calls written in that file.
 */
export const getData = () => {
    return fetch(URI);
}
