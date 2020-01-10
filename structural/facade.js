class Conveyor {
    setBody() { console.log('Body set!') }

    getEngine() { console.log('Dismantle engine!') }

    setEngine() { console.log('Engine set!') }

    setInterior() { console.log('Interior added!') }

    getInterior() { console.log('Update interiror!') }

    setExterior() { console.log('Exterior added!') }

    setWheels() { console.log('Wheels!') }
    
    addElectronics() { console.log('Electronic added!') }

    paint() { console.log('Car painted!') }
}

class ConveyorFacade {
    constructor(car) {
        this.car = car;
    }

    assembleCar() {
        this.car.setBody();
        this.car.getEngine();
        this.car.setEngine();
        this.car.setInterior();
        this.car.getInterior();
        this.car.setExterior();
        this.car.setWheels();
        this.car.addElectronics();
        this.car.paint();
    }

    changeEngine() {
        this.car.getEngine();
        this.car.setEngine();
    }

    changeInterior() {
        this.car.getInterior();
        this.car.setInterior();
    }
}

const conveyor = new ConveyorFacade(new Conveyor);
let car = conveyor.assembleCar();
car = conveyor.changeEngine();
car = conveyor.changeInterior();
console.log(car);