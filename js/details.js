const apikey = "c538ffb4";

const querySort = location.search;
const parameters = new URLSearchParams(querySort);
const movieId = parameters.get("id");

let filterMovie;

let searchValue = movieId;

let urlApiMovies = `http://www.omdbapi.com/?i=${searchValue}&apikey=${apikey}`;

async function getMovie() {
  try {
    let response = await fetch(urlApiMovies);
    let data = await response.json();

    filterMovie = data;

    createMovieDetails(filterMovie);
  } catch (error) {
    console.log(error);
  }
}

getMovie();

//cards

const cardsContainer = document.getElementById("details");
const movieHeadTitle = document.getElementById("title");

function createMovieDetails(movie) {
  movieHeadTitle.innerHTML = `${movie.Title}`;
  cardsContainer.innerHTML = `
         <div class="card card-img">
          <img
            class="img-details"
            src="${movie.Poster}"
            alt="${movie.Title}"
          />
        </div>

        <div class="card card-body card-body-details">
          <h2 class="card-title">${movie.Title}</h2>

          <p>Rated: ${movie.Rated}</p>
          <p>Released: ${movie.Released}</p>
          <p>Duration: ${movie.Runtime}</p>
          <p>Gender: ${movie.Genre}</p>
          <p>Director: ${movie.Director}</p>
          <p>Writer: ${movie.Writer}</p>
          <p>Actors: ${movie.Actors}</p>
          <p>Awards: ${movie.Awards}</p>

          <p>Overview</p>

          <p class="card-text-extended">${movie.Plot}</p>
        </div>
  `;
}
