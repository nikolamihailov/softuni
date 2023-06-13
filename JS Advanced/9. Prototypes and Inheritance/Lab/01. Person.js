function createPerson(firstName, lastName) {
    const result = {
        firstName,
        lastName
    };
    Object.defineProperty(result, "fullName", {
        get() {
            return this.firstName + " " + this.lastName;
        },
        set(value) {
            if (value.includes(" ")) {
                const [first, last] = value.split(" ");
                this.firstName = first;
                this.lastName = last;
            }
        }
    });
    return result;
}
const Person = createPerson;
const person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla