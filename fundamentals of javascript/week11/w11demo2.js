let JSON_str = '{"make":"Honda","model":"Civic","year":2025}';
console.log(JSON_str);
let car = JSON.parse(JSON_str);
console.log(car);
let carString = JSON.stringify(car);
console.log(carString);