class Engine2 {
    simpleInterface() {
        console.log('Engine 2.0 - tr-tr-tr');
    }
}

class EngineV8 {
    complicatedInterface() {
        console.log('Engine V8! - wroom wrom!');
    }
}

// Адаптер
class EngineV8Adapter {
    constructor(engine) {
        this.engine = engine;
    }

    simpleInterface() {
        this.engine.complicatedInterface();
    }
}

class Auto {
    startEngine(engine) {
        engine.simpleInterface();
    }
}

// Engine 2.0
const myCar = new Auto();
const oldEngine = new Engine2();

myCar.startEngine(oldEngine);

// Engine V8 with adapter
const myCar2 = new Auto();
const engineAdapter = new EngineV8Adapter(new EngineV8());

myCar2.startEngine(engineAdapter);

// Engine V8 without adapter
const myCar3 = new Auto();
const engineWithoutAdapter = new EngineV8();

myCar3.startEngine(engineWithoutAdapter);
