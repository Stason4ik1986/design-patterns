/*
Легковес, приспособленец, кэш -
структурный паттерн, который позволяет вместить
большее количество определенных обЪектов в выделенную оперативную память.
Другими словами, он позволяет экономить ресурсы,
разделяя общее состояние обЪектов между собой,
вместо хранения одинаковых данных в каждом обЪекте, 
что в принципе похоже на кеширование данных
Свойство лековесо не возможно изменить после создания,
т.е все свое внутреннее он должен получить через параметры конструктора,
не должно быть никаких публичных полей и сеттеров
Создавать лековесы намного удобнее с помощью фабрики

https://www.youtube.com/watch?v=hlxRecs_r3Y&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=13
*/

// Класс легковеса
class Auto {
    constructor(model) {
        this.model = model;
    }
}

// Фабрика
class AutoFactory {
    constructor(name) {
        this.models = {};
    }

    create(name) {
        let model = this.models[name];
        if (model) return model;
        console.count('model');
        this.models[name] = new Auto(name);
        return this.models[name];
    }
    
    getModels() {
        console.table(this.models);
    }
}

const factory = new AutoFactory();

const bmw = factory.create('BMW');
const audi = factory.create('Audi');
const tesla = factory.create('Tesla');
const blackTesla = factory.create('Tesla');

console.log(factory.getModels());

