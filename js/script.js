        // Function to fetch movie data from the TMDb API
        function fetchMovieData() {
            const apiKey = 'e908bbdb5d9b44388b79e31b7e375014';
            const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Call a function to display the movie data
                    displayMovieData(data.results);
                })
                .catch(error => {
                    console.error('Error fetching movie data:', error);
                });
        }

        // Function to display movie data on the webpage
        function displayMovieData(movies) {
            const movieDataContainer = document.getElementById('movie-grid');
            // Clear previous content
            movieDataContainer.innerHTML = '';

            // Loop through each movie in the data
            movies.forEach(movie => {
                // Create a link to the dedicated movie page with the movie ID as a parameter
                const movieLink = `movie.html?id=${movie.id}`;

                // Create elements to display movie information
                const movieElement = document.createElement('div');
                movieElement.classList.add('movie-card');
                movieElement.innerHTML = `
                    <a href="${movieLink}">
                        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="banner">
                        <div class="movie-details">
                            <h2 class="title">${movie.title}</h2>
                            <p class="genre">Genres: ${movie.genre_ids.join(', ')}</p>
                            <p class="description">${movie.overview}</p>
                            <button class="btn">More Details</button>
                        </div>
                    </a>
                `;
                // Append the movie element to the container
                movieDataContainer.appendChild(movieElement);
            });
        }

        // Call the fetchMovieData function when the page loads
        window.addEventListener('load', fetchMovieData);

        // Toggle menu function
        function toggleMenu() {
            var menu = document.getElementById('menu');
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        }
         // Start Landing Section
        const landingBanners = [
            "/img/fallout-banner.jpg",
            "/img/Dune  Part Two.jpg",
            "/img/The Fall Guy-baneer.avif"
        ];
        let currentBannerIndex = 0;
        const landingBanner = document.querySelector('.landing');

        function changeBanner() {
            currentBannerIndex = (currentBannerIndex + 1) % landingBanners.length;
            landingBanner.style.backgroundImage = `url("${landingBanners[currentBannerIndex]}")`;
        }

        // Change banner every 5 seconds
        setInterval(changeBanner, 5000);
        // End Landing Section