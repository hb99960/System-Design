class Meal{
    mainDish?: string | null;
    drink?:string | null;
    dessert?: string | null;

    constructor(mainDish?:string | null, drink?:string | null, dessert?:string | null){
        this.mainDish = mainDish;
        this.drink = drink;
        this.dessert = dessert;
    }

    describeMeal():void{
        console.log(`Main Dish : ${this.mainDish}, Drink: ${this.drink}, Dessert: ${this.dessert}`);
    }
}

const myMeal = new Meal("Burger", null, null);
myMeal.describeMeal();
// console.log(myMeal);

class MealBuilder{
    private mainDish?:string;
    private drink?:string;
    private dessert?:string;

    setMainDish(mainDish:string):this{
        this.mainDish = mainDish;
        return this;
    }

    setDrink(drink:string):this{
        this.drink = drink;
        return this;
    }

    setDessert(dessert:string):this{
        this.dessert = dessert;
        return this;
    }

    build():Meal{
        return new Meal(this.mainDish, this.drink, this.dessert);
    }

}

const myMeal2 = new MealBuilder().setMainDish("Pizza").setDessert("Ice-cream").setDrink("Sprite").build();

myMeal2.describeMeal();

const myMeal3 = new MealBuilder().setDrink("Mineral Water").build();
myMeal3.describeMeal();


// Builder vs Factory vs Decorator
