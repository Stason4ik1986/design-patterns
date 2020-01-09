/*
Состояние -
поведенческий паттерн, который позволяет менять обЪектам свое поведение,
в зависимости от состояния, что со стороны выглядит так, как-будто в работу
включился другой класс.

https://www.youtube.com/watch?v=W_11rR4UFNw&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=23
*/

class OrderStatus {
    constructor(name, nextStatus) {
        this.name = name;
        this.nextStatus = nextStatus;
    }

    next() {
        return new this.nextStatus();
    }
};

class WaitingForPayment extends OrderStatus {
    constructor() {
        super('waitingForPayment', Shipping);
    }
};

class Shipping extends OrderStatus {
    constructor() {
        super('shipping', Delivered);
    }
};

class Delivered extends OrderStatus {
    constructor() {
        super('delivered', Delivered);
    }
};

class Order {
    constructor() {
        this.state = new WaitingForPayment();
    }

    nextState() {
        this.state = this.state.next();
    }

    cancelOrder() {
        this.state.name === 'WaitingForPayment' ?
            console.log('Order is canceled!') :
            console.log('Order can not be canceled!');
    }
};

const myOrder = new Order();
console.log(myOrder.state.name);
myOrder.cancelOrder();

myOrder.nextState();
console.log(myOrder.state.name);
myOrder.cancelOrder();

myOrder.nextState();
console.log(myOrder.state.name);


