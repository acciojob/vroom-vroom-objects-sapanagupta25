function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;	
}

function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
}

// Assign to window explicitly
Object.defineProperty(window, 'Car', {
    value: Car,
    writable: true,
    configurable: true
});

Object.defineProperty(window, 'SportsCar', {
    value: SportsCar,
    writable: true,
    configurable: true
});

const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed()); // Output: 200
