const apikey = "c538ffb4";

let searchValue;
let allMovies;
let cards;
let arrayMovies;

let urlApiMovies;

async function getMovies() {
  if (searchValue == undefined) {
    urlApiMovies = `http://www.omdbapi.com/?s=action&apikey=${apikey}`;
    try {
      let response = await fetch(urlApiMovies);
      let data = await response.json();

      allMovies = data;

      arrayMovies = allMovies.Search;

      cards = addCards(arrayMovies);

      paintCards();
    } catch (error) {
      console.log(error);
    }
  } else {
    urlApiMovies = `http://www.omdbapi.com/?s=${searchValue}&apikey=${apikey}`;
    try {
      let response = await fetch(urlApiMovies);
      let data = await response.json();

      allMovies = data;

      arrayMovies = allMovies.Search;

      cards = addCards(arrayMovies);

      paintCards();
    } catch (error) {
      console.log(error);
    }
  }
}

getMovies();

//cards

const cardsContainer = document.getElementById("cardsCont");

const noResults = document.getElementById("no-results");

function addCards(moviesCompositor) {
  let moviesCards = "";
  if (moviesCompositor.length != 0) {
    for (const mov of moviesCompositor) {
      moviesCards += `
        <div class="card">
          <a href="./pages/details.html?id=${mov.imdbID}" class="btn"><img class="card-img-top" src="${mov.Poster}" alt="${mov.Title}" /></a>

          <div class="card-body">
            <h5 class="card-title">${mov.Title}</h5>

            <div class="cardFooter">
              <p>${mov.Year}</p>

              <a href="./pages/details.html?id=${mov.imdbID}" class="btn">View More...</a>
            </div>
          </div>
        </div>
    `;
    }
    noResults.innerHTML = ``;
  } else {
    noResults.innerHTML = `
    <div class="no-results">
      <h2 class="special-elite-regular">There's nothing to show here! Try another word or check your spelling</h2>
      <img src="./assets/img/error.jpg" alt="error">
    </div>
    `;
  }
  return moviesCards;
}

function paintCards() {
  cardsContainer.innerHTML = cards;
}

//search filter
const srchInput = document.getElementById("search");

function checkBxFilter(list, movies) {
  let inputFilter = [];

  for (const e of movies) {
    if (e.Title.toLowerCase().includes(list)) {
      inputFilter.push(e);
    }
  }
  return inputFilter;
}

srchInput.addEventListener("keyup", () => {
  searchValue = srchInput.value.toLowerCase();
  getMovies();
  cards = addCards(checkBxFilter(searchValue, arrayMovies));
  paintCards();
});

//input button
const inputButton = document.getElementById("form-search-bttn");

function filtrInptCrdsBttn() {
  searchValue = srchInput.value.toLowerCase();
  getMovies();
  cards = addCards(checkBxFilter(searchValue, arrayMovies));
  paintCards();
}

inputButton.addEventListener("click", () => {
  filtrInptCrdsBttn();
});
