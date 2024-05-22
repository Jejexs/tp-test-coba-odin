export function smallNumberSubstraction(a: number, b: number) {
  if (a < b) {
    throw new Error("sorry you can't substract to get a negative result");
  }

  const result = a - b;

  if (result < 0 || result > 9) {
    throw new Error("you are cheating tring to substract big numbers here");
  }

  return result;
}

export function substraction(a: number, b: number) {
  return smallNumberSubstraction(a, b);
}