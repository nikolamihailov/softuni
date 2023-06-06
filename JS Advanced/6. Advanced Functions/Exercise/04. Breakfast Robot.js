function breakfastRobot() {
    const ingredients = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0,
    };
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, flavour: 3, fat: 7 },
        eggs: { protein: 5, flavour: 1, fat: 1 },
        turkey: { carbohydrate: 10, flavour: 10, fat: 10, protein: 10 }
    };
    function manager(param) {
        let [command, recipeOrElement, quantity] = param.split(" ");
        quantity = Number(quantity);
        switch (command) {
            case "restock":
                ingredients[recipeOrElement] += quantity;
                return "Success";
            case "prepare":
                const recipe = recipes[recipeOrElement];
                for (let ingredient in recipe) {
                    const amountNeeded = recipe[ingredient] * quantity;
                    if (ingredients[ingredient] < amountNeeded) {
                        return `Error: not enough ${ingredient} in stock`;
                    } else {
                        ingredients[ingredient] -= amountNeeded;
                    }
                }
                return "Success";
            case "report":
                return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        }
    };
    return manager;
}
let manager = breakfastRobot();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in



