/* З №1 */
export function getSumInteger(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i += 1) {
    sum += i;
  }
  console.log(sum);
}
/* З №2 */
export function getMultiplicationTable(number) {
  for (let i = 1; i <= 9; i += 1) {
    const res = number * i;
    console.log(`${number} * ${i} = ${res}`);
  }
}

/* З №3 */

export function getAverage() {
  const numberInput = prompt("Введите число:");
  let sumNumber = 0;
  let counter = 0;
  for (let i = 1; i <= numberInput; i += 2) {
    sumNumber += i;
    counter += 1;
  }
  console.log(sumNumber / counter);
}
