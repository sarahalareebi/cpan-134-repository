// Task 1.

function calculateSum(num1, num2){
    return num1 + num2;
}
console.log('Task 1.1', calculateSum(43, 66));


// 2.
const calculateProduct = function(n1, n2){
    return n1 * n2;
}
console.log('Task 1.2', calculateProduct(3,4));

// 3.
let calculateDifference = (n1, n2) => n1 - n2;
console.log('Task 1.3', calculateDifference(4,5));

// Task 2.
function calculateAverage(...numbers){
    let sum = numbers.reduce((sum, element) => sum += element, 0);
    let average = sum/numbers.length;
    return average;
}
console.log('Task 2.1', calculateAverage(3,4,5,6));

// 2.
let greetUser = (name = 'guest') => `Hello, ${name}, Welcome to JavaScript!`;
console.log(greetUser());
console.log(greetUser('James'));


// 3.

function totalArguments(){
    let sum = 0;
 for (const element of arguments){
     sum += element;
 }
 return sum;
}

console.log('Task 2.3: ',totalArguments(3, 6, 4));
console.log('Task 2.3: ',totalArguments(8, 4));


// Task 3.

function createUser(username, role){
    return {username, role};
}
console.log('Task 3.1: ', createUser('James', 'Student'));

// 2.
// function isPositive(number){
//     if (number >= 0)
//         return true;
//     else
//         return false;
// }

let isPositive = number => number >= 0 ? true : false;
console.log(isPositive(5));
console.log(isPositive(-5));


// 3.
// function logMessage(){
//     console.log('This is a secret message...');
// }

let logMessage =  () => console.log('This is a secret message...');
console.log(logMessage());


// Task 4.
function outerMessage(){
    let message = 'This is the way!';
    return function(){
console.log(message);
    }
}

console.log(outerMessage());

// let showMessage = outerMessage();
// showMessage();
(outerMessage())();


// 2.

function createCounter(){
    let count = 0;
    return {
    increment: function(){count++},
    decrement: function(){count--},
    getValue: function(){return count}
    }
}

let counter1 = createCounter();
let counter2 = createCounter();
counter1.increment();
counter2.decrement();
console.log(counter1.getValue());
console.log(counter2.getValue());