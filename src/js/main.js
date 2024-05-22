
//////////////////////////////////> AXIOS
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application.json;charset=utf-8',
  },
  params: {
    'api_key': process.env.API_KEY,
  }
})

//////////////////////////////////> UTILS
function createMovies(movies, container) {
  container.innerHTML = '';

  movies.forEach((movie) => {
    const containMovie = document.createElement('div');
    containMovie.classList.add('contain-movie', 'placeholder-loading');
    containMovie.addEventListener('click', () => {
      location.hash = '#movie=' + movie.id;
    })

    const movieImg = ('https://image.tmdb.org/t/p/w300' + movie.poster_path);
    const titleMovie = movie.title;
    const voteAverage = movie.vote_average.toFixed(1);

    containMovie.innerHTML = `
    <img src=${movieImg} class="movie-img">
    <div class="container name-valor-movie d-flex align-items-center">
      <div class="row flex-column">
        <div class="col-lg-12">
          <span class="cartel-name">${titleMovie}</span>
        </div>
        <div class="col-lg-12">
          <div class="valoration">
            <img src="./src/images/ico-star.png">
            <span class="puntuacion-number">${voteAverage}</span>
          </div>
        </div>
      </div>
    </div>
  `
    container.appendChild(containMovie);
  })
}

function createCategories(categories, container) {
  container.innerHTML = '';

  categories.forEach((category) => {
    const containCategory = document.createElement('div');
    containCategory.classList.add('category-container');

    const categoryTitle = document.createElement('h3');
    categoryTitle.classList.add('category-title');
    categoryTitle.setAttribute('id', 'id' + category.id);
    categoryTitle.addEventListener('click', () => {
      location.hash = `#category=${category.id}-${category.name}`;
    });

    const categoryTitleText = document.createTextNode(category.name);

    categoryTitle.appendChild(categoryTitleText);
    containCategory.appendChild(categoryTitle);
    container.appendChild(containCategory);
  })
}

function genericMovies(movies, container) {
  container.innerHTML = '';

  movies.forEach((movie) => {
    const containMovie = document.createElement('div');
    containMovie.classList.add('contain-movie-general');
    const movieImg = ('https://image.tmdb.org/t/p/w300' + movie.poster_path);
    const titleMovie = movie.title;
    const voteAverage = movie.vote_average.toFixed(1);

    containMovie.innerHTML = `
      <img src=${movieImg} class="movie-img">
      <div class="container name-valor-movie d-flex align-items-center">
        <div class="row flex-column">
          <div class="col-lg-12">
            <span class="cartel-name">${titleMovie}</span>
          </div>
          <div class="col-lg-12">
            <div class="valoration">
              <img src="./src/images/ico-star.png">
              <span class="puntuacion-number">${voteAverage}</span>
            </div>
          </div>
        </div>
      </div>
    `
    container.appendChild(containMovie);
  })
}


//////////////////////////////////> MOVIES CATEGORIES

async function moviesForCategories() {
  const { data } = await api('genre/movie/list');
  const categories = data.genres;
  console.log(categories);

  createCategories(categories, categoriesPreviewList);
}


//////////////////////////////////> MOVIES TRENDING PREVIEW

async function getMoviesTrendingPreview() {
  const { data } = await api('movie/now_playing');
  const movies = data.results;

  createMovies(movies, trendingMoviesPreviewList);
}


//////////////////////////////////> MOVIES TRENDING

async function getMoviesTrending() {
  const { data } = await api('movie/now_playing');
  const movies = data.results;

  genericMovies(movies, genericSection);
}


//////////////////////////////////> MOVIES POPULARS PREVIEW

async function getMoviesPopularPreview() {
  const { data } = await api('movie/popular');
  const moviesPopular = data.results;
  console.log({ data, moviesPopular });

  createMovies(moviesPopular, popularMoviesPreviewList);
}


//////////////////////////////////> MOVIES POPULARS

async function getMoviesPopular() {
  const { data } = await api('movie/popular');
  const moviesPopular = data.results;
  console.log({ data, moviesPopular });

  genericMovies(moviesPopular, genericSection);
}


//////////////////////////////////> MOVIES BY CATEGORY

async function getMoviesByCategory(id) {
  const { data } = await api('discover/movie', {
    params: {
      with_genres: id,
    }
  });
  const movies = data.results;

  genericMovies(movies, categoriesMoviesPreviewList)
}


//////////////////////////////////> MOVIES BY SEARCH

async function getMoviesBySearch(query) {
  const { data } = await api('search/movie', {
    params: {
      query,
    }
  });
  const movies = data.results;

  genericMovies(movies, categoriesMoviesPreviewList);
}


//////////////////////////////////> MOVIES BY ID

async function getMovieById(id) {

  const { data: movie } = await api('movie/' + id);

  const movieBackdropImg = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
  movieBackground.style.background = `
    linear-gradient(0deg, rgba(19, 14, 24, 0.45) 0%, rgba(19, 14, 24, 0.45) 100%),
    url(${movieBackdropImg})
  `
  movieBackground.style.backgroundRepeat = 'no-repeat';
  movieBackground.style.backgroundSize = 'cover';

  const movieDetailBack = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
  console.log(movieDetailBack);

  // Eliminamos la imagen anterior si existe
  const previousImg = containerMovieImg.querySelector('.movie-img-tapa');
  if (previousImg) {
    containerMovieImg.removeChild(previousImg);
  }

  const movieDetailImg = document.createElement('img');

  movieDetailImg.classList.add('movie-img-tapa');
  movieDetailImg.src = `${movieDetailBack}`

  containerMovieImg.appendChild(movieDetailImg);

  releaseTime.textContent = movie.release_date;
  runTime.textContent = movie.runtime + 'min';
  movieDetailTitle.textContent = movie.title;
  movieDetailDescription.textContent = movie.overview;
  movieDetailScore.textContent = movie.vote_average.toFixed(1);

  createCategories(movie.genres, movieDetailCategoriesList)

  getRelatedMoviesId(id);

}

async function getRelatedMoviesId(id) {
  const { data } = await api(`movie/${id}/recommendations`);
  const relatedMovies = data.results;

  createMovies(relatedMovies, relatedMoviesContainer)
}


moviesForCategories();
getMoviesTrendingPreview();
getMoviesPopularPreview();