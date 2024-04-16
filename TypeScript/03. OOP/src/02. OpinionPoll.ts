interface PersonInfo {
  name: string;
  age: number;
}

class Person implements PersonInfo {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  printInfo(): void {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

function showPersonInfo(data: string) {
  const [name, age] = data.split(" ");
  const person = new Person(name, Number(age));
  person.printInfo();
}

showPersonInfo("Peter 12");
