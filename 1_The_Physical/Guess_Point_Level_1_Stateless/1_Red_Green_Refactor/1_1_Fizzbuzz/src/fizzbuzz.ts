export function fizzBuzz(numbers: number[]): string {
  const isInputInvalid = numbers.some((number) => number <= 0 || number > 100);

  if (isInputInvalid) {
    throw Error("number should be on the range of 1...100");
  }

  return numbers
    .map((number) => {
      const isMultipleOf3 = number % 3 === 0;
      const isMultipleOf5 = number % 5 === 0;
      if (isMultipleOf3 && isMultipleOf5) {
        return "FizzBuzz";
      }
      if (isMultipleOf5) {
        return "Buzz";
      }
      if (isMultipleOf3) {
        return "Fizz";
      }
      return number.toString();
    })
    .join();
}
