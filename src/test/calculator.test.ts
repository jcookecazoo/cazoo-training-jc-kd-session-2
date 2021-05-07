import StringCalculator from "../main/calculator";

describe("String calculator", () => {
  it("should return 0 for an empty string", () => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add("")).toBe(0);
  });

  it.each([
    ["1", 1],
    ["2", 2],
    ["3", 3],
  ])("given %i should return %i", (stringInput, expected) => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add(stringInput)).toBe(expected);
  });

  it.each([
    ["1,1", 2],
    ["5,11", 16],
    ["0,8", 8],
  ])("given %i should return %i", (stringInput, expected) => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add(stringInput)).toBe(expected);
  });

  it("given '1,1,1' should return 3", () => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add("1,1,1")).toBe(3);
  });

  it("given '2,2,2' should return 6", () => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add("2,2,2")).toBe(6);
  });

  it("given '2,3,4' should return 9", () => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add("2,3,4")).toBe(9);
  });
});
