/* eslint-disable default-case */
/* eslint-disable no-console */
const recipeSearchBarForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.searchresultscontainer');

let searchQuery = '';
const APP_ID = '07219864';
// eslint-disable-next-line camelcase
const APP_key = 'f83320eb349bdebfd72d4be76b29e58f';

recipeSearchBarForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const img = document.querySelector('img');
  searchQuery = e.target.querySelector('input').value;
  const mealTime = document.querySelector('#meal-names').value;
  const prepTime = document.querySelector('#prep-time').value;

  switch (`${mealTime}|${prepTime}`) {
    case 'breakfast|0to10minutes':
      fetchAPIBreakfastLowPrep();
      break;
    case 'breakfast|10to20minutes':
      fetchAPIBreakfastMediumPrep();
      console.log('this is a medium breakfast recipe');
      break;
    case 'breakfast|20plusminutes':
      fetchAPIBreakfastHighPrep();
      console.log('this is a long breakfast recipe');
      break;
    case 'lunch|0to10minutes':
      fetchAPILunchLowPrep();
      console.log('this is a short lunch recipe');
      break;
    case 'lunch|10to20minutes':
      fetchAPILunchMediumPrep();
      console.log('this is a medium lunch recipe');
      break;
    case 'lunch|20plusminutes':
      fetchAPILunchHighPrep();
      console.log('this is a long lunch recipe');
      break;
    case 'dinner|0to10minutes':
      fetchAPIDinnerLowPrep();
      console.log('this is a short dinner recipe');
      break;
    case 'dinner|10to20minutes':
      fetchAPIDinnerMediumPrep();
      console.log('this is a medium dinner recipe');
      break;
    case 'dinner|20plusminutes':
      fetchAPIDinnerHighPrep();
      console.log('this is a long dinner recipe');
      break;
    case 'snack|0to10minutes':
      fetchAPISnackLowPrep();
      console.log('this is a short snack recipe');
      break;
    case 'snack|10to20minutes':
      fetchAPISnackMediumPrep();
      console.log('this is a medium snack recipe');
      break;
    case 'snack|20plusminutes':
      fetchAPISnackHighPrep();
      console.log('this is a long snack recipe');
      break;
  }

  // console.log(searchQuery);
});

async function fetchAPIBreakfastLowPrep() {
  console.log(searchQuery);
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=07219864&app_key=f83320eb349bdebfd72d4be76b29e58f&health=kidney-friendly&mealType=Breakfast&time=1-10&imageSize=REGULAR
  `, { mode: 'cors' });
  const recipeSearchData = await response.json();
  // img.src = recipeSearchData.hits[3].recipe.images.thumbnail;
  console.log(recipeSearchData.hits[0].recipe.ingredientLines);
  generateHTML(recipeSearchData.hits);
}

async function fetchAPIBreakfastMediumPrep() {
  console.log(searchQuery);
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=07219864&app_key=f83320eb349bdebfd72d4be76b29e58f&health=kidney-friendly&mealType=Breakfast&time=11-20&imageSize=REGULAR
  `, { mode: 'cors' });
  const recipeSearchData = await response.json();
  // img.src = recipeSearchData.hits[3].recipe.images.thumbnail;
  console.log(recipeSearchData.hits[0].recipe.calories);
  generateHTML(recipeSearchData.hits);
}

async function fetchAPIBreakfastHighPrep() {
  console.log(searchQuery);
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=07219864&app_key=f83320eb349bdebfd72d4be76b29e58f&health=kidney-friendly&mealType=Breakfast&time=21-60&imageSize=REGULAR
  `, { mode: 'cors' });
  const recipeSearchData = await response.json();
  // img.src = recipeSearchData.hits[3].recipe.images.thumbnail;
  console.log(recipeSearchData.hits[0].recipe.calories);
  generateHTML(recipeSearchData.hits);
}

async function fetchAPILunchLowPrep() {
  console.log(searchQuery);
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=07219864&app_key=f83320eb349bdebfd72d4be76b29e58f&health=kidney-friendly&mealType=Lunch&time=1-10&imageSize=REGULAR
  `, { mode: 'cors' });
  const recipeSearchData = await response.json();
  // img.src = recipeSearchData.hits[3].recipe.images.thumbnail;
  console.log(recipeSearchData.hits[0].recipe.calories);
  generateHTML(recipeSearchData.hits);
}

async function fetchAPILunchMediumPrep() {
  console.log(searchQuery);
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=07219864&app_key=f83320eb349bdebfd72d4be76b29e58f&health=kidney-friendly&mealType=Lunch&time=11-20&imageSize=REGULAR
  `, { mode: 'cors' });
  const recipeSearchData = await response.json();
  // img.src = recipeSearchData.hits[3].recipe.images.thumbnail;
  console.log(recipeSearchData.hits[0].recipe.calories);
  generateHTML(recipeSearchData.hits);
}

async function fetchAPILunchHighPrep() {
  console.log(searchQuery);
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=07219864&app_key=f83320eb349bdebfd72d4be76b29e58f&health=kidney-friendly&mealType=Lunch&time=21-60&imageSize=REGULAR
  `, { mode: 'cors' });
  const recipeSearchData = await response.json();
  // img.src = recipeSearchData.hits[3].recipe.images.thumbnail;
  console.log(recipeSearchData.hits[0].recipe.calories);
  generateHTML(recipeSearchData.hits);
}

async function fetchAPIDinnerLowPrep() {
  console.log(searchQuery);
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=07219864&app_key=f83320eb349bdebfd72d4be76b29e58f&health=kidney-friendly&mealType=Dinner&time=1-10&imageSize=REGULAR
  `, { mode: 'cors' });
  const recipeSearchData = await response.json();
  // img.src = recipeSearchData.hits[3].recipe.images.thumbnail;
  console.log(recipeSearchData.hits[0].recipe.calories);
  generateHTML(recipeSearchData.hits);
}

async function fetchAPIDinnerMediumPrep() {
  console.log(searchQuery);
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=07219864&app_key=f83320eb349bdebfd72d4be76b29e58f&health=kidney-friendly&mealType=Dinner&time=11-20&imageSize=REGULAR
  `, { mode: 'cors' });
  const recipeSearchData = await response.json();
  // img.src = recipeSearchData.hits[3].recipe.images.thumbnail;
  console.log(recipeSearchData.hits[0].recipe.calories);
  generateHTML(recipeSearchData.hits);
}

async function fetchAPIDinnerHighPrep() {
  console.log(searchQuery);
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=07219864&app_key=f83320eb349bdebfd72d4be76b29e58f&health=kidney-friendly&mealType=Dinner&time=21-60&imageSize=REGULAR
  `, { mode: 'cors' });
  const recipeSearchData = await response.json();
  // img.src = recipeSearchData.hits[3].recipe.images.thumbnail;
  console.log(recipeSearchData.hits[0].recipe.calories);
  generateHTML(recipeSearchData.hits);
}

async function fetchAPISnackLowPrep() {
  console.log(searchQuery);
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=07219864&app_key=f83320eb349bdebfd72d4be76b29e58f&health=kidney-friendly&mealType=Snack&time=1-10&imageSize=REGULAR
  `, { mode: 'cors' });
  const recipeSearchData = await response.json();
  // img.src = recipeSearchData.hits[3].recipe.images.thumbnail;
  console.log(recipeSearchData.hits[0].recipe.calories);
  generateHTML(recipeSearchData.hits);
}

async function fetchAPISnackMediumPrep() {
  console.log(searchQuery);
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=07219864&app_key=f83320eb349bdebfd72d4be76b29e58f&health=kidney-friendly&mealType=Snack&time=11-20&imageSize=REGULAR
  `, { mode: 'cors' });
  const recipeSearchData = await response.json();
  // img.src = recipeSearchData.hits[3].recipe.images.thumbnail;
  console.log(recipeSearchData.hits[0].recipe.calories);
  generateHTML(recipeSearchData.hits);
}

async function fetchAPISnackHighPrep() {
  console.log(searchQuery);
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=07219864&app_key=f83320eb349bdebfd72d4be76b29e58f&health=kidney-friendly&mealType=Snack&time=21-60&imageSize=REGULAR
  `, { mode: 'cors' });
  const recipeSearchData = await response.json();
  // img.src = recipeSearchData.hits[3].recipe.images.thumbnail;
  console.log(recipeSearchData.hits[0].recipe.calories);
  generateHTML(recipeSearchData.hits);
}

function generateHTML(results) {
  let generatedHTML = '';
  results.map((result) => {
    generatedHTML
    += `
    <div class="item">
            <img src="${result.recipe.image}" alt="Not Found" onerror="this.src='download1.jpeg';">
            <div class="flexcontainer">
                <h1 class="recipetitle">${result.recipe.label}</h1>
                <a href="${result.recipe.url}" target="_blank">View Recipe</a>
            </div>
            <p class="item-data">Calories: ${Math.floor(result.recipe.calories)}</p>
            <li class="ingredients">Ingredients: ${result.recipe.ingredientLines}</li>
    </div>
    `;
  });
  searchResultDiv.innerHTML = generatedHTML;
}
