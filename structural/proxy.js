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

