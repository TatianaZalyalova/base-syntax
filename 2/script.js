/* З №1 */
export function getMore(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
/* З №2 */
export function getMonth() {
  const numberMonth = +prompt("Введите число от 1 до 12:");
  switch (numberMonth) {
    case 1:
      console.log("Январь");
      break;
    case 2:
      console.log("Февраль");
      break;
    case 3:
      console.log("Март");
      break;
    case 4:
      console.log("Апрель");
      break;
    case 5:
      console.log("Май");
      break;
    case 6:
      console.log("Июнь");
      break;
    case 7:
      console.log("Июль");
      break;
    case 8:
      console.log("Август");
      break;
    case 9:
      console.log("Сентябрь");
      break;
    case 10:
      console.log("Октябрь");
      break;
    case 11:
      console.log("Ноябрь");
      break;
    case 12:
      console.log("Декабрь");
      break;
    default:
      console.log("Введите число от 1 до 12");
  }
}

/* З №3 */

export function circleInSqare(circle, sqare) {
  const diametrCircle = Math.sqrt(circle / Math.PI) * 2;
  const sqareSide = Math.sqrt(sqare);
  if (diametrCircle <= sqareSide) {
    console.log("Круг поместится в квадрат");
  } else {
    console.log("Круг не поместится в квадрат");
  }
}
