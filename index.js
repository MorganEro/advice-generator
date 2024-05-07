const button = document.querySelector('.card__button'),
  quoteField = document.querySelector('.card__text'),
  quoteId = document.querySelector('.card__title--id');

window.onload = () => {
  quoteField.textContent = 'Loading advice...';
  quoteId.textContent = '';

  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      quoteField.textContent = data.slip.advice;
      quoteId.textContent = data.slip.id;
    })
    .catch(error => {
      quoteField.textContent = 'Failed to load advice.';
      console.error('Error:', error);
    });
};

button.addEventListener('click', () => {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      quoteField.textContent = data.slip.advice;
      quoteId.textContent = data.slip.id;
    });
});
