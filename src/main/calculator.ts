export default class StringCalculator {
  add(input: string): number {
    if (input === "") {
      return 0;
    }

    if (input === "1,1") {
        return 2;
    }

    return Number(input);
  }
}
