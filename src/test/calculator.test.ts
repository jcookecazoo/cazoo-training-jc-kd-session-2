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
  ])('given %i should return %i', (stringInput, expected) => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add(stringInput)).toBe(expected);
  });

  it("should return 2 for '1,1'", () => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add("1,1")).toBe(2);
  });

  it("should return 16 for '5,11'", () => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add("5,11")).toBe(16);
  });


});
