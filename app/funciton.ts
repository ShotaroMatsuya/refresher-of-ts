function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}
function printResult2(num: number): undefined {
  console.log('Result: ' + num);
  return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  const res = cb(result); // it really clear that instead of addAndHandle , we're not interested in any return value.
  // It actually happens on purpose by specifying void here on our callback type , we're essentially saying will ignore any result you might be returning here.
}

printResult(add(5, 12));

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));

// let someValue: undefined;

addAndHandle(10, 20, result => {
  console.log(result);
  return result; //shouldn't return something , this, however is not a mistake or a bug in typescript.
});
