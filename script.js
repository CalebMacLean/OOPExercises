// Part 1
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep";
    }
    toString() {
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
};
// Part 2
class Car extends Vehicle {
    constructor(make, model, year, numOfWheels) {
        if(numOfWheels !== 4) {
            throw new Error('Cars have 4 wheels!');
        }
        super(make,model,year);
        this.numOfWheels = numOfWheels;
    }
};
// Part 3
class Motorcycle extends Vehicle {
    constructor(make, model, year, numOfWheels) {
        if(numOfWheels !== 2) {
            throw new Error('Motorcycles have 2 wheels!');
        }
        super(make,model,year);
        this.numOfWheels = numOfWheels;
    }
    revEngine() {
        return 'VROOM!';
    }
}
// Part 4
class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle) {
        if(!(vehicle instanceof Vehicle)) {
            throw new Error('Only vehicles allowed in here!');
        }
        if(this.vehicles.length + 1 > this.capacity) {
            return 'Sorry we are full!';
        }
        this.vehicles.push(vehicle);
        return 'Vehicle added!';
    }
}