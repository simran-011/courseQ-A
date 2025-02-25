let num = 13;
if(num%10==0) {
    console.log("good");
} else {
    console.log("bad");
}

// let name = prompt("enter your name");
// let age = prompt("enter your age");
// let result = `${name} is ${age} years old`;
// alert(result);


// // let quarter = parseInt(prompt("enter the quarter number"));
// let quarter = 1;
// switch(quarter) {
//     case 1:
//         console.log("january february march");
//         break;
//     case 2:
//         console.log("april may june");
//         break;
//     case 3:
//         console.log("july august september");
//         break;
//     case 4:
//         console.log("october, november, december");  
//         break;
//     default: console.log("quarter out of range");

// }

let str = "asrim";
if((str[0]=="a"|| str[0]=="A") && str.length==5) {
    console.log("golden string");

} else {
    console.log("not a golden string");
}


let a = 122;
let b = 20;
let c = 2;
if(a>b && a>c) {
    console.log("a is greatest");
} else if(b>c) {
    console.log("b is the greatest");
} else {
    console.log("c is the greatest");
}


let n1 = 1234;
let n2 = 32;
let rem1 = n1%10;
let rem2 = n2%10;
if(rem1==rem2) {
    console.log("they have same last digit");
} else {
    console.log("they do not have same last digit");
}
