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