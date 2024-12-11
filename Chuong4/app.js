// Viet ham tinh tong 2 so a va b
function sum(a, b) {
  return a + b;
}
console.log("Tong 2 so 3 va 4 la: " + sum(3, 4));
const add = sum;
console.log("Tong 2 so 3 va 4 la: " + add(3, 4));

function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}

console.log("Trung binh cong cua 3 va 4 la: " + average(3, 4, sum));

(function () {
  console.log("IIFE");
})();

let myName = "Minh";
function logName() {
  //   let myName = "Minh2"; // Let không cho phép khai báo lại biến myName
  let myName2 = "Minh2";
  console.log(myName);
}
// console.log(myName2);
logName();

if (1 > 0) {
  var total = 1 + 2;
}
console.log(total);

let aNewName = "Minh";
function sayHello() {
  let messageHi = "Hi";
  console.log(`${messageHi} ${aNewName}`);
}
sayHello();

function makeCounter() {
  let count = 0;
  function increment() {
    return ++count;
  }
  return increment;
}
const counter = makeCounter(); // count sẽ được tham chiếu đến count của counter
console.log(counter());
console.log(counter());
console.log(counter());

// 1. Viết hàm so sánh 2 số a, b và tìm ra số lớn hơn
function compare(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Vui lòng nhập số";
  }
  if (a > b) {
    return a;
  }
  return b;
}
console.log("So lon hon la: " + compare(3, 4));

// 2. In hoa chữ cái đầu trong chữ VD: tuan -> Tuan, NAM -> Nam
function capitalize(str) {
  if (typeof str !== "string") {
    return "Vui lòng nhập chuỗi";
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log("Capitalize of tuan: " + capitalize("tuan"));
console.log("Capitalize of NAM: " + capitalize("NAM"));

// 3. Viết một hàm sử dụng callback(function là param của function khác) in ra kết quả của hàm compare đã viết ở trên
function compareWithCheck(a, b, fn) {
  if (!fn(a, b)) {
    return "Vui lòng nhập số";
  }
  if (a > b) {
    return a;
  }
  return b;
}
const largerNum = compareWithCheck(1, 3, function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  }
  return true;
});
console.log(largerNum);

const arrowFunc = () => console.log("abc");
arrowFunc();
