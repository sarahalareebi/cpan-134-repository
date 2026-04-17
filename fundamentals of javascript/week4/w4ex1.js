// Write a program that creates an array of numbers and finds both the maximum and minimum values in the array.

let numArray = [23, 5, 34, 66, 75, 56, 33, 65]; //1
let max = numArray [0]; // 2. Max = 23
let min = numArray [0]; // 3. Min = 23
for (const element of numArray) { // loops 8 times
    if(element > max) // 23 > 23;  5 > 23; 34 > 23
    max = element;      // max = 34
    if(element < min) // 23 < 23; 5 < 23; 34 < 5
    min = element;      // Min = 5
}
console.log("Max:", max);
console.log("Min:", min);


// Write a program that takes an array of strings and 
// reverses the order of the elements.
let cities = new Array ('Tokyo', 'Toronto', 'New York');
let reversedCities = [];
for (const element of cities) {
    reversedCities.unshift(element);
}
console.log('cities:',cities);
console.log('reversedCities:', reversedCities);

cities.reverse();
console.log(cities);

// Write a program that calculates the sum of all elements in an array of numbers.
let numArray2 = [3, 5, 2, 5, 5, 8, 3, 3, 9];
let sum = 0;
for (const  element of numArray2)  {
    sum += element
}
console.log('sum:',sum);

// Write a program that 
// multiplies each element in an array by 2 using the map() method.
let numArray3 = [3, 5, 2, 5, 5, 8, 3, 3, 9];
let numArray4 = numArray3.map(element => element * 2);
console.log(numArray4);



// Write a program that filters out even numbers from an array using the filter() method.

let nums = [3, 5, 2, 667, 34, 77, 3, 88, 22];
let evenNums = nums.filter(e => e )
console.log(evenNums);

// Write a program that 
// counts how many times a specific value occurs in an array.
let nums2 = [3, 5, 2, 667, 34, 77, 3, 88, 22];
let count = 0;
for (const element of nums2) {
    if(element === 3)
        count++;
}
console.log("count:", count);


// Example
let nums3 = [3, 5, 2, 667, 34, 77, 3, 88, 22];
nums3.forEach(element => console.log(element));

for (const [index, element] of nums3.entries()) {
    console.log(index, ":", element);
}