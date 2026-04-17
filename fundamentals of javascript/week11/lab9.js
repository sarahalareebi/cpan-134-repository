// TASK 1: WORKING WITH OBJECTS
// 1. Create an object student with properties: name, age, grade, and school.
// 2. Add a method greet to the student object that logs a greeting message including
// the student's name.
// 3. Access and log each property of the student object.
// 4. Update the age property and log the updated age.
console.log('### Task 1 ###');

let student = {
    name: 'Alice',
    age: 20,
    grade: 'A',
    school: 'University'
};

student.greet = function() {
    console.log(`Hello, my name is ${this.name}.`);
};

student.greet();

console.log(student.name);
console.log(student.age);
console.log(student.grade);
console.log(student.school);

student.age = 21;
console.log(student.age);



// TASK 2: PARSING AND STRINGIFYING JSON
// 1. Create a JSON string representing a book object with properties: title, author,
// year, and genre.
// 2. Parse the JSON string into a JavaScript object and log the object.
// 3. Convert the book object back into a JSON string and log the JSON string.
console.log('### Task 2 ###');

let bookJSON = '{"title": "To Kill a Mockingbird", "author": "Harper Lee", "year": 1960, "genre": "Fiction"}';

let bookObject = JSON.parse(bookJSON);
console.log(bookObject);

let bookJSONUpdated = JSON.stringify(bookObject);
console.log(bookJSONUpdated);

// TASK 3: USING THE SPREAD OPERATOR
// 1. Create two arrays: array1 with elements [1, 2, 3] and array2 with elements [4, 5,
// 6].
// 2. Combine array1 and array2 into a new array combinedArray using the spread
// operator.
// 3. Create an object person1 with properties: firstName, lastName, and age.
// 4. Create a new object person2 that copies person1 and updates the age property
// using the spread operator.
console.log('### Task 3 ###');

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [...array1, ...array2];
console.log(combinedArray);

let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};
let person2 = {...person1, age: 31};
console.log(person2);


// TASK 4: USING OBJECT METHODS
// 1. Create an object calculator with methodsadd, subtract, multiply, and divide.
// 2. Each method should take two numbers as arguments and return the result of the operation.
// 3. Log the result of calling each method with sample inputs.

console.log('### Task 4 ###');
let calculator = {

    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if (b !== 0) {
            return a / b;
        }
    }
};
console.log(calculator.add(10, 2));
console.log(calculator.subtract(10, 2));
console.log(calculator.multiply(10, 2));
console.log(calculator.divide(10, 2));