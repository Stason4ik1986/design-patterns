// Класс конструктор
class Bmw {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

// Фабрика
class BmwFactory {
    create(type) {
        if (type === 'X5') {
            return new Bmw(type, 10800, 300);
        };

        if (type === 'X6') {
            return new Bmw(type, 11100, 320);
        };
    }
}

const factory = new BmwFactory();

const x5 = factory.create('X5');
const x6 = factory.create('X6');

console.log(x5);
console.log(x6);
