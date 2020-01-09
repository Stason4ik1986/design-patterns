/*
Итератор -
поведенческий паттерн, который дает возможность
последовательно обходить элементы составных обЪектов,
не раскрывая их внутреннее представление
(визуально напоминает плеер, когда мы нажимаем кнопки вперед/назад)
Ключевая идея паттерна, заключается в том,
чтобы вынести поведение обхода коллекции из самой коллекции
в отдельный класс.
Сам класс содержит 2 ключевых метода:
next(),
hasNext() - проверяет существование следующего элемента;

https://www.youtube.com/watch?v=bjH4NHItd3U&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=15
*/

class ArrIterator {
    constructor(elements) {
        this.index = 0;
        this.elements = elements;
    }

    next() {
        return this.elements[this.index++];
    }

    hasNext() {
        return this.index < this.elements.length;
    }
}

class ObjIterator {
    constructor(elements) {
        this.index = 0;
        this.keys = Object.keys(elements);
        this.elements = elements;
    }

    next() {
        return this.elements[this.keys[this.index++]];
    }

    hasNext() {
        return this.index < this.keys.length;
    }
}

const collection = new ArrIterator(['Audi', 'Bmw', 'Tesla', 'Mersedes']);

while(collection.hasNext()) {
    console.log(collection.next());
}

const autos = {
    bmw: { model: 'BMW', color: 'black', price: 20000 },
    audi: { model: 'Audi', color: 'white', price: 30000 },
    tesla: { model: 'Tesla', color: 'gray', price: 40000 },
}

const objCollection = new ObjIterator(autos);

while (objCollection.hasNext()) {
    console.log(objCollection.next());
}