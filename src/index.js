import './style.css';

// Create new game
fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Oware',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


// const form = document.getElementById('form')

// form.addEventListener('submit', (e) => {
//   e.preventDefault()

//   const name = document.getElementById('name').value
//   const score = document.getElementById('score').value

//   // fetch post request
// })