import { apiBaseUrl, gameId } from './api.js';

const scoresUl = document.querySelector('ul.recent-scores');

export default async () => {
  try {
    const response = await fetch(`${apiBaseUrl}games/${gameId}/scores/`);
    const data = await response.json();
    scoresUl.innerHTML = '';
    data.result
      .sort((a, b) => (b.score - a.score))
      .forEach((playerRecord, index) => {
        scoresUl.innerHTML += `
          <li>
            <span class="position">${index + 1}</span>
            <span class="name"> ${playerRecord.user}</span>
            <span class="score">${playerRecord.score}</span>
          </li>
        `;
      });
  } catch (error) {
    throw new Error('Data could not be fetched');
  }
};