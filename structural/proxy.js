/*
Прокси или заместитель -
структурный паттерн, который вместо реальных обЪектов предоставляет обЪекто-заменители.
Эти обЪекты перехватывают вызов к оригиналам
и позволяют что-то сделать до/после обращения к оригинальному обЪекту.
Т.е это своего рода прослойка, которая позволяет провести какие-то манипуляции,
до того, как отдать дальнейший контроль (например авторизация).

Виды:
Виртуальный - аналог ленивой загрузки;
Логирующий - хранение истории обращений;
Защищающий - авторизация;
Кеширующий - частичное кеширование результатов запросов клиента и управление ими;

https://www.youtube.com/watch?v=9GvBg7pTOUY&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=9
*/

class CarAccess {
    open() {
        console.log('Opening the car door');
    }

    close() {
        console.log('Closing the car door');
    }
}

// Прокси
class SecuritySystem {
    constructor(door) {
        this.door = door;
    }

    open(password) {
        if (this.authenticate(password)) {
            this.door.open();
        } else {
            console.log('Access denied!')
        }
    }

    authenticate(password) {
        return password === 'Ilon';
    }

    close() {
        this.door.close();
    }
}

const door = new SecuritySystem(new CarAccess());

door.open('Jack');
door.open('Ilon');
door.close();

