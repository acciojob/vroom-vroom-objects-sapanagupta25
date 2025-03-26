class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getMakeModel() {
        return `${this.make} ${this.model}`;
    }
}

class SportsCar extends Car {
    constructor(make, model, topSpeed) {
        super(make, model);
        this.topSpeed = topSpeed;
    }

    getTopSpeed() {
        return this.topSpeed;
    }
}

module.exports = { Car, SportsCar };


const { Car, SportsCar } = require('../path/to/script');

describe('Car and SportsCar classes', () => {
    it('should create a new SportsCar instance', () => {
        const car = new SportsCar("Ferrari", "Testarossa", 200);
        expect(car).to.be.an.instanceof(Car);
        // your other tests here
    });
});