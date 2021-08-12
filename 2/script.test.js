import { getMore, getMonth, circleInSqare } from "./script";

describe("getMore  ", () => {
  it("getMore 8 2", () => {
    console.log = jest.fn();
    getMore(8, 2);
    expect(console.log).toHaveBeenCalledWith(8);
  });
  it("getMore 0 3", () => {
    console.log = jest.fn();
    getMore(0, 3);
    expect(console.log).toHaveBeenCalledWith(3);
  });
  it("getMore 5-9", () => {
    console.log = jest.fn();
    getMore(5, -9);
    expect(console.log).toHaveBeenCalledWith(5);
  });
});

describe("getMonth", () => {
  it("getMonth 6", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "6");
    console.log = jest.fn();
    getMonth("entail", "owing");
    expect(console.log).toHaveBeenCalledWith("Июнь");
  });
  it("getMonth 12", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "12");
    console.log = jest.fn();
    getMonth("lucky", "doom");
    expect(console.log).toHaveBeenCalledWith("Декабрь");
  });
  it("getMonth 1", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "1");
    console.log = jest.fn();
    getMonth("nuclear", "missile");
    expect(console.log).toHaveBeenCalledWith("Январь");
  });
});

describe("circleInSqar", () => {
  it("circleInSqar 40 37", () => {
    console.log = jest.fn();
    circleInSqare(40, 37);
    expect(console.log).toHaveBeenCalledWith("Круг не поместится в квадрат");
  });
  it("circleInSqar 100 100", () => {
    console.log = jest.fn();
    circleInSqare(100, 100);
    expect(console.log).toHaveBeenCalledWith("Круг не поместится в квадрат");
  });
  it("circleInSqar 14 18", () => {
    console.log = jest.fn();
    circleInSqare(14, 18);
    expect(console.log).toHaveBeenCalledWith("Круг поместится в квадрат");
  });
});
