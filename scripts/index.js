/* global shoppingList, store, api */

'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
  .then(res => res.json())
  .then(data => console.log(data));

api.getItems()
  .then(res => console.log(res));

console.log(api.BASE_URL);