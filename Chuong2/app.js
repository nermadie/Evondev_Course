console.log("Hello world");
const myName = "Minh";
console.log(myName);
console.log(typeof myName);
const job = "FE Dev";
const newStr = `My name is ${myName} and I am ${job}`;
console.log(newStr);
console.log(newStr.length);
console.log(newStr.split(" "));
console.log(newStr.slice(0, 8));
console.log(newStr.slice(0, -1));
console.log(newStr.slice(1));
const myStr2 = "  Frontend Dev";
// Loai bo khoang trang 2 ben, dua ve in hoa, thay chu Dev thanh Developer sau do repeat 2 lan
console.log(myStr2.trim().toUpperCase().replace("DEV", "DEVELOPER").repeat(2));

// NUMBER
const number1 = -2;
console.log(Math.abs());
console.log(Math.floor(1.2));
console.log(Math.ceil(1.2));
console.log(Math.round(1.2));
console.log(parseFloat("1.2"));
console.log(parseInt("1"));
console.log(Math.floor(Math.random() * 10));
console.log(`Max [1,2,3] is ${Math.max(1, 2, 3)}`);
console.log(`Min [1,2,3] is ${Math.min(1, 2, 3)}`);
console.log(Math.pow(2, 3));
console.log(Math.sqrt(4));
const number2 = 1.231;
console.log(Number.isInteger(number2));
console.log(number2.toFixed(2));
console.log(Number("abc"));
