/* З №1 */
export function getSumArr(arr) {
  const result = arr.reduce((sum, current) => sum + current, 0);
  return result;
}
/* З №2 */
export function changeArr(arr) {
  const newArr = arr.map((item) => item * 2);
  return newArr;
}
/* З №3 */
export function getMinMaxValue(arr) {
  let min = arr[0];
  let max = min;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  console.log(min, max);
}
