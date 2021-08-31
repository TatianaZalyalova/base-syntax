import { diff, isWord, pow } from "./script";

describe("diff", () => {
  it("diff 2 3", () => {
    expect(diff(2, 3)).toBe(1);
  });
  it("diff 100 0", () => {
    expect(diff(100, 0)).toBe(100);
  });
  it("diff 24 7", () => {
    expect(diff(24, 7)).toBe(17);
  });
});
describe("isWord", () => {
  it("isWord Anytime", () => {
    expect(isWord("Anytime")).toBe(true);
  });
  it("isWord Pretty good", () => {
    expect(isWord("Pretty good")).toBe(false);
  });
  it("isWord Break the ice", () => {
    expect(isWord("Break the ice")).toBe(false);
  });
});
describe("pow", () => {
  it("pow 3 3", () => {
    expect(pow(3, 7)).toBe(2187);
  });
  it("pow 23 5", () => {
    expect(pow(23, 5)).toBe(6436343);
  });
  it("pow 24 7", () => {
    expect(pow(4, 8)).toBe(65536);
  });
});
