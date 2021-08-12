import { addAgeProp, getCopyObj } from "./script";

describe("addAgeProp", () => {
  it("add value and copy object", () => {
    const obj = {
      name: "John",
    };
    const admin = {};
    jest.spyOn(window, "prompt").mockImplementation(() => "25");
    addAgeProp(obj);
    expect(obj.age).toBe(25);
    console.log = jest.fn();
    getCopyObj(obj, admin);
    expect(console.log).toHaveBeenCalledWith("John", 25, "admin");
  });
});
