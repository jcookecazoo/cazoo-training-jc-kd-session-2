describe("String calculator", () => {
  it("should return 0 for an empty string", () => {
    let stringCalculator: StringCalculator = new StringCalculator();
    expect(stringCalculator.add("")).toBe(0);
  });
});
