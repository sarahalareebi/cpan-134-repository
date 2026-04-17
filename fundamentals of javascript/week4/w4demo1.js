let students = ['Bob', 'Tim', 'Amy', 'Sam']; //Literal Notation

let cities = new Array(5); //Array Constructor
let cities2 = new Array(5,10);
let canadianCities = new Array('Toronto', 'Hamilton', 'Ajax');

let countries = Array.of('Canada', 'India', 'China', 'GreenLand');

let chars = Array.from('Humber');

console.log(cities);
console.log(cities2);
console.log(canadianCities);
console.log(countries);
console.log(chars);
console.log(students);

// let students = ['Bob', 'Tim', 'Amy', 'Sam']; //Literal Notation
console.log(students[0]);
console.log(students[1]);
students[0] = 'Paul';
students[4] = 'Tim';

students.push('Jon');
console.log(students);

console.log(students.pop())
console.log(students);

students.unshift('Matt');
console.log(students);
students.shift();
console.log(students);

let selectedStudents = students.slice(1,4);
console.log(selectedStudents);
console.log(students);
students.splice(2,2);
console.log(students);
students.splice(2,0, 'John', "Eva", "Ava");
console.log(students);