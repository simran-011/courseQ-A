function poem() {
    console.log("early to bed");
    console.log("early to rise");
    console.log("makes a man healthy wealthy and wise");

}
//poem();


function dice() {
    let r = Math.floor(Math.random()*6)+1;
    console.log(`the value on your dice is ${r}`);
}


function avg(a,b,c)  {
    let average = Math.floor((a+b+c)/3);
    console.log(average);
}


function table() {
    let num = prompt("enter the value of n...");
    for(let i = 1; i<=10; i++) {
        console.log(`${num} x ${i} = ${i*num}`);
    }
}


function add(n) {
    let sum = 0;
    for(let i=0; i<=n; i++) {
        sum += i;
    }
    return sum;
}

add(12);

//to print a larger numbers in a array than a number entered by a user...

// let num = prompt("enter the number");
// let arr = [13,45,89,100];
// let output = "";
// for(let i = 0; i<arr.length; i++) {
//     if(arr[i] > num) {
//         output += arr[i]+ " ";
        
        
//     }
// }
// console.log(output);

// to remove duplicates from a string...

// let str = "abcabcADff";
// let newStr = "";
// for(let i = 0; i<str.length; i++) {
//     if(!newStr.includes(str[i])) {
//         newStr += str[i] + " ";
//     }
// // }
// console.log(newStr);


// to return thr longest country name

// let country = ["india","australia","america"];
// let resultIndx = 0;
// for(let i=0; i< country.length; i++) {
//     let resultLen = country[resultIndx].length;
//     let currentLen = country[i].length;
//     if(currentLen > resultLen) {
//         resultIndx = i;
//     }
    
// }
// console.log(country[resultIndx]);

// to count the no of vowels...

let vowel = "aeiouAEIOU";
let str1 =  "aaabbb";
let cnt = 0;
for(let i = 0; i<str1.length; i++) {
    if(vowel.includes(str1[i])) {
        cnt++;
    }
}
console.log(cnt);