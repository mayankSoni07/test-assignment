/**
 * Methods in this file are used to scale height, width and font-size according to current device
 * on the basis of guideline sizes.
 */

import { width, height } from './device';

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 412;
const guidelineBaseHeight = 684;

const scale = width / guidelineBaseWidth;

/**
 * It is generally used for font-size scaling.
 * @param {Size to scale according to current device} size 
 */
function normalize(size: number): number {
  return Math.round(scale * size);
}

/**
 * It is used to scale Width according to current device.
 * @param {Width to scale on basis of current device} size 
 */
const normalScale = size => width / guidelineBaseWidth * size;

/**
 * It is used to scale Height according to current device.
 * @param {Height to scale on basis of current device} size 
 */
const verticalScale = size => height / guidelineBaseHeight * size;

/**
 * It is used to scale both Height and Width according to current device.
 * @param {Size to scale for height and width both on basis of current device.} size 
 */
const moderateScale = (size, factor = 0.5) => size + (normalScale(size) - size) * factor;


/**
 * Exported all the methods here
 */
export default normalize;
export { normalScale, verticalScale, moderateScale };