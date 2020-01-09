/*
Строитель -
структурный паттерн, используется для создания обЪектов со сложными состояниями.
Может иметь дополнительный слой абстракции - директор,
который управляет несколькими строителями.
Создает сложные обЪекты, инициализацию корых сложно уместить в конструкторе.
Данный паттерн в очень удобной форме позволяет создавать различные конфигурация обЪектов,
не засоряя исходный контруктор дополнительной логикой

https://www.youtube.com/watch?v=P36gibfPaXs&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=6
*/

class Car {
    constructor() {
        this.autoPilot = false;
        this.signaling = false;
        this.parktronic = false;
    }
}

class CarBuilder {
    constructor() {
        // Создаем автомобиль базовой комплектации
        this.car = new Car();
    }

    addAutopilot(autoPilot) {
        this.car.autoPilot = autoPilot;
        return this;
    }

    addSignaling(signaling) {
        this.car.signaling = signaling;
        return this;
    }

    addParktronic(parktronic) {
        this.car.parktronic = parktronic;
        return this;
    }

    updateEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    build() {
        return this.car;
    }
}

const myCar =
    new CarBuilder()
        .addAutopilot(true)
        .addParktronic(true)
        .updateEngine('V8')
        .build();

console.log(myCar);