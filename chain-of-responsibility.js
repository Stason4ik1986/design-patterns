/*
Цепочка обязанностей -
поведенческйи паттерн, который позволяет передавать запросы последовательно
по цепочки обработчиков. Причем его особенность в том,
что каждый последующий обработчик решает задачу,
может ли он сам обработать задачу,
либо его нужно передать дальше по цепочке.
Пример: платежная система с разными способами оплаты

https://www.youtube.com/watch?v=stpzkOFoWdY&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=16
*/

class Account {
    pay(orderPrice) {
        if (this.canPay(orderPrice)) {
            console.log(`Paid ${orderPrice} using ${this.name}`);
        } else if (this.incomer) {
            console.log(`Can not pay using ${this.name}`);
            this.incomer.pay(orderPrice);
        } else {
            console.log('Unfortunately, not enough money');
        }
    }

    canPay(amount) {
        return this.ballance > amount;
    }

    setNext(account) {
        this.incomer = account;
    }

    show() {
        console.log(this);
    }
};

class Master extends Account {
    constructor(ballance) {
        super();
        this.name = 'Master Card';
        this.ballance = ballance;
    }
};

class Paypal extends Account {
    constructor(ballance) {
        super();
        this.name = 'Paypal';
        this.ballance = ballance;
    }
};

class Qiwi extends Account {
    constructor(ballance) {
        super();
        this.name = 'Qiwi';
        this.ballance = ballance;
    }
};

// Set system ballance
const master = new Master(100);
const paypal = new Paypal(200);
const qiwi = new Qiwi(500);

// Define chain
master.setNext(paypal);
paypal.setNext(qiwi);

// Start payment
master.show(438);
