let movies = [];

let numberOfMovies = Number(prompt('How many movies do you want to rate?'));

for (let i = 0; i < numberOfMovies; i++) {
  let title = prompt('Enter movie title:');
  let rating = Number(prompt('Enter rating (1-5):'));

  let movie = {
    title: title,
    rating: rating,
  };

  movies.push(movie);
}

movies.sort(function (a, b) {
  return b.rating - a.rating;
});

let highestMovie = movies[0];

let result = '<h2>Movies</h2>';

for (let movie of movies) {
  result += '<p>' + movie.title + ' - Rating: ' + movie.rating + '</p>';
}

result += '<h2>Highest Rated Movie</h2>';
result +=
  '<p>' + highestMovie.title + ' - Rating: ' + highestMovie.rating + '</p>';

document.getElementById('result').innerHTML = result;
