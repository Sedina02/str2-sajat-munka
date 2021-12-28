'use strict';

// let serverData = [];

// const startFetch = async (url = '') => {
//     const response = await fetch(url);
//     const users = await response.json();
//     return users;
// };

// serverData = await startFetch('http://localhost:3000/users');

// console.log(serverData);

const url = 'https://jsonplaceholder.typicode.com/todos/1';

const printHTML = (json) => {
    console.log(json[55].emailAddress);
  };
  
// const startFetch = (url = "") => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((json) => printHTML(json));
//       .catch(err => console.error(err))
// };

const startFetch = (url = "") => {
  axios.get(url)
  .then((response) => response.data)
  .then((json) => printHTML(json))
  .catch(err => console.error(err))
}

startFetch(url);
    //get post patch delete