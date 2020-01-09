/*
Команда -
поведенческий паттерн, который помогает инкапсулировать
некоторые действия и необходимые для них данные,
и таким образом позволяет отделить клиента от получателя.
Можно сказать, что он превращает запросы в обЪекты,
что позволяет пердавать их как аргументы в методы.

https://www.youtube.com/watch?v=jWsyfeOkv9Q&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=21
*/

class Driver {
    constructor(command) {
        this.command = command;
    }

    execute() {
        this.command.execute();
    }
};

class Engine {
    constructor() {
        this.state = false;
    }

    on() {
        this.state = true;
    }

    off() {
        this.state = false;
    }
};

class onStartCommand {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.on();
    }
}

class onSwitchOffCommand {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.off();
    }
}

const engine = new Engine();
console.log(engine);

const onStartEngine = new onStartCommand(engine);
const driver = new Driver(onStartEngine);

driver.execute();

console.log(engine);