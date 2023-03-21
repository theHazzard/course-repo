import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("returns a string", () => {
    expect(typeof fizzBuzz([3])).toBe("string");
  });

  it("returns the same number as a string", () => {
    expect(fizzBuzz([1])).toBe("1");
  });

  it("return Fizz for multiples of 3", () => {
    expect(fizzBuzz([3])).toBe("Fizz");
    expect(fizzBuzz([6])).toBe("Fizz");
    expect(fizzBuzz([3, 6, 9])).toBe("Fizz,Fizz,Fizz");
  });

  it("returns Buzz for multiples of 5", () => {
    expect(fizzBuzz([5])).toBe("Buzz");
    expect(fizzBuzz([10])).toBe("Buzz");
    expect(fizzBuzz([5, 10])).toBe("Buzz,Buzz");
  });

  it("returns FizzBuzz on multiples of both 5 and 3", () => {
    expect(fizzBuzz([15, 30])).toBe("FizzBuzz,FizzBuzz");
  });

  it("rejects on numbers that are not in between 1 or 100", () => {
    expect(() => fizzBuzz([-1])).toThrow();
    expect(() => fizzBuzz([101])).toThrow();
  });
});
