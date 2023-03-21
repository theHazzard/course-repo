export function fizzBuzz(number: number) {
  if (number <= 0 || number > 100) {
    throw Error("number should be on the range of 1...100");
  }

  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  }
  if (number % 5 === 0) {
    return "Buzz";
  }
  if (number % 3 === 0) {
    return "Fizz";
  }
  return number.toString();
}
