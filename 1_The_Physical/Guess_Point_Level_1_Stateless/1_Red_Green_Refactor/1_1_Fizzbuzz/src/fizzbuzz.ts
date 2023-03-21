export function fizzBuzz(number: number) {
  if (number % 5 === 0) {
    return "Buzz";
  }
  if (number % 3 === 0) {
    return "Fizz";
  }
  return number.toString();
}
