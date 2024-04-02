function cats(arr: string[]): string {
  class Cat {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    meow(): string {
      return `${this.name}, age ${this.age} says Meow`;
    }
  }
  const result: object[] = [];
  arr.forEach((el: string) => {
    const [name, age] = el.split(" ");
    const cat: object = new Cat(name, Number(age));
    result.push(cat);
  });

  return result.join("\n");
}

cats(["Mellow 2", "Tom 5"]);
