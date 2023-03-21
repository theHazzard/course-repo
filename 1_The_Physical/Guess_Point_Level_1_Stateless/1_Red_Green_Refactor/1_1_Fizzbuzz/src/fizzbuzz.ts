export function fizzBuzz(number: number) {
  if (number <= 0) {
    throw Error("number should be higher than 0");
  }
  if (number > 100) {
    throw Error("number should be lower or equal to 100");
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
