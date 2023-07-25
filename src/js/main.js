
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

//////////////////////////////////> UTILS
function createMovies ( movies, container ) {
  container.innerHTML = '',
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
    container.appendChild( containMovie );
  })
}

function createCategories( categories, container ) {
  container.innerHTML = '';

  categories.forEach(( category ) => {
    const containCategory = document.createElement( 'div' );
    containCategory.classList.add( 'category-container' );
    
    const categoryTitle = document.createElement( 'h3' );
    categoryTitle.classList.add( 'category-title' );
    categoryTitle.setAttribute( 'id', 'id' + category.id );
    categoryTitle.addEventListener( 'click', () => {
      location.hash = `#category=${ category.id }-${ category.name }`;
    });
    
    const categoryTitleText = document.createTextNode( category.name );
    
    categoryTitle.appendChild( categoryTitleText );
    containCategory.appendChild( categoryTitle );
    container.appendChild( containCategory );
  })
}

function genericMovies( movies, container ) {
  container.innerHTML = '';

  movies.forEach(( movie ) => {
    const containMovie = document.createElement( 'div' );
    containMovie.classList.add( 'contain-movie-general' );
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
    container.appendChild( containMovie );
  })
}


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

  createCategories( categories, categoriesPreviewList );
}


//////////////////////////////////> MOVIES TRENDING

async function getMoviesTrending() {
  const { data } = await api( 'movie/now_playing' );
  const movies = data.results;

  createMovies( movies, trendingMoviesPreviewList );
}


//////////////////////////////////> MOVIES POPULARS

async function getMoviesPopular() {
  const { data } = await api( 'movie/popular' );
  const moviesPopular = data.results;
  console.log({ data, moviesPopular });

  createMovies( moviesPopular, popularMoviesPreviewList );
}

//////////////////////////////////> MOVIES BY CATEGORY

async function getMoviesByCategory( id ) {
  const { data } = await api( 'discover/movie', {
    params: {
      with_genres: id,
    }
  });
  const movies = data.results;
  
  genericMovies( movies, categoriesMoviesPreviewList )
}


//////////////////////////////////> MOVIES BY SEARCH

async function getMoviesBySearch( query) {
  const { data } = await api( 'search/movie', {
    params: {
      query,
    }
  });
  const movies = data.results;

  genericMovies( movies, categoriesMoviesPreviewList )
}


moviesForCategories();
getMoviesTrending();
getMoviesPopular();