let students = ['Bob', 'Sam', 'Amy', 'Ben'];
printArrayElements(students);
let cities = ['Toronto', 'Vancouver', 'Tokyo'];
printArrayElements(cities);

function printArrayElements(arr){
console.log();
    for (const element of arr){
    console.log(element);
    }
}

let printArray = function(arr){ // Function Expression
    console.log(arr);
}
printArray(cities);

let printArr = (arr) => console.log(arr); // Arrow Function
printArr(students);