export function add(n1: number): number {
  return n1;
}

export function logNum(n1: number): void {
  console.log(n1);
}

export function funcNum(n1: number, func: (num: number) => void) {
  func(n1);
}

export function funcError(message: string, code: number): never {
  let err = new Error();
  err.message = message + code;
  throw err;
}

let typefunc: (a: number) => number;

typefunc = add;

console.log(typefunc);
console.log(funcNum(1, add));
