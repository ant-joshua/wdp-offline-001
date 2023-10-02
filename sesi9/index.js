const harga = [10, 20, 30];

function withoutMap() {
  let hargaBaru = [];

  harga.forEach((h) => {
    hargaBaru.push(h * 2);
  });

  return hargaBaru;
}
console.log(withoutMap());

function withMap() {
  return harga.map((h) => h * 2);
}

const students = [
  {
    name: "Andi",
    score: 90,
  },
  {
    name: "Budi",
    score: 80,
  },
  {
    name: "Caca",
    score: 70,
  },
];

function studentScoreMap() {
  return students.map((student) => {
    const adjustScore = student.score + 2;

    return {
      name: student.name,
      score: adjustScore,
      grade: adjustScore >= 80 ? "A" : "B",
    };
  });
}

function filterGrade(students, grade) {
  return students.filter((student) => student.grade === grade);
}

function filterGradeWithoutFilter(students, grade) {
  const newStudents = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].grade === grade) {
      newStudents.push(students[i]);
    }
  }

  return newStudents;
}

const newStudents = studentScoreMap();

const studentGradeB = filterGrade(newStudents, "B");
const studentGradeA = filterGrade(newStudents, "A");

const totalNilai = newStudents.reduce((acc, curr) => {
  return acc + curr.score;
}, 0);

console.log(newStudents);

function removeSpace(text) {
  return text.replaceAll(" ", "").trim();
}

console.log(removeSpace("   Antonius Joshua Surya Jusuf Kalla   "));

function updateToNextVowels(text, forward = true) {
  const vowelsMap = new Map([
    ["a", 0],
    ["i", 1],
    ["u", 2],
    ["e", 3],
    ["o", 4],
  ]);

  const vowels = ["a", "i", "u", "e", "o"];

  const newText = Array.from(text, (letter) => {
    if (vowelsMap.has(letter)) {
      let changeVowel;
      if (forward) {
        changeVowel = (vowelsMap.get(letter) + 1) % vowels.length;
      } else {
        changeVowel =
          (vowelsMap.get(letter) - 1 + vowels.length) % vowels.length;
      }
      return vowels[changeVowel];
    } else {
      return letter;
    }
  });

  return newText.join("");
}

const testingVowel = "aiueo";
const updatedVowels = updateToNextVowels(testingVowel, true);
console.log(updatedVowels);
const reverseVowels = updateToNextVowels(updatedVowels, false);
console.log(reverseVowels);
