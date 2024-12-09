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

const user1 = new User("Giovanni", "Manna", 44, "Roma");
const user2 = new User("Gianluca", "Del Prete", 23, "Napoli");

console.log(user1.whoIsOlder(user2))


//prossimo esercizio

const form = document.getElementById("form");
const ul = document.getElementById("animalList");
const pets = [];

class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }

    isSameOwner() {
        for (let i = 0; i < pets.length; i++) {
            if (this.ownerName === pets[i].ownerName) {
                return true;
            }
        }
    }
}

form.addEventListener("submit", addPet);

function addPet(e) {
    e.preventDefault();
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;
    const newPet = new Pet(petName, ownerName, species, breed);
    
    pets.push(newPet);
    printPets();
    console.log(newPet.isSameOwner());
}

function printPets() {
    ul.innerHTML = '';
    pets.forEach(pet => {
        const li = document.createElement("li");
        li.innerHTML = `Nome: ${pet.petName}, Padrone: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
        ul.appendChild(li);
    });
}
