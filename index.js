document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('button');
  const quoteField = document.querySelector('.card__text--advice');
  const quoteId = document.querySelector('.card__title--id');

  async function fetchAdvice() {
    quoteField.textContent = 'Loading...';
    try {
      const response = await fetch('https://api.adviceslip.com/advice', {
        cache: 'no-store',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      quoteField.textContent = data.slip.advice;
      quoteId.textContent = data.slip.id;
    } catch (error) {
      console.error('Fetch error:', error);
      quoteField.textContent =
        'Failed to fetch advice. Please try again later.';
    }
  }

  button.addEventListener('click', fetchAdvice);

  // Fetch advice on page load
  fetchAdvice();
});
