const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

const printResult = (num: number) => {
  // returns "void" because there is no return
  console.log('Result: ' + num);
};

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

printResult(add(5, 12));

// this says that combineValues can be a function that takes two numbers as parameters and returns a number
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; does not work because it doesn't match the signature above

console.log(combineValues(8, 8));

addAndHandle(10, 20, result => {
  console.log(result);
});
