'use strict';

const api = (function(){

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/silas-scottw';

  const getItems = function(){
    return fetch(`${BASE_URL}/items`);
  };

  const createItem = function(name){
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


  return {
    getItems,
    createItem,
  };
})();