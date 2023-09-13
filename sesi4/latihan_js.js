const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan matrix: , cth (5 5)", (matrix) => {
  const inputArray = matrix.split(" ");
  const row = inputArray[0];
  const col = inputArray[1];

  const matrixArray = [];

  for (let i = 0; i < row; i++) {
    rl.question(`Masukan baris ke ${i + 1}: `, (baris) => {
      const barisArray = baris.split(" ");
      matrixArray.push(barisArray);

      if (matrixArray.length === row) {
        rl.close();
        console.log(matrixArray);
      }
    });
  }
});

/*
 *  1 4 7 11 15
    2 5 8 12 19
    3 6 9 16 22
    10 13 14 17 24
    18 21 23 26 30
 *
 */
// const inputArray = [
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [3, 6, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30],
// ];

// const target = 9;

// for (let i = 0; i < inputArray.length; i++) {
//   for (let j = 0; j < inputArray[i].length; j++) {
//     if (inputArray[i][j] === target) {
//       console.log(
//         `Target ${target} ditemukan pada baris dengan index ke ${i} dan kolom dengan index ke ${j}`
//       );
//     }
//   }
// }
