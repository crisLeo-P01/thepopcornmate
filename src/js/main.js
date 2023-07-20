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

  categoriesPreviewList.innerHTML = '';

  categories.forEach(( category ) => {
    const containCategory = document.createElement( 'div' );
    containCategory.classList.add( 'category-container' );

    const categoryTitle = document.createElement( 'h3' );
    categoryTitle.classList.add( 'category-title' );
    categoryTitle.setAttribute( 'id', 'id' + category.id );
    categoryTitle.addEventListener( 'click', () => {
      location.hash = `#category=${ category.id } - ${ category.name }`;
    });

    const categoryTitleText = document.createTextNode( category.name );

    categoryTitle.appendChild( categoryTitleText );
    containCategory.appendChild( categoryTitle );
    categoriesPreviewList.appendChild( containCategory );
  })
}


//////////////////////////////////> MOVIES TRENDING

async function getMoviesTrending() {
  const { data } = await api( 'movie/now_playing' );
  const movies = data.results;

  trendingMoviesPreviewList.innerHTML = '';
  movies.forEach(( movie ) => {
    const containMovie = document.createElement( 'div' );
    containMovie.classList.add( 'contain-movie' );
    const movieImg = ('https://image.tmdb.org/t/p/w300' + movie.poster_path );
    const titleMovie = movie.title;
    const voteAverage = movie.vote_average;

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
    trendingMoviesPreviewList.appendChild( containMovie );
  })
}


//////////////////////////////////> MOVIES POPULARS


async function getMoviesPopular() {
  const { data } = await api( 'movie/popular' );
  const moviesPopular = data.results;
  console.log({ data, moviesPopular });

  popularMoviesPreviewList.innerHTML = '';
  moviesPopular.forEach(( movie ) => {
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
    popularMoviesPreviewList.appendChild( containMovie );
  })
}


moviesForCategories();
getMoviesTrending();
getMoviesPopular();