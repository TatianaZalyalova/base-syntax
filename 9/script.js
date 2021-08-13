export function isRightTriangle(side1, side2, side3) {
  const arrSide = [side1, side2, side3];
  arrSide.sort((a, b) => a - b);
  return arrSide[2] ** 2 === arrSide[0] ** 2 + arrSide[1] ** 2;
}

export function circleParam() {
  const R = prompt("Введите значение радиуса");
  const C = Math.round(2 * Math.PI * R);
  const S = Math.round(Math.PI * R ** 2);
  console.log(C, S);
}

export function roundOff(num) {
  return Math.round(num * 100) / 100;
}

export function solveQuadEquation(a, b, c) {
  const D = b ** 2 - 4 * a * c;
  if (D > 0) {
    const x1 = roundOff((-b - Math.sqrt(D)) / (2 * a));
    const x2 = roundOff((-b + Math.sqrt(D)) / (2 * a));
    console.log(x1, x2);
    
  } else if (D === 0) {
    const x = roundOff(-b / (2 * a));
    console.log(x);
  } else {
    console.log("Уравнение не имеет вещественных корней.");
  }
}
