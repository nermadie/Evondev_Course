const now = new Date();
console.log(now);

const epochTime = new Date(0);
console.log(epochTime);

console.log(now.getTime());
console.log(new Date("Thu Jan 01 1970 08:00:00 GMT+0800 (Indochina Time)"));
console.log(new Date(new Date("2021-08-08")));

const birthday = new Date("2002-08-22");

console.log(birthday.getFullYear());
console.log(birthday.getMonth()); //0-11
console.log(birthday.getDate());
console.log(birthday.getDay()); //0-6 0 Sunday 6 Saturday
console.log(birthday.getHours());
console.log(birthday.getMinutes());
console.log(birthday.getSeconds());
console.log(birthday.getMilliseconds());
console.log(birthday.getTime()); //Timestamp

birthday.setFullYear(2003);
birthday.setMonth(1);
birthday.setDate(23);
birthday.setHours(23);
birthday.setMinutes(23);
birthday.setSeconds(23);
birthday.setMilliseconds(999);
console.log(birthday);

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleDateString("vi-VI"));
console.log(now.toISOString());

const myTime = new Date();
const myYear = myTime.getFullYear();
const myMonth = myTime.getMonth() + 1;
const myDate = myTime.getDate();
const monthWithPrefix = myMonth < 10 ? "0" + myMonth : myMonth.toString();
console.log(`${myDate}/${monthWithPrefix}/${myYear}`);

// const timeout1 = setTimeout(function () {
//   console.log("Me after 3sec");
// }, 3000);

// let count = 0;
// const interval1 = setInterval(function () {
//   console.log("Print each sec");
//   count++;
// }, 1000);

// 1. Viet chuong trinh nhap nam sinh roi in ra tuoi
// const yearBirth = prompt("Nhap nam sinh", "");
// console.log(now.getFullYear() - Number.parseInt(yearBirth));

// 2. Nhap thoi gian cho countdown -> in ra timeout
// const timeout = prompt("Nhap timeout", "");
// function timeoutFunc(minutes = 1) {
//   let sec = minutes * 60;
//   const timer = setInterval(function () {
//     console.log(sec);
//     sec -= 1;
//     if (sec === 0) {
//       clearInterval(timer);
//       console.log("Your time is end!");
//     }
//   }, 1000);
// }
// timeoutFunc(1);

// 3. Viet chuong trinh timeSince, nhap vao thoi gian in ra khoang cach thoi gian do so voi Now
const past = prompt("Nhap vao thoi gian trong qua khu", "");
const pastTime = new Date(past);
const delta = now - pastTime;
if (delta / 31536000000 > 1) {
  console.log(`${Math.floor(delta / 31536000000)} years ago`);
} else if (delta / 2592000000 > 1) {
  console.log(`${Math.floor(delta / 2592000000)} months ago`);
} else if (delta / 86400000 > 1) {
  console.log(`${Math.floor(delta / 86400000)} days ago`);
} else if (delta / 3600000 > 1) {
  console.log(`${Math.floor(delta / 3600000)} hours ago`);
} else if (delta / 60000 > 1) {
  console.log(`${Math.floor(delta / 60000)} minutes ago`);
} else if (delta / 1000 > 1) {
  console.log(`${Math.floor(delta / 1000)} seconds ago`);
} else {
  console.log("Just now");
}
