class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }

    whoIsOlder(secondUser) {
        if (this.age > secondUser.age) {
            return `${this.firstName} ${this.lastName} è più vecchio di ${secondUser.firstName} ${secondUser.lastName}`;
        } else if (this.age < secondUser.age) {
            return `${this.firstName} ${this.lastName} è più giovane di ${secondUser.firstName} ${secondUser.lastName}`;
        } else {
            return `${this.firstName} ${this.lastName} e ${anotherUser.firstName} ${anotherUser.lastName} hanno la stessa età`;
        }
    }
}

const user1 = new User("Giovanni", "Manna",44,"Roma");
const user2 = new User("Gianluca", "Del Prete",23,"Napoli");

console.log(user1.whoIsOlder(user2))


