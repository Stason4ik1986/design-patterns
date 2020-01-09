/*
Посетитель -
поведенческий паттерн - добавляет новую функциональность
к уже существующим классам, причем не изменяя исходный код класса.

https://www.youtube.com/watch?v=dyg13zxD9xw&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=20
*/

class Auto {
    accept(vistor) {
        vistor(this);
    }
}

class Tesla extends Auto {
    info() {
        return 'It is a Tesla Car!';
    }
};

class Bmw extends Auto {
    info() {
        return 'It is a BMW Car!';
    }
};

class Audi extends Auto {
    info() {
        return 'It is a Audi Car!';
    }
};

function exportVisitor(auto) {
    if (auto instanceof Tesla) {
        auto.export = console.log(`Exported data: ${auto.info()}`);
    }

    if (auto instanceof Bmw) {
        auto.export = console.log(`Exported data: ${auto.info()}`);
    }

    if (auto instanceof Audi) {
        auto.export = console.log(`Exported data: ${auto.info()}`);
    }
};

const tesla = new Tesla();
const bmw = new Bmw();

console.log(tesla.accept(exportVisitor));
console.log(bmw.accept(exportVisitor));

