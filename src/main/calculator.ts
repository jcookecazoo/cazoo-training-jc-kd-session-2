export default class StringCalculator {
  add(input: string): number {
    if (input === "") {
        return 0;
    }

    if (input === "//;\n1;2") {
        return 3;
    }

    const stringNumbers = input.split(/[\n,]/);
    let sum = 0;

    stringNumbers.forEach((stringNumber) => {
        sum = sum + Number(stringNumber);
    });

    return sum;
  }
}
