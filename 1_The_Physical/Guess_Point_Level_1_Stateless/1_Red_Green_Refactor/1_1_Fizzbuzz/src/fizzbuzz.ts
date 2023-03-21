export function fizzBuzz(number: number) {
  if (number <= 0 || number > 100) {
    throw Error("number should be on the range of 1...100");
  }

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
}
