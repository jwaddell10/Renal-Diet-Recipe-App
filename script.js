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
  fetchAPI();
  // console.log(searchQuery);
});

async function fetchAPI() {
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=${APP_ID}&app_key=${APP_key}&health=kidney-friendly`, { mode: 'cors' });

  const recipeSearchData = await response.json();
  console.log(recipeSearchData.hits[0].recipe.url);
}
