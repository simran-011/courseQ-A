let msg = "help!   ";
console.log(msg.trim().toUpperCase());
//method chaining


let str1 = "simran";
console.log(str1.replace("s","m"));
console.log(str1.slice(0,3));
console.log(str1.repeat(2));
console.log(str1.indexOf("r"));
console.log(str1.slice(0,3).replace("s","m"));


let arr1 = ["january","july","march","august"];
arr1.shift();
arr1.shift();
arr1.unshift("june");
arr1.unshift("july");
console.log(arr1);