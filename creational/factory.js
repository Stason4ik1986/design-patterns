/*
Фабричный шаблон -
Класс, на основе которого будут создаваться определенные обЪекты на основании входных данных
Исходный класс можно называть суперклассом
Используем фабрику, когда нужно создавать множество однотипных обЪектов,
т.е обЪекты с одинаковой структурой, но разными данными,
причем эти обЪекты могут содержать как свойства, так и методы

https://www.youtube.com/watch?v=wmla1hxxvQI&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=3
*/

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
