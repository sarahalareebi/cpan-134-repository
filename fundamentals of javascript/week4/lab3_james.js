// Task 1.
let students = ['Bob', 'Sam', 'Amy'];
// 2.
let grades = new Array(46, 67, 90);
// 3. 
let isPresent = Array.of(true, false, true);

// Task 2:
console.log(students[0]);

// 2.
grades[1] = 95;

// 3. 
console.log ('Updated Grades: ', grades );

// Task 3:
students.push('John');

// 2.
isPresent.pop();

// 3.
console.log('Students Array: ', students);
console.log('grades array: ', grades);




// Task 4: Iterating through Arrays
console.log('\nTask 4.1')
for (let index = 0; index < students.length; index++) {
    console.log(students[index]);
}


// 2. 
console.log('\nTask 4.2')
grades.forEach(element => console.log(element));

//3. 

console.log('\nTask 4.3')
for (const element of isPresent) {
    console.log(element)
}

// 4.

console.log('\nTask 4.4')
for (const [index, element] of students.entries()) {
    console.log(`Index: ${index}, Element: ${element}`);
}

// Task 5.

let passedGrades = grades.filter(e => e >= 50);

// 2.
let doubledGrades = grades.map(e => e * 2);

// 3. 
console.log('passedGrades array: ', passedGrades);
console.log('doubledGrades array: ', doubledGrades);