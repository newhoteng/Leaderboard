import './style.css';
import displayScores from './modules/displayScores.js';
import addPlayerRecord from './modules/addPlayerRecord.js';

displayScores();

const refreshButton = document.querySelector('button.refresh');
refreshButton.addEventListener('click', () => displayScores());

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  addPlayerRecord(name, score);
  form.reset();
  displayScores();
});
