function contohPush() {
  const numbers = [1, 2, 3, 4, 5];
  numbers.push(6);
  console.log(numbers);
}
// push
contohPush();

function contohPop() {
  const numbers = [1, 2, 3, 4, 5];
  numbers.pop();
  console.log(numbers);
}

// pop
contohPop();

function contohUnshift() {
  const numbers = [1, 2, 3, 4, 5];
  numbers.unshift(0);
  console.log(numbers);
}

// unshift
contohUnshift();

function contohShift() {
  const numbers = [1, 2, 3, 4, 5];
  numbers.shift();
  console.log(numbers);
}

// shift
contohShift();

function contohJoin() {
  const fullnameArray = ["Antonius", "Joshua", "Surya", "Jusuf", "Kalla"];

  const fullname = fullnameArray.join("-");

  console.log(fullname);
}

// join
contohJoin();

function contohSort() {
  const numbers = [5, 4, 3, 2, 1];
  numbers.sort();
  console.log("asc", numbers);

  numbers.sort((a, b) => b - a);
  console.log("desc", numbers);
}

// sort
contohSort();

function contohSplice() {
  const numbers = [1, 2, 3, 4, 5];
  //   numbers.splice(2, 3);
  numbers.splice(2, 0, 15);
  console.log("contohSplice", numbers);
}

contohSplice();

function contohRemove(array, value) {
  const numbers = [1, 2, 3, 4, 5];

  for (let val of value) {
    const findIndex = numbers.findIndex((number) => number === val);
    if (findIndex !== -1) {
      numbers.splice(findIndex, 1);
    }
  }

  return numbers;
}

console.log(contohRemove([1, 2, 3, 4, 5], [3, 5, 1]));

function contohSlice() {
  const numbers = [1, 2, 3, 4, 5];
  const slice = numbers.slice(2, 4);
  console.log(slice);
}

contohSlice();

const numbers = [2, 4, 6, 8, 15];

const isInclude = numbers.includes(2); // true
const isSome = numbers.some((number) => number === 2); // true
const isEvery = numbers.every((number) => typeof number === "number"); // false
const isEven = numbers.every((number) => number % 2 === 0); // false

console.log(isInclude);
console.log(isSome);
console.log(isEvery);
console.log(isEven);

const multidimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(multidimensionalArray[0][0]);
