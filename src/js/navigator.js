btnMoreTrendingMovies.addEventListener('click', () => {
  location.hash = '#trends=';
  trendsPage( 'trending' );
})

btnMorePopularMovies.addEventListener('click', () => {
  location.hash = '#trends=';
  trendsPage( 'popular' );
})

searchFormBtn.addEventListener('click', () => {
  location.hash = '#search=' + searchFormInput.value;
})

window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

function navigator() {
  if (location.hash.startsWith('#trends')) {
    trendsPage();
  } else if (location.hash.startsWith('#search=')) {
    searchPage();
  } else if (location.hash.startsWith('#movie=')) {
    movieDetailPage();
  } else if (location.hash.startsWith('#category=')) {
    categoriesPage();
  } else {
    homePage()
  }

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function trendsPage( selectedTab ) {
  console.log('TRENDS!!!');

  mainPortada.classList.add('inactive');
  searchCategoriesSection.classList.add('inactive');
  trendingPreviewSection.classList.add('inactive');
  popularPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');

  if( selectedTab === 'trending' ) {
    getMoviesTrending();
    headerCategoryTitle.innerHTML = 'Trending';
  } else if( selectedTab === 'popular' ) {
    getMoviesPopular();
    headerCategoryTitle.innerHTML = 'Popular';
  }
}
function searchPage() {
  console.log('search!!!');

  mainPortada.classList.add('inactive')
  searchCategoriesSection.classList.remove('inactive')
  trendingPreviewSection.classList.add('inactive');
  popularPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');
  headerCategoryTitle.classList.add('inactive');

  //> [ '#search', 'platzi' ]
  const [_, query] = location.hash.split('=');
  getMoviesBySearch(query);
}

function homePage() {
  console.log('HOME!!!');

  mainPortada.classList.remove('inactive')
  searchCategoriesSection.classList.remove('inactive')
  trendingPreviewSection.classList.remove('inactive');
  popularPreviewSection.classList.remove('inactive');
  genericSection.classList.add('inactive');
  movieDetailSection.classList.add('inactive');

  getMoviesTrendingPreview();
  getMoviesPopularPreview();
}

function movieDetailPage() {
  console.log('movie!!!');
}

function categoriesPage() {
  console.log('categories!!!');

  mainPortada.classList.add('inactive');
  searchCategoriesSection.classList.add('inactive')
  trendingPreviewSection.classList.add('inactive');
  popularPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');

  //> [ '#category', 'id-name' ]
  const [_, categoryData] = location.hash.split('=');
  const [categoryId, categoryName] = categoryData.split('-');

  headerCategoryTitle.innerHTML = categoryName;

  getMoviesByCategory(categoryId);
}

function movieDetailPage() {
  console.log('movie!!!');

  mainPortada.classList.add('inactive');
  searchCategoriesSection.classList.add('inactive');
  headerCategoryTitle.classList.add('inactive');
  trendingPreviewSection.classList.add('inactive');
  popularPreviewSection.classList.add('inactive');
  genericSection.classList.add('inactive');
  movieDetailSection.classList.remove('inactive');
}