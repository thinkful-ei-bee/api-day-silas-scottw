'use strict';

const api = (function(){

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/silas';

  const getItems = function(){
    return fetch(`${BASE_URL}/items`);
  };

  const createItem = function(name){

    if (!name) {
      throw new TypeError('name is empty');
    }
    const newItem = JSON.stringify({
      name
    });

    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem,
    });
  };

  const updateItem = function(id, updateData){

    console.log('updateItem ran');
    const newData = JSON.stringify({ name: updateData });

    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newData,
    });
  };


  return {
    getItems,
    createItem,
    updateItem,
  };
})();