/*
Мост -
порождающий паттерн, который разделяет один или несколько классов
на несколько отдельных иерархий, которые называются абстракция и реализация,
что в свою очередь позволяет изменять их, без зависимостей друг от друга.

Абстракция - специальная обертка, которая сама не выполняет работу,
а делигирует ее одному из обЪектов реализации.

Реализация - обЪект в котором описана непосредственно сама реализация

https://www.youtube.com/watch?v=pNVuMif0bc0&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=12
*/

class Model {
    constructor(color) {
        this.color = color;
    }
}

class Color {
    constructor(type) {
        this.type = type;
    }

    get() {
        return this.type;
    }
}

class BlackColor extends Color {
    constructor() {
        super('dark-black');
    }
}

class SilbrigColor extends Color {
    constructor() {
        super('silber-metallic');
    }
}

class Audi extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `Auto: Audi, Color: ${this.color.get()}`;
    }
}

class Bmw extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `Auto: BMW, Color: ${this.color.get()}`;
    }
}

const blackBmw = new Bmw(new BlackColor());

console.log(blackBmw.paint());
