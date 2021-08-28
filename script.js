const recipes = {
    margarita: [
    { ingredient: "lime juice", serving: 1, measurement: "oz" },
    { ingredient: "tequila", serving: 2, measurement: "oz" },
    { ingredient: "triple sec", serving: 1, measurement: "oz" },
],
    oldFashioned: [
    { ingredient: "sugar", serving: 1, measurement: "tsp" },
    { ingredient: "bourbon", serving: 2, measurement: "oz" },
    { ingredient: "bitters", serving: 1, measurement: "tsp" },
],

    newDrink: [
    { ingredient: "sugar", serving: 1, measurement: "tsp" },
    { ingredient: "bourbon", serving: 2, measurement: "oz" },
    { ingredient: "bitters", serving: 1, measurement: "tsp" },
]
}
const select = document.getElementById('select');

//Create a dropdown list from the recipes array. Use for in statement to add objects as dropdown options. 
function createRecipes(recipes){
    for(let recipe in recipes){
        let dropdown = document.createElement("option");
        dropdown.innerHTML = recipe;
        select.appendChild(dropdown);
    }
}

//Choose an option from the dropdown and submit it through button click. 
function chooseOption (recipes){
    let x = select.selectedIndex;
    let choice = select.options;
    let list = choice[x].value;
    console.log(list);
   }

document.getElementById('submit').addEventListener("click", chooseOption);

//Option choice becomes the argument for the displayRecipe functions and executes function. 



//Run through the recipe array and create a list of ingredients with a serving size
function displayRecipe(recipe){ 
    for(let i=0; i<recipe.length; i++){

        let item = document.createElement("li");
        item.innerHTML = recipe[i].ingredient + " " + recipe[i].serving + " " + recipe[i].measurement;
        document.body.appendChild(item);
         
         console.log(recipe[i].ingredient);
         console.log(recipe[i].serving);
         console.log(recipe[i].measurement);
    };
  }

createRecipes(recipes);

