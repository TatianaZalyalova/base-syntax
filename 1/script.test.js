import { getSum, getStrLength, getSumNumber } from "./script";

describe("getSum", () => {
  it("getSum 1+6", () => {
    console.log = jest.fn();
    getSum(1, 6);
    expect(console.log).toHaveBeenCalledWith(7, 6);
  });
  it("getSum 2+7", () => {
    console.log = jest.fn();
    getSum(0, 3);
    expect(console.log).toHaveBeenCalledWith(3, 0);
  });
  it("getSum 5-9", () => {
    console.log = jest.fn();
    getSum(5, -9);
    expect(console.log).toHaveBeenCalledWith(-4, -45);
  });
});

describe("getStrLength", () => {
  it("getStrLength entail owing", () => {
    console.log = jest.fn();
    getStrLength("entail", "owing");
    expect(console.log).toHaveBeenCalledWith(11);
  });
  it("getStrLength lucky doom", () => {
    console.log = jest.fn();
    getStrLength("lucky", "doom");
    expect(console.log).toHaveBeenCalledWith(9);
  });
  it("getStrLength nuclear missile", () => {
    console.log = jest.fn();
    getStrLength("nuclear", "missile");
    expect(console.log).toHaveBeenCalledWith(14);
  });
});

describe("getSumNumber", () => {
  it("getSumNumber 111", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "111");
    console.log = jest.fn();
    getSumNumber();
    expect(console.log).toHaveBeenCalledWith(3);
  });
  it("getSumNumber 562", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "562");
    console.log = jest.fn();
    getSumNumber();
    expect(console.log).toHaveBeenCalledWith(13);
  });
  it("getSumNumber 802", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "802");
    console.log = jest.fn();
    getSumNumber();
    expect(console.log).toHaveBeenCalledWith(10);
  });
});
