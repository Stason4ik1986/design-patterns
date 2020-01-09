/*
Прототип -
пораждающий паттерн, который позволяет копировать обЪекты,
не вдаваясь в подробности их реализации.
В шаблоне прототип, у нас есть базовая реализация класса
и используя упрощенный интерфейс мы создаем клоны обЪектов.
А клоны, в случае необходимости мы можем изменить
и заточить под выполнение определенных задач
Благодаря этому паттерну мы создаем копии обЪектов с минимальной затратой памяти

https://www.youtube.com/watch?v=nDth2LO5ra4&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=5
*/

class TeslaCar {
    constructor(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }

    produce() {
        return new TeslaCar(
            this.model,
            this.price,
            this.interior,
            this.autopilot,
        );
    }
}

// Базовое авто
const prototypeCar = new TeslaCar('S', 80000, 'black', false);

// Клонирование базового авто
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// Внесем изменения для авто
car1.interior = 'white';
car1.autopilot = true;

console.log(car1);