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