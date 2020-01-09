/* 
Декоратор -
структурный паттерн, с помощью которого мы можем добавлять обЪектам новые свойства и методы,
т.е оборачивать наш обЪект в этот самый клас декоратора, и тем самым расширять его возможности.
Самый простой пример использования - создание большого количества подклассов.
Т.е на основании какой-то заготовки мы можем создавать другие классы

https://www.youtube.com/watch?v=gXvKHKQB2DI&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=7
*/

class Car {
    constructor() {
        this.price = 10000;
        this.model = 'Car';
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.model;
    }   
}

class Tesla extends Car {
    constructor() {
        super();
        this.price = 25000;
        this.model = 'Tesla';
    }
}

class Audi extends Car {
    constructor() {
        super();
        this.price = 20000;
        this.model = 'Audi';
    }
}

// Декораторы
class Autopilot {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 5000;
    }

    getDescription() {
        return `${this.car.getDescription()} with autopilot`;
    }
}

class Parktronic {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 3000;
    }

    getDescription() {
        return `${this.car.getDescription()} with parktronic`;
    }
}

// Версия с автопилотом и парктроник
let tesla = new Tesla();
tesla = new Autopilot(tesla);
tesla = new Parktronic(tesla);

console.log(tesla.getDescription(), tesla.getPrice());

// Версия только с автопилотом
let tesla2 = new Tesla();
tesla2 = new Autopilot(tesla2);

console.log(tesla2.getDescription(), tesla2.getPrice());

// Версия только с автопилотом
let audi = new Audi();
audi = new Autopilot(audi);

console.log(audi.getDescription(), audi.getPrice());