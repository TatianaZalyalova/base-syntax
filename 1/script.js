/* З №1 */
export function getSum(a, b) {
  console.log(a + b, a * b);
}
/* З №2 */
export function getStrLength(str1, str2) {
  console.log(str1.length + str2.length);
}

/* З №3 */

export function getSumNumber() {
  const number = prompt("Введите трехзначное число:");
  if (number.length === 3) {
    const n1 = +number[0];
    const n2 = +number[1];
    const n3 = +number[2];
    console.log(n1 + n2 + n3);
  }
}
