// function sum(...nums){
//     let sum = 0;
//     for (const element of nums){
//         sum += element;
//     }
//     return sum;
// }

function sum (...nums){
return nums.reduce((sum, element)=> sum += element, 0);
}

console.log('sum1:', sum(3,4));
console.log('sum2:', (3));
console.log('sum3:', sum(3,4,5));
console.log('sum4:', sum(7,3,4,5,9,3));