'use strict';

const api = (function(){

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/silas-scottw';

  const getItems = function(){
    return fetch(`${BASE_URL}/items`);
  };

  const createItem = function(name){
    const newItem = JSON.stringify({
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: name,
    });

    return fetch(`${BASE_URL}/items`, newItem);
  };


  return {
    getItems,
    createItem,
  };
})();