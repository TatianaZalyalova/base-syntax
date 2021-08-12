import { getSumArr, changeArr, getMinMaxValue } from "./script";

describe("changeArr", () => {
  it("getSumArr and changeArr", () => {
    const arr = [2, 6, 25, 35, 0, 6, 4, 100, 7, 3];
    expect(getSumArr(arr)).toBe(188);
    expect(changeArr(arr)).toEqual([4, 12, 50, 70, 0, 12, 8, 200, 14, 6]);
    console.log = jest.fn();
    getMinMaxValue(arr);
    expect(console.log).toHaveBeenCalledWith(0, 100);
  });
});
