//////////////////////////////////> AXIOS
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application.json;charset=utf-8',
  },
  params: {
    'api_key': API_KEY,
  }
})


//////////////////////////////////> CAROUSEL HORIZONTAL CARTELERA
let rowMoviesList = document.querySelectorAll('.row-movies');

rowMoviesList.forEach(function(rowMovies) {
  rowMovies.addEventListener('scroll', function() {
    if (rowMovies.scrollLeft >= (rowMovies.scrollWidth - rowMovies.clientWidth)) {
      rowMovies.classList.add('no-fade');
    } else {
      rowMovies.classList.remove('no-fade');
    }
  });
});

//////////////////////////////////> MOVIES CATEGORIES
async function moviesForCategories() {
  const { data } = await api( 'genre/movie/list' );
  const categories = data.genres;
  console.log( categories );

  categories.forEach(( category ) => {
    const searchCategories = document.querySelector( '.section-search-categories .search-categories' )
    const containCategory = document.createElement( 'div' );
    containCategory.classList.add( 'category-container' )
    const categoryName = category.name;
    const idCategory = category.id;
    
    containCategory.innerHTML = `
      <h3 id=${ idCategory } class="category-title">${ categoryName }</h3>
    `;
    searchCategories.appendChild( containCategory );
  })
}


//////////////////////////////////> MOVIES TOP RATED
async function moviesTopRated() {
  const { data } = await api( 'movie/now_playing' );
  const movies = data.results;

  movies.forEach(( movie ) => {
    const topRatedSection = document.querySelector( '.section-trending .row-movies' )
    const containMovie = document.createElement( 'div' );
    containMovie.classList.add( 'contain-movie' );
    const movieImg = ('https://image.tmdb.org/t/p/w300' + movie.poster_path );
    const titleMovie = movie.title;
    const voteAverage = movie.vote_average

    containMovie.innerHTML = `
      <img src=${ movieImg } class="movie-img">
      <div class="container name-valor-movie d-flex align-items-center">
        <div class="row flex-column">
          <div class="col-lg-12">
            <span class="cartel-name">${ titleMovie }</span>
          </div>
          <div class="col-lg-12">
            <div class="valoration">
              <img src="./src/images/ico-star.png">
              <span class="puntuacion-number">${ voteAverage }</span>
            </div>
          </div>
        </div>
      </div>
    `
    topRatedSection.appendChild( containMovie );
  })
}


//////////////////////////////////> MOVIES POPULARES
async function moviesPopular() {
  const { data } = await api( 'movie/popular' );
  const movies = data.results;
  console.log({ data, movies });

  movies.forEach(( movie ) => {
    const popularSection = document.querySelector( '.section-popular .row-movies' )
    const containMovie = document.createElement( 'div' );
    containMovie.classList.add( 'contain-movie' );
    const movieImg = ('https://image.tmdb.org/t/p/w300' + movie.poster_path );
    const titleMovie = movie.title;
    const voteAverage = movie.vote_average

    containMovie.innerHTML = `
      <img src=${ movieImg } class="movie-img">
      <div class="container name-valor-movie d-flex align-items-center">
        <div class="row flex-column">
          <div class="col-lg-12">
            <span class="cartel-name">${ titleMovie }</span>
          </div>
          <div class="col-lg-12">
            <div class="valoration">
              <img src="./src/images/ico-star.png">
              <span class="puntuacion-number">${ voteAverage }</span>
            </div>
          </div>
        </div>
      </div>
    `
    popularSection.appendChild( containMovie );
  })
}


moviesForCategories();
moviesTopRated();
moviesPopular();