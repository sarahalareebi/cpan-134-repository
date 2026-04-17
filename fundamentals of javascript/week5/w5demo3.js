// Write a function calculateArea that takes length and width as parameters and returns the area of a rectangle. Then, call the function with different values and log the results to the console.

function calculateArea(length, width) {
    return length * width;
}

let area = calculateArea(20, 10);
console.log('Area: ', area);

console.log('Area 2: ', calculateArea(30));
console.log('Area 3: ', calculateArea());
console.log('Area 4: ', calculateArea(2, 3, 4));
