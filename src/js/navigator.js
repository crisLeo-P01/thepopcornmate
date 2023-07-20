btnMoreTrendingMovies.addEventListener( 'click', () => {
    location.hash = '#search=';
})

btnMorePopularMovies.addEventListener( 'click', () => {
    location.hash = '#category=';
})

searchForm.addEventListener( 'click', () => {
    location.hash = '#search=';
})

window.addEventListener( 'DOMContentLoaded', navigator, false )
window.addEventListener( 'hashchange', navigator, false )

function navigator() {
    if( location.hash.startsWith( '#trends' )) {
        trendsPage();
    } else if( location.hash.startsWith( '#search=' )) {
        searchPage();
    } else if( location.hash.startsWith( '#movie=' )) {
        movieDetailPage();
    } else if( location.hash.startsWith( '#category=' )) {
        categoriesPage();
    } else {
        homePage()
    }
    
    location.hash
}

function trendsPage() {
    console.log( 'TRENDS!!!' );
}
function searchPage() {
    console.log( 'search!!!' );

    mainPortada.classList.add( 'inactive' )
    searchCategoriesSection.classList.remove( 'inactive' )
    trendingPreviewSection.classList.add( 'inactive' );
    popularPreviewSection.classList.add( 'inactive' );
    genericSection.classList.remove( 'inactive' );
    movieDetailSection.classList.add( 'inactive' );
}
function homePage() {
    console.log( 'HOME!!!' );

    mainPortada.classList.remove( 'inactive' )
    searchCategoriesSection.classList.remove( 'inactive' )
    trendingPreviewSection.classList.remove( 'inactive' );
    popularPreviewSection.classList.remove( 'inactive' );
    genericSection.classList.add( 'inactive' );
    movieDetailSection.classList.add( 'inactive' );

    getMoviesTrending();
    getMoviesPopular();
}
function movieDetailPage() {
    console.log( 'movie!!!' );
}
function categoriesPage() {
    console.log( 'categories!!!' );

    mainPortada.classList.add( 'inactive' );
    searchCategoriesSection.classList.add( 'inactive' )
    trendingPreviewSection.classList.add( 'inactive' );
    popularPreviewSection.classList.add( 'inactive' );
    genericSection.classList.remove( 'inactive' );
    movieDetailSection.classList.add( 'inactive' );
}
function movieDetailPage() {
    console.log( 'movie!!!' );

    mainPortada.classList.add( 'inactive' );
    searchCategoriesSection.classList.add( 'inactive' )
    trendingPreviewSection.classList.add( 'inactive' );
    popularPreviewSection.classList.add( 'inactive' );
    genericSection.classList.add( 'inactive' );
    movieDetailSection.classList.remove( 'inactive' );
}