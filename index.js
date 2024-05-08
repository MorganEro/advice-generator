const button = document.querySelector('.card__button'),
  quoteField = document.querySelector('.card__text--advice'),
  quoteId = document.querySelector('.card__title--id');

function fetchAdvice() {
  quoteField.textContent = 'Loading advice...';
  quoteId.textContent = '';

  fetch('https://api.adviceslip.com/advice')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      quoteField.textContent = data.slip.advice;
      quoteId.textContent = data.slip.id;
    })
    .catch(error => {
      quoteField.textContent = 'Failed to load advice.';
      console.error('Error:', error);
    });
}

window.onload = fetchAdvice;
button.addEventListener('click', fetchAdvice);
