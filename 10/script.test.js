import { isDate, isEmail, isTel } from "./script";

describe("isDate", () => {
  it("isDate '65.12.1965'", () => {
    console.log = jest.fn();
    isDate("65.12.1965");
    expect(console.log).toHaveBeenCalledWith(false);
  });
  it("isDate '05.13.1'", () => {
    console.log = jest.fn();
    isDate("05.13.1");
    expect(console.log).toHaveBeenCalledWith(false);
  });
  it("isDate '18.09.1386'", () => {
    console.log = jest.fn();
    isDate("18.09.1386");
    expect(console.log).toHaveBeenCalledWith(false);
  });
  it("isDate'29.02.2021'", () => {
    console.log = jest.fn();
    isDate("29.02.2021");
    expect(console.log).toHaveBeenCalledWith(false);
  });
  it("isDate '28.02.2021'", () => {
    console.log = jest.fn();
    isDate("28.02.2021");
    expect(console.log).toHaveBeenCalledWith(true);
  });
  it("isDate'15.09.1976'", () => {
    console.log = jest.fn();
    isDate("15.09.1976");
    expect(console.log).toHaveBeenCalledWith(true);
  });
});

describe("isEmail", () => {
  it("isEmail 'zalyalova@ivit.pro'", () => {
    console.log = jest.fn();
    isEmail("zalyalova@ivit.pro");
    expect(console.log).toHaveBeenCalledWith(true);
  });
  it("isEmail '...dfdf.dfdf.te'", () => {
    console.log = jest.fn();
    isEmail("...dfdf.dfdf.te");
    expect(console.log).toHaveBeenCalledWith(false);
  });
  it("isEmail 'dsdsd@yandex.ru'", () => {
    console.log = jest.fn();
    isEmail("dsdsd@yandex.ru");
    expect(console.log).toHaveBeenCalledWith(true);
  });
  it("isEmail 'ooo.mail.ru'", () => {
    console.log = jest.fn();
    isEmail("ooo.mail.ru");
    expect(console.log).toHaveBeenCalledWith(false);
  });
});

describe("isTel", () => {
  it("isTel '+7 485 89 25'", () => {
    console.log = jest.fn();
    isTel("+7 485 89 25");
    expect(console.log).toHaveBeenCalledWith(true);
  });
  it("isTel '+8-584-55-58'", () => {
    console.log = jest.fn();
    isTel("+8-584-55-58");
    expect(console.log).toHaveBeenCalledWith(false);
  });
  it("isTel '+7 (488) 45 48'", () => {
    console.log = jest.fn();
    isTel("+7 (488) 45 48");
    expect(console.log).toHaveBeenCalledWith(false);
  });
  it("isTel '+84884548'", () => {
    console.log = jest.fn();
    isTel("+84884548");
    expect(console.log).toHaveBeenCalledWith(false);
  });
  it("isTel '+7 (488) 478 45 48'", () => {
    console.log = jest.fn();
    isTel("+7 (488) 478 45 48");
    expect(console.log).toHaveBeenCalledWith(true);
  });
  it("isTel '8 (488) 478-45-48'", () => {
    console.log = jest.fn();
    isTel("8 (488) 478-45-48");
    expect(console.log).toHaveBeenCalledWith(true);
  });
});
