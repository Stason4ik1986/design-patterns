/*
Абстрактная фабрика -
паттерн, который создает интерфейс, группирующий другие фабрики,
которые логически связаны друг с другом.
Условно говоря, - это своеобразная абстракция для фабрики и фабричного метода

https://www.youtube.com/watch?v=LDA4riuzgiw&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=4
*/

// Абстрактная фабрика
function bmwProducer(kind) {
    return kind === 'sport' ? sportCarFactory : familyCarFactory;
};

// Фабпика 1
function sportCarFactory() {
    return new Z4();
};

// Фабпика 2
function familyCarFactory() {
    return new I3();
};

class Z4 {
    info() {
        return 'Z4 is a Sport car!';
    }
};

class I3 {
    info() {
        return 'I3 is a Family car!';
    }
};

const produce = bmwProducer('sport')
const myCar = new produce();

console.log(myCar.info());