 // Function to get URL parameter by name
 function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Function to fetch and display movie details based on ID from URL parameter
function fetchMovieDetails() {
    const movieId = getUrlParameter('id');
    if (movieId) {
        const apiKey = 'e908bbdb5d9b44388b79e31b7e375014';
        const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Update DOM elements with movie details
                document.getElementById('movie-title').textContent = data.title;
                document.getElementById('movie-poster').src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
                document.getElementById('movie-genres').textContent = 'Genres: ' + data.genres.map(genre => genre.name).join(', ');
                document.getElementById('movie-overview').textContent = data.overview;
            })
            .catch(error => {
                console.error('Error fetching movie details:', error);
            });
    }
}

// Call the fetchMovieDetails function when the page loads
window.addEventListener('load', fetchMovieDetails);

// Function to go back to the previous page
function goBack() {
    window.history.back();
}

// Toggle menu function
function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}