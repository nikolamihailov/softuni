type Hero = {
  name: string;
  level: number;
  items: string[];
};

function registerHeroes(heroesInfo: string[]): string {
  const heroes: Hero[] = [];

  heroesInfo.forEach((el) => {
    const [name, level, ...items] = el.split(" / ");
    const hero: Hero = {
      name,
      level: Number(level),
      items,
    };
    const idx: number = heroes.findIndex((hero: Hero) => hero.name === name);
    if (idx !== -1) {
      heroes[idx].items = items;
      heroes[idx].level = Number(level);
    } else heroes.push(hero);
  });

  const finalStr: string = heroes
    .sort((a, b) => a.level - b.level)
    .map((hero) => `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`)
    .join("\n");

  return finalStr;
}

const res = registerHeroes([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
const res2 = registerHeroes([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Isacc / 1 / Desolator, Sentinel, Antara",
]);
console.log(res);
console.log(res2);
