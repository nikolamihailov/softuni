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
  const result: string[] = [];
  arr.forEach((el: string) => {
    const [name, age] = el.split(" ");
    const cat: Cat = new Cat(name, Number(age));
    result.push(cat.meow());
  });

  return result.join("\n");
}

console.log(cats(["Mellow 2", "Tom 5"]));
