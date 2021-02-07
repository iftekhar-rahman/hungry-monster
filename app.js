
/*----------------- Meal item list ---------------------*/ 
const containerDiv = document.getElementById('meals');
const searchBtn = document.getElementById('submit');

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
                <div class="single-meal" data-id="${meal.idMeal}">
                    <img src="${meal.strMealThumb}">
                    <h4>${meal.strMeal}</h4>
                </div>
            `;
            containerDiv.innerHTML = mealsDetails;
        });
    } else{
        alert("Sorry, we didn't find anything.")
    }
    
}

// /*--------  Meal Details -----------*/ 
// const mealContainer = document.getElementById('meals');
// // const recipeClose = document.getElementById('close');
// mealContainer.addEventListener('click', function(event){
//     event.target.classList.add('single-meal');

// }); 

// // let mealItems = document.getElementsByClassName('single-meal');
// // for (let i = 0; i < mealItems.length; i++) {
// //     let mealItem = mealItems[i];
// //     mealItem.onclick = function(){
// //         this.classList.add('active');
// //     }
    
// }
