const reviewFormHandler = async (event) => {
  event.preventDefault();

  const rating = document.querySelector('input[name="rate"]:checked').value
  const reviewText = document.querySelector('#review-text').value

  if (rating && reviewText) {
    const response = await fetch('/api/reviews', {
      method: 'POST',
      body: JSON.stringify({ rating, reviewText }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('#review')
  .addEventListener('submit', reviewFormHandler);
