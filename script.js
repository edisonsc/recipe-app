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
]
}

//Create a dropdown list from the recipes array. Use for in statement to add objects as dropdown options. 
function chooseRecipe(recipes){
    var select = document.getElementById('arr');
    for(let recipe in recipes){
        var dropdown = document.createElement("option");
        dropdown.textContent = recipe;
        dropdown.innerHTML = recipe;
        select.appendChild(dropdown);
    }
}

//Run through the recipe array and create a list of ingredients with a serving size
function displayRecipe(recipe){

    for(let i=0; i<recipe.length; i++){

        var item = document.createElement("li");
        item.innerHTML = recipe[i].ingredient + " " + recipe[i].serving + " " + recipe[i].measurement;
        document.body.appendChild(item);
         
         console.log(recipe[i].ingredient);
         console.log(recipe[i].serving);
         console.log(recipe[i].measurement);
    };
  }

chooseRecipe(recipes);
displayRecipe(recipes.margarita);
displayRecipe(recipes.oldFashioned);
