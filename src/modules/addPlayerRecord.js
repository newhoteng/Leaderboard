import { apiBaseUrl, gameId } from './api.js';

export default async (user, score) => {
  const response = await fetch(`${apiBaseUrl}games/${gameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      'user': user,
      'score': score,
    }),
  });

  const message = await response.json();
  alert(`${message.result}`);
};