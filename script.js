/* eslint-disable no-console */
const recipeSearchBarForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.searchresultscontainer');

let searchQuery = '';
const APP_ID = '07219864';
const APP_key = 'f83320eb349bdebfd72d4be76b29e58f';
const baseURL = `https://api.edamam.com/api/recipes/v2?q=pizza&app_id=${APP_ID}&app_key${APP_key}`;

console.log(baseURL);

recipeSearchBarForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector('input').value;
  console.log(searchQuery);
});
