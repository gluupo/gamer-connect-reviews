const searchFormHandler = async (event) => {
  event.preventDefault();

  const search = new URLSearchParams({ q: document.querySelector('#search').value.replace(/ /g, '+') });
  console.log(search)

  if (search) {
    document.location.replace('/game/search/?' + search);
  } else {
    alert('Please enter a search query');
  }
};



document
  .querySelector('.search')
  .addEventListener('submit', searchFormHandler);

