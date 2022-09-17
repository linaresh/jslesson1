 const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovies = {
        counts: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false
    }
let filmName = prompt("Один из последних посмотренный фильмов?", "");
let filmRaiting = prompt("Рейтинг фильма?");

personalMovies.movies[filmName] = +filmRaiting;

filmName = prompt("Один из последних посмотренный фильмов?", "");
filmRaiting = prompt("Рейтинг фильма?");

personalMovies.movies[filmName] = +filmRaiting;

    console.log(personalMovies);