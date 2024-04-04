function calorieObject(food: string[]): object {
  const allFoods: object = {};
  for (let i = 0; i < food.length; i += 2) {
    if (!allFoods.hasOwnProperty(food[i])) {
      allFoods[food[i]] = Number(food[i + 1]);
    }
  }
  return allFoods;
}

console.log(calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]));
