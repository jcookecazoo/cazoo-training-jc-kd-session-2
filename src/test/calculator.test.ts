import StringCalculator from "../main/calculator";

describe("String calculator", () => {
  it("should return 0 for an empty string", () => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add("")).toBe(0);
  });

  it("should return 1 when the input is '1'", () => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add("1")).toBe(1);
  });

  it("should return '2' when the input is '1,1'", () => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add("1,1")).toBe(2);
  });
  it("should return '5' when the input is '2,3'", () => {
    const stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add("2,3")).toBe(5);
  });
});
