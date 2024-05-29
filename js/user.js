const apikey = "c538ffb4";

let urlApiMovies = `https://www.omdbapi.com/?s=clown&apikey=${apikey}`;
let filterFavorites;
let arrayFavorites;
let cards;

async function getFavorites() {
  try {
    let response = await fetch(urlApiMovies);
    let data = await response.json();

    filterFavorites = data;

    arrayFavorites = filterFavorites.Search;

    cards = createFavorites(arrayFavorites);

    paintCards();
  } catch (error) {
    console.log(error);
  }
}

getFavorites();

//cards

const cardsContainer = document.getElementById("cardsCont");

function createFavorites(moviesCompositor) {
  let moviesCards = "";
  for (const mov of moviesCompositor) {
    moviesCards += `
        <div class="card">
          <a href="./pages/details.html?id=${mov.imdbID}" class="btn"><img class="card-img-top" src="${mov.Poster}" alt="${mov.Title}" /></a>

          <div class="card-body">
            <h5 class="card-title">${mov.Title}</h5>

            <div class="cardFooter">
              <p>${mov.Year}</p>

              <a href="./details.html?id=${mov.imdbID}" class="btn">View More...</a>
            </div>
          </div>
        </div>
    `;
  }
  return moviesCards;
}

function paintCards() {
  cardsContainer.innerHTML = cards;
}
