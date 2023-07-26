// Sections
const $ = ( id ) => document.querySelector( id );
const headerSection = $('#header');
const mainPortada = $('#mainPortada');
const searchCategoriesSection = $('#searchCategories');
const trendingPreviewSection = $('#trendingPreview');
const popularPreviewSection = $('#popularPreview');
const genericSection = $('#genericList .row-categories');
const movieDetailSection = $('#movieDetail');

// Lists & Containers
const searchForm = $('#searchForm');
const trendingMoviesPreviewList = $('.section-trending .row-movies');
const popularMoviesPreviewList = $('.section-popular .row-movies');
const categoriesMoviesPreviewList = $( '.section-general-movies .row-categories' )
const categoriesPreviewList = $('.section-search-categories .search-categories');
const movieDetailCategoriesList = $('#movieDetail .categories-list');
const relatedMoviesContainer = $('.relatedMovies-scrollContainer');

// Elements
const headerTitle = $('.header-title');
const arrowBtn = $('.header-arrow');
const headerCategoryTitle = $('.header-title--categoryView');

const searchFormInput = $('#searchForm input');
const searchFormBtn = $('#searchBtn');

const trendingBtn = $('.trendingPreview-btn');

const movieDetailTitle = $('.movieDetail-title');
const movieDetailDescription = $('.movieDetail-description');
const movieDetailScore = $('.movieDetail-score');