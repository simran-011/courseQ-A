let arr1 = [1,2,3,4,5,6,2,3];
arr1.splice(1,1);
//console.log(arr1);
arr1.splice(5,1);
console.log(arr1);

//let count = 0;
let sum = 0;
let num = 123456;
let copy = num;
let rem;
while(num!=0) {
    let rem = num%10;
    sum += rem;
    num = Math.floor(num/10);
    
}
console.log(sum);


let largestNO = 0;
let arr = [24,35,67,90];
for(let i = 0; i<arr.length; i++) {
    if(arr[i] >largestNO) {
        largestNO = arr[i]

    }
}
console.log(largestNO);