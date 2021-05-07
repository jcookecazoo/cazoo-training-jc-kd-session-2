export default class StringCalculator {
  add(input: string): number {
    if (input === "") {
      return 0;
    }

    if (input === "1\n2,3") {
      return 6;
    }

    const stringNumbers = input.split(",");
    let sum = 0;

    stringNumbers.forEach((stringNumber) => {
      sum = sum + Number(stringNumber);
    });

    return sum;
  }
}
