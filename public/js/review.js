const reviewFormHandler = async (event) => {
  event.preventDefault();

  const rating = document.querySelector('input[name="rate"]:checked').value;
  const review = document.querySelector('#review-input-text').value;
  const userId = document.querySelector('#user_id').value;
  const gameId = document.querySelector('#game_id').value;


  if (rating && review) {
    const response = await fetch('/api/reviews', {
      method: 'POST',
      body: JSON.stringify({ rating: rating, review: review, user_id: userId, game_id: gameId }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)
    if (response.ok) {
      document.location.reload();
      document.querySelector('#review-input-text').value = '';
      rating = document.querySelector('input[name="rate"]:checked').removeAttribute('checked');
    } else {
      alert('Please Login');
    }
  }
};

document
  .querySelector('#review')
  .addEventListener('submit', reviewFormHandler);
