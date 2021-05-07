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
  ])("given %s should return %i", (stringInput, expected) => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add(stringInput)).toBe(expected);
  });

  it.each([
    ["1,1", 2],
    ["5,11", 16],
    ["0,8", 8],
  ])("given %s should return %i", (stringInput, expected) => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add(stringInput)).toBe(expected);
  });

  it.each([
    ["1,1,1", 3],
    ["2,2,2", 6],
    ["2,3,4", 9],
  ])("given %s should return %i", (stringInput, expected) => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add(stringInput)).toBe(expected);
  });

  it.each([["1,1,1,1", 4]])(
    "given %s should return %i",
    (stringInput, expected) => {
      const stringCalculator: StringCalculator = new StringCalculator();
      expect(stringCalculator.add(stringInput)).toBe(expected);
    }
  );

  it.each([
    ["1\n2,3", 6],
    ["1\n2\n3,4", 10],
  ])("given %s should return %i", (stringInput, expected) => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add(stringInput)).toBe(expected);
  });
});
