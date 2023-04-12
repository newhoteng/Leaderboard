import { apiBaseUrl, gameId } from './api.js';

const scoresUl = document.querySelector('ul.recent-scores');

export default async () => {
  try {
    const response = await fetch(`${apiBaseUrl}games/${gameId}/scores/`);
    const data = await response.json();
    scoresUl.innerHTML = '';
    // change it up
    data.result
      .sort((a, b) => (b.score - a.score))
      .forEach((playerRecord) => {
        scoresUl.innerHTML += `
          <li>${playerRecord.user}: ${playerRecord.score}</li>
        `;
      });
  } catch (error) {
    throw new Error('Data could not be fetched');
  }
};