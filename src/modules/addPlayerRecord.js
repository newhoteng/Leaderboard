import { apiBaseUrl, gameId } from './api.js';

const messageP = document.querySelector('p.success-message');

export default async (user, score) => {
  const response = await fetch(`${apiBaseUrl}games/${gameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  });

  const message = await response.json();
  messageP.innerHTML = message.result;
};