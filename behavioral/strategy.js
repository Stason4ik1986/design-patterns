/*
Стратегия -
поведенческий паттерн, который определяет схожие алгоритмы
и помещает их в каждый отдельный класс (стратегии), после чего,
между этими алгоритмами можно автоматически переключаться
в ходе выполнения программы
Используется при расширении возможностей приложения,
чтобы не превратить код в нечитаемое полотно

Все стратегии должны иметь одинаковый интерфейс взаимодействия,
после чего у нас есть один глобальный или корневой класс,
который в зависимости от той или иной ситуации,
делегирует выполнение алгоритмов на ту или иную стратегию динамически.
Сам же обЪект называется контекстом, так как носит ссылку на ту или иную стратегию

https://www.youtube.com/watch?v=te-teUr0N_w&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=17
*/

/*
Используем обычные функции, вместо стрелочной,
так как они всплывают на более высокий уровень (до своего определения) 
*/

 function baseStrategy(amount) {
    return amount;
};

function premiumStrategy(amount) {
    return amount * 0.85;
};

function platinumStrategy(amount) {
    return amount * 0.65;
};

// Класс контекст
class AutoCart {
    constructor(discount) {
        this.discount = discount;
        this.amount = 0;
    }

    checkout() {
        return this.discount(this.amount)
    }
    
    setAmount(amount) {
        this.amount = amount;
    }
};

const baseCustomer = new AutoCart(baseStrategy);
const premiumCustomer = new AutoCart(premiumStrategy);
const platinumCustomer = new AutoCart(platinumStrategy);

baseCustomer.setAmount(50000);
console.log(baseCustomer.checkout());

premiumCustomer.setAmount(50000);
console.log(premiumCustomer.checkout());

platinumCustomer.setAmount(50000);
console.log(platinumCustomer.checkout());