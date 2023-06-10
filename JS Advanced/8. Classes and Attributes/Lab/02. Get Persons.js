function getPeople() {
    const arr = [];
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    const personOne = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    const personTwo = new Person('SoftUni');
    const personThree = new Person('Stephan', 'Johnson', 25);
    const personFour = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    arr.push(personOne, personTwo, personThree, personFour);
    return arr;
}