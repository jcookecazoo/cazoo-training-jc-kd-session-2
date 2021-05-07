export default class StringCalculator {
  add(input: string): number {
    if (input === "") {
      return 0;
    }

    const stringNumbers = input.split(",");

    if (stringNumbers.length === 1) return Number(stringNumbers[0]);

    return Number(stringNumbers[0]) + Number(stringNumbers[1]);
  }
}
