// const foodName = displayMeals(data.meals.strMeal);
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
.then(res => res.json())
.then(data => displayMeals(data.meals));


fetch('https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview')
.then(res => res.json())
.then(data => displayMeals(data.meals));



const searchBtn = document.getElementById('submit'); 
const inputValue = document.getElementById('meal-input').value;
searchBtn = document.addEventListener('click', function(foodName){
    // const mealInput = document.getElementById('meal-input').value;
    inputValue = foodName;
    return foodName;
});


const displayMeals = mealBox => {
    const containerDiv = document.getElementById('meals');

    // meals.forEach(meal => {

    //     const singleDiv = document.createElement('div');

    //     const mealsDetails = `
    //         <img src="${meal.strMealThumb}">
    //         <h4>${meal.strMeal}</h4>
    //     `;
    //     mealsDetails.document.innerHTML = mealsDetails;
    //     containerDiv.appendChild(singleDiv);
    // });


    for (let i = 0; i < mealBox.length; i++) {
        const meal = mealBox[i];

        const singleDiv = document.createElement('div');
        singleDiv.className = 'single-meal';
        const mealsDetails = `
            <img src="${meal.strMealThumb}">
            <h4>${meal.strMeal}</h4>
        `;
        singleDiv.innerHTML = mealsDetails;
        containerDiv.appendChild(singleDiv);
        
    }
}

