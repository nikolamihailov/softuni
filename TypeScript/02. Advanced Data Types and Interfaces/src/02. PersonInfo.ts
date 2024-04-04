type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

function personInfo(firstName: string, lastName: string, age: string): Person {
  const person: Person = { firstName, lastName, age: Number(age) };
  return person;
}

console.log(personInfo("Peter", "Pan", "20"));
console.log(personInfo("George", "Smith", "18"));
