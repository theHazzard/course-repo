export function fizzBuzz(number: number) {
  if (number % 3 === 0) {
    return "Fizz";
  }
  return number.toString();
}
