import { isRightTriangle, circleParam, solveQuadEquation } from "./script";

describe("isRightTriangle", () => {
  it("isRightTriangle 50 70 65", () => {
    expect(isRightTriangle(50, 70, 65)).toBe(false);
  });
  it("isRightTriangle 50 70 65", () => {
    expect(isRightTriangle(5, 3, 4)).toBe(true);
  });
  it("isRightTriangle 100 99 101", () => {
    expect(isRightTriangle(100, 99, 101)).toBe(false);
  });
});

describe("kenUserYounger", () => {
  it("circleParam 5", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "5");
    console.log = jest.fn();
    circleParam();
    expect(console.log).toHaveBeenCalledWith(31, 79);
  });
  it("circleParam 1", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "1");
    console.log = jest.fn();
    circleParam();
    expect(console.log).toHaveBeenCalledWith(6, 3);
  });
  it("circleParam 0", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "0");
    console.log = jest.fn();
    circleParam();
    expect(console.log).toHaveBeenCalledWith(0, 0);
  });
});

describe("solveQuadEquation", () => {
  it("solveQuadEquation 2 -9 7", () => {
    console.log = jest.fn();
    solveQuadEquation(2, -9, 7);
    expect(console.log).toHaveBeenCalledWith(1, 3.5);
  });
  it("solveQuadEquation 58 48 -35", () => {
    console.log = jest.fn();
    solveQuadEquation(58, 48, 35);
    expect(console.log).toHaveBeenCalledWith(
      "Уравнение не имеет вещественных корней."
    );
  });
  it("solveQuadEquation 9 -30 25", () => {
    console.log = jest.fn();
    solveQuadEquation(9, -30, 25);
    expect(console.log).toHaveBeenCalledWith(1.67);
  });
});
