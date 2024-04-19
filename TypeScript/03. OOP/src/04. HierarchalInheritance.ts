class Animal {
  eat(): void {
    console.log("eating...");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("barking...");
  }
}

class Cat extends Animal {
  meow(): void {
    console.log("meowing...");
  }
}

const cat1 = new Cat();
cat1.eat();
cat1.meow();
