"4.5";
"4";
console.log(Number("4.5"));
console.log(Number("5"));
console.log(Number("abc"));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number(""));

console.log(5 == "5"); // true (ép kiểu: '5' thành số 5)
console.log(true == 1); // true (ép kiểu: true thành số 1)
console.log(null == undefined); // true (đặc biệt)
console.log([] == ""); // true (ép kiểu: [] thành '')

const isRich = false;
const myMoney = 10000;
if (isRich) {
  console.log("I will buy a car");
} else if (myMoney > 1000) {
  console.log("I will buy a motorbike");
} else {
  console.log("I will buy a bike");
}
// let hasName = false;
// let yourName = "";
// while (!hasName) {
//   yourName = prompt("What is your name?", "");
//   hasName = confirm(`Are you sure your name is ${yourName}?`);
// }
// alert(`Hello ${yourName}`);

// const yourAge = prompt("How old are you?", "");
// if (yourAge >= 18) {
//   alert("You are old enough to access this site");
// } else {
//   alert("You are not old enough to access this site");
// }

// const a = prompt("Enter a:", "");
// const b = prompt("Enter b:", "");
// if (a && b && !isNaN(a) && !isNaN(b)) {
//   if (a > b) {
//     console.log(`${a} is greater than ${b}`);
//   } else if (a < b) {
//     console.log(`${a} is less than ${b}`);
//   } else {
//     console.log(`${a} is equal to ${b}`);
//   }
// } else {
//   console.log("Please enter a valid number");
// }

const fruit = "bnn";
switch (fruit) {
  case "apple":
    console.log(`You like apple`);
    break;
  case "bnn":
  case "banana":
    console.log(`You like banana`);
    break;
  case "orange":
    console.log(`You like orange`);
    break;
  default:
    console.log(`You don't like fruit`);
    break;
}

console.log("You love " + (fruit === "bnn" ? "banana" : fruit));

const age = 4;
console.log(
  "You are " + (age >= 18 ? "teenager" : age >= 5 ? "child" : "baby")
);
