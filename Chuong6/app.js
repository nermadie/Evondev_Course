const students = ["Nguyen Van A", "Nguyen Van B", "Nguyen Van C"];
const students2 = ["Nguyen Van D", "Nguyen Van E", "Nguyen Van F"];
console.log(students);
console.log(students[4]); // undefined
console.log(students[-1]); // undefined
console.log(students[students.length - 1]);
console.log(students.length);

console.log(students.reverse());
console.log(students.join(" - "));
console.log(students.indexOf("Nguyen Van A"));
console.log(students.lastIndexOf("Nguyen Van A"));

students.push("Nguyen Van G");
students.unshift("Nguyen Van Z");
console.log(students);
students.pop();
students.shift();
console.log(students);

const animals = ["dog", "cat", "pig", "bird"];
// slice
const sliceAnimals = animals.slice(1, 3);
console.log(animals.slice());
console.log(animals.slice(1));
console.log(animals.slice(1, 3));
sliceAnimals[0] = "elephant";
console.log(sliceAnimals);
console.log(animals);

// splice
const spliceAnimals = animals.splice(1, 2, "elephant", "tiger");
console.log(spliceAnimals);
console.log(animals);

// sort
const random = [1, 9999, 100000, 5, 09];
console.log(random.sort());

const random2 = random.sort((a, b) => a - b);
console.log(random2);
const random2Reversed = random.sort((a, b) => b - a);
console.log(random2Reversed);

// find
console.log(random.find((item) => item > 100));
// findIndex
console.log(random.findIndex((item) => item < 0));

//map
const listNumber = [1, 2, 3, 4, 5];
const listNumberPow2 = listNumber.map((value, index, array) => value ** 2);
console.log(listNumber);
console.log(listNumberPow2);

//forEach
const listNumberTripple = listNumber.forEach((value, index, array) => {
  console.log(value * 3);
});

//filter
const listNumberEven = listNumber.filter(
  (value, index, array) => value % 2 == 0
);
console.log(listNumberEven);

const haveAtLeast1MoreThanZero = listNumber.some(
  (value, index, array) => value > 0
);
console.log(haveAtLeast1MoreThanZero);
const allMoreThanZero = listNumber.every((value, index, array) => value > 0);
console.log(allMoreThanZero);

//reduce
const sum = listNumber.reduce(
  (accumulator, value, index, array) => accumulator + value,
  0
);
console.log(sum);

// 1. Dao nguoc 1 chuoi. VD: "My name is Minh" -> "Minh is name My"
const str = "My name is Minh";
const words = str.split(" ");
words.reverse();
console.log(words.join(" "));

// 2. Dao nguoc 1 chuoi. VD: "My name is Minh" -> "yM eman si hniM"
const str2 = "My name is Minh";
console.log(str2.split("").reverse().join(""));

// 3. Capitalize 1 chuoi. VD: "my name is minh" -> "My Name Is Minh"
const str3 = "my name is MINH";
function capitalize(str) {
  const words = str.split(" ");
  const capWords = words.map(
    (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
  );
  return capWords.join(" ");
}
console.log(capitalize(str3));

//JSON
const stringListNum = listNumber.toString();
console.log(stringListNum);
const jsonListNum = JSON.stringify(listNumber);
console.log(jsonListNum);
const parsedListNum = JSON.parse(jsonListNum);
console.log(parsedListNum);

console.log([1, 2] == [1, 2]);

// COPY
const students1 = ["Nguyen Van A", "Nguyen Van B", "Nguyen Van C"];
const studentsSlice = students1.slice();
console.log(studentsSlice);
studentsSlice[0] = "Nguyen Van Z";
console.log(studentsSlice);
console.log(students1);

const studentsCopy = [...students1];
console.log(studentsCopy);
studentsCopy[0] = "Nguyen Van Z";
console.log(studentsCopy);
console.log(students1);
