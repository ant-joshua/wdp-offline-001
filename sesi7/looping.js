function loopingWhile() {
  let index = 0;
  while (index < 10) {
    console.log(index);
    index++;
  }
}

function loopingDoWhile() {
  let index = 0;
  do {
    console.log(index);
    index++;
  } while (index < 10);
}

function loopingForEach() {
  const students = ["Andi", "Budi", "Caca"];
  students.forEach((student, index) => {
    console.log(student, index);
  });
}

// loopingDoWhile();
// loopingForEach();

let value = "*";
for (let i = 0; i < 10; i++) {
  console.log(value.repeat(i));
  //   console.log("\n");
}
