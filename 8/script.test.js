import { getDayOfWeek, kenUserYounger } from "./script";

describe("getDayOfWeek", () => {
  it("getDayOfWeek 25.01.1993", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "25.01.1993");
    console.log = jest.fn();
    getDayOfWeek();
    expect(console.log).toHaveBeenCalledWith("понедельник");
  });
  it("getDayOfWeek 12.08.2021", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "12.08.2021");
    console.log = jest.fn();
    getDayOfWeek();
    expect(console.log).toHaveBeenCalledWith("четверг");
  });
  it("getDayOfWeek 28.09.2021", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "28.09.2021");
    console.log = jest.fn();
    getDayOfWeek();
    expect(console.log).toHaveBeenCalledWith("вторник");
  });
});

describe("kenUserYounger", () => {
  it("circleInSqar 15.06.2001 15.06.2001", () => {
    console.log = jest.fn();
    kenUserYounger("15.06.2001", "15.06.2001");
    expect(console.log).toHaveBeenCalledWith("Пользователи одного возраста.");
  });
  it("circleInSqar 15.06.2001 15.06.2001", () => {
    console.log = jest.fn();
    kenUserYounger("15.06.2001", "16.06.2001");
    expect(console.log).toHaveBeenCalledWith("Пользователь 2 моложе.");
  });
  it("circleInSqar 15.06.2001 15.06.2001", () => {
    console.log = jest.fn();
    kenUserYounger("15.06.2010", "15.09.2001");
    expect(console.log).toHaveBeenCalledWith("Пользователь 1 моложе.");
  });
});
