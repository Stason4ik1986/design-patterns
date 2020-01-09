/*
Просто обЪект, который в системе в единственном экземпляре.
Плюс к нему есть какая-то глобальноая точка доступа.
Этот паттерн использовался настолько часто, что перешел в ряды анти-паттернов
Используется, когда нужен обЪект в единственным экземпляре,
и к которому может быть доступ из разных частей программы (корзина, карта клиента).

https://www.youtube.com/watch?v=GrYs0qDQEp0&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=2
*/

class Counter {
    constructor() {
        if (!Counter.instance) {
            this.count = 0;
            Counter.instance = this;
        } else {
            return Counter.instance;
        }
    }

    getCount() {
        return this.count;
    }

    increaseCount() {
        return this.count++
    }
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount2.increaseCount();

console.log(myCount1.getCount());
console.log(myCount2.getCount());