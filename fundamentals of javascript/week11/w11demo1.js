const car1 = {
    make: 'Honda',
    model: 'Civic',
    year: '2022',
    getInfo: function() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`)
    },
features: ['LeatherInterior', 'AlloyWheels'],
engine: {cylinders: 6, turbo: true}
};

car1.getInfo();
console.log(car1.make);
console.log(car1['model']);
console.log(car1.features[0]);
console.log(car1.engine.cylinders);
car1.engine.turbo = false;
console.log(car1.engine.turbo);
car1.color = 'Red';
console.log(car1);
function Car(make, model, year, color) {













let car2 = new Car('Toyota', 'Rav4', '2020', 'Black');
let car3 = new Car('Toyota', 'Corolla', '2026', 'Blue');
car2.getInfo();
car3.getInfo();

console.log(Object.keys(car1));
console.log(Object.values(car1));
console.log(Object.entries(car1));