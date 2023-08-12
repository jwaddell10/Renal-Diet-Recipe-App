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
      console.log('this is a short breakfast recipe');
      break;
    case 'breakfast|10to20minutes':
      console.log('this is a medium breakfast recipe');
      break;
    case 'breakfast|20plusminutes':
      console.log('this is a long breakfast recipe');
      break;
    case 'lunch|0to10minutes':
      console.log('this is a short lunch recipe');
      break;
    case 'lunch|10to20minutes':
      console.log('this is a medium lunch recipe');
      break;
    case 'lunch|20plusminutes':
      console.log('this is a long lunch recipe');
      break;
    case 'dinner|0to10minutes':
      console.log('this is a short dinner recipe');
      break;
    case 'dinner|10to20minutes':
      console.log('this is a medium dinner recipe');
      break;
    case 'dinner|20plusminutes':
      console.log('this is a long dinner recipe');
      break;
    case 'snack|0to10minutes':
      console.log('this is a short snack recipe');
      break;
    case 'snack|10to20minutes':
      console.log('this is a medium snack recipe');
      break;
    case 'snack|20plusminutes':
      console.log('this is a long snack recipe');
      break;
  }

  // console.log(searchQuery);
});

async function fetchAPILowPrep() {
  const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=07219864&app_key=f83320eb349bdebfd72d4be76b29e58f&health=kidney-friendly&time=1-10', { mode: 'cors' });

  const recipeSearchData = await response.json();
  console.log(recipeSearchData.hits[1].recipe.url);
}
