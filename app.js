
/*----------------- Meal item list ---------------------*/ 
const containerDiv = document.getElementById('meals');
const searchBtn = document.getElementById('submit');
const notFound = document.getElementById('notfound');

searchBtn.addEventListener('click', mealList => {
    const mealInput = document.getElementById('meal-input').value.trim();

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
});

const displayMeals = mealBox => {
    if(mealBox){
        let mealsDetails = '';
        mealBox.forEach(meal => {
            mealsDetails += `
                <div onclick="getContent()" class="single-meal" data-id="${meal.idMeal}">
                    <img src="${meal.strMealThumb}">
                    <h4>${meal.strMeal}</h4>
                </div>
            `;
            containerDiv.innerHTML = mealsDetails;
        });
        notFound.classList.remove('addtext');
    } else{
        notFound.classList.add('addtext');
    }
}


/*---------- Single Content ---------------*/ 
const getContent = () =>{
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`
    fetch(url)
    .then(res => res.json())
    .then(data => displayIngredients(data.meals))
}

const displayIngredients = ingredients =>{
    const ingredientsThumb = document.getElementById('ingredients-thumb');
    // const mealTitle = document.getElementById('title');
    const ingredientsList = document.getElementById('ingredients-list');

    const thumbDiv = document.createElement('div');
    thumbDiv.innerHTML = `
        <img src="${ingredients[0].strMealThumb}"/>
    `
    ingredientsThumb.appendChild(thumbDiv);

    ingredients.forEach(ingredient => {
        const li = document.createElement('li');
         
        li.innerText = ingredient.strMeal;
        ingredientsList.appendChild(li);

    });
}

