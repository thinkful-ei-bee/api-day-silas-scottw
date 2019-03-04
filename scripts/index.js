/* global shoppingList, store, api, Item */

'use strict';

$(document).ready(function() {
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      console.log(store.items);
      shoppingList.render();
    });
  shoppingList.bindEventListeners();
});

