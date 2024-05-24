const apikey = "c538ffb4";

let searchValue;
let allMovies;

let urlApiMovies = `http://www.omdbapi.com/?s=${searchValue}&apikey=${apikey}`;

async function getMovies() {
  if (searchValue == undefined) {
    urlApiMovies = `http://www.omdbapi.com/?s=action&apikey=${apikey}`;
    try {
      let response = await fetch(urlApiMovies);
      let data = await response.json();

      allMovies = data;
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      let response = await fetch(urlApiMovies);
      let data = await response.json();

      allMovies = data;
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
          <img class="card-img-top" src="${mov.Poster}" alt="${mov.Title}" />

          <div class="card-body">
            <h5 class="card-title">${mov.Title}</h5>

            <div class="cardFooter">
              <p>${mov.Year}</p>

              <a href="./pages/details.html?id=${mov.imdbID}" class="btn">View More...</a>
            </div>
          </div>
    `;
    }
    noResults.innerHTML = ``;
  }
}
