import './style.css';
import displayScores from './modules/displayScores.js';
import addPlayerRecord from './modules/addPlayerRecord';

displayScores();

const refreshButton = document.querySelector('button.refresh');
refreshButton.addEventListener('click', () => displayScores());

// Create new game
  // fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     name: 'Oware',
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // })
  // .then((response) => response.json())
  // .then((json) => console.log(json));

// const gameID = 


const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  addPlayerRecord(name, score);
  form.reset();
  displayScores();

  // fetch post request
})

// import './index.css';
// import addScore from './modules/addScore.js';
// import showScores from './modules/showScores.js';

// showScores();

// const refresh = document.querySelector('.refresh');
// refresh.addEventListener('click', () => showScores());

// const form = document.querySelector('.form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const name = document.querySelector('#name').value;
//   const score = document.querySelector('#input-score').value;
//   addScore(name, score);
//   form.reset();
// });