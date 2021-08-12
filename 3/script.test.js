import { getSumInteger, getMultiplicationTable, getAverage } from "./script";

describe("getSumInteger", () => {
  it("getSumInteger 50 100", () => {
    console.log = jest.fn();
    getSumInteger(50, 100);
    expect(console.log).toHaveBeenCalledWith(3825);
  });
});

describe("getMultiplicationTable", () => {
  it("getMultiplicationTable 7", () => {
    console.log = jest.fn();
    getMultiplicationTable(7);
    expect(console.log).toHaveBeenCalledWith("7 * 1 = 7");
    expect(console.log).toHaveBeenCalledWith("7 * 2 = 14");
    expect(console.log).toHaveBeenCalledWith("7 * 3 = 21");
    expect(console.log).toHaveBeenCalledWith("7 * 4 = 28");
    expect(console.log).toHaveBeenCalledWith("7 * 5 = 35");
    expect(console.log).toHaveBeenCalledWith("7 * 7 = 49");
    expect(console.log).toHaveBeenCalledWith("7 * 8 = 56");
    expect(console.log).toHaveBeenCalledWith("7 * 9 = 63");
  });
});

describe("getAverage", () => {
  it("getAverage 15", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "15");
    console.log = jest.fn();
    getAverage();
    expect(console.log).toHaveBeenCalledWith(8);
  });
  it("getAverage 100", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "100");
    console.log = jest.fn();
    getAverage();
    expect(console.log).toHaveBeenCalledWith(50);
  });
  it("getAverage 37", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "37");
    console.log = jest.fn();
    getAverage();
    expect(console.log).toHaveBeenCalledWith(19);
  });
});
