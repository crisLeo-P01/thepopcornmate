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
}
function homePage() {
    console.log( 'HOME!!!' );
}
function movieDetailPage() {
    console.log( 'movie!!!' );
}
function categoriesPage() {
    console.log( 'categories!!!' );
}
function movieDetailPage() {
    console.log( 'movie!!!' );
}