// // try catch block...
// console.log("hello");
// console.log("hello");
// try {
//     console.log(a);
// } catch(error) {
//     console.log("error found");
//     console.log(error);
// }

// console.log("hello1");
// console.log("hello1");


// arrow functions
// to calculate the average of the elements of the array using array function
// let arr1 = [23, 12, 34, 67, 100];

// const avgArr = (arr) => {
//     let sum = 0;
//     let avg;
//     for(let i=0; i<arr.length; i++) {
//         sum += arr[i];
//         avg = sum / arr.length;

//     }
//     return avg;
// }

// let result = avgArr(arr1);
// console.log(result);


// // to check whether the number is even or not using an array function....

// const isEven = (n) => {
//     if(n%2==0) {
//         console.log("even");
//     } else {
//         console.log("odd");
//     }
// }

// isEven(2);
// isEven(45);
// isEven(90);


// implicit return with arrow function....

// const func = (a,b) => (a+b);
// const hello = () => ("hello");
// console.log(func(2,3));
// console.log(hello());


// setTimeOut(function, time)

// console.log("hello");
// console.log("hello");
// setTimeout(() => {
//     console.log("hello simran....");
// }, 3000);

// console.log("hello1");
//console.log("hello2");


//setInterval(function, time)

// let id = setInterval( () => {
//     console.log("hello world");
// },2000);

// setTimeout(() => {
//     clearInterval(id)
// },10000);


// arrow function to print the sq of a number n....


// const sq = (n) => (n*n);
// console.log(sq(4));


// output of a function....

const object = {
    message: 'hello, world!',
    logmessage() {
        console.log(this.message);
    }
};
//console.log(object.logmessage());
setTimeout(object.logmessage, 1000);