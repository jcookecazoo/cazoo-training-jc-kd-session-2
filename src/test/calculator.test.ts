import StringCalculator from "../main/calculator";

describe("String calculator", () => {
  it("should return 0 for an empty string", () => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add("")).toBe(0);
  });

  it("should return 1 when the input is 1", () => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add("1")).toBe(1);
  });
});
