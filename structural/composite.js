/*
Компоновщик -
структурный паттерн проектирования,
который позволяет сгруппировать множество обЪектов в древовидную структуру
и работать с этой структурой так, как будто это один единственный обЪект
(ключевая структура этого паттерна - дерево)
Сам обЪект мало знает о вложенных в него структурах,
он протсо реализует те же методы, что и вложенные в него компоненты
Но вместо непосредственного вызова своего метода, 
он передает вызовы всем вложенным компонентам,
а те компоненты передают вызовы своим собственным вложенным структурам
Все вложенные компоненты - листья дерева, связь между ними - ветки

https://www.youtube.com/watch?v=H-CwPjUB5Rw&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=11
*/

class Equipment {
    getPrice() {
        return this.price || 0;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }
}

class Engine extends Equipment {
    constructor() {
        super();
        this.setName('Engine');
        this.setPrice(800);
    }
}

class Body extends Equipment {
    constructor() {
        super();
        this.setName('Body');
        this.setPrice(3000);
    }
}

class Tools extends Equipment {
    constructor() {
        super();
        this.setName('Tools');
        this.setPrice(4000);
    }
}

// Компоновщик
class Composite extends Equipment {
    constructor() {
        super();
        this.equipments = [];
    }

    addEquipment(equipment) {
        this.equipments.push(equipment);
        console.log(this.equipments);
    }

    getPrice() {
        return this.equipments
            .map(eq => eq.getPrice())
            .reduce((a, b) => a + b);
    }
}

class Car extends Composite {
    constructor() {
        super();
        this.setName('Audi');
    }
}

const myCar = new Car();

myCar.addEquipment(new Engine());
myCar.addEquipment(new Body());
myCar.addEquipment(new Tools());

console.log(`${myCar.getName()} price is ${myCar.getPrice()}$`);