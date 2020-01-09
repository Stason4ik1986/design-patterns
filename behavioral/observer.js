/*
Наблюдатель -
поведенческий паттерн, который создает механизм подписки,
позволяющий одним обЪектам следить за изменениями состояния других.
С ростом приложения, может понадобиться хранить данные,
от которых зависят несколько компонентов, в одном обЪекте или классе (store).
В свою очередь он содержит определенный свойства,
от изменения которых зависит логика определенных компонентов.
Он соответсвенно содержит список этих зависящих компонентов,
которые в данном кейсе называются подписчики.
Также в нем есть методы, с помощью которых можно изменять наблюдаемые свойства,
и методы, которые оповещают о том, что свойство изменилось и на это неплохо бы отреагировать.

https://www.youtube.com/watch?v=LgfWY2bDAtA&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=22
*/

class AutoNews {
    constructor() {
        this.news = '';
        this.actions = [];
    }

    setNews(text) {
        this.news = text;
        this.notifyAll();
    }

    notifyAll() {
        return this.actions.forEach(subs => subs.inform(this));
    }

    register(observer) {
        this.actions.push(observer);
    }

    unregister(observer) {
        this.actions = this.actions.filter(el => !(el instanceof observer));
    }
};

class Jack {
    inform(message) {
        console.log(`Jack has been informed about ${message.news}`)
    }
};

class Max {
    inform(message) {
        console.log(`Max has been informed about ${message.news}`)
    }
};

const autoNews = new AutoNews();

autoNews.register(new Max());
autoNews.register(new Jack());

autoNews.setNews('New Tesla price is 40 000');