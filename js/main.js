let numberOfFilms;

function start() {
    do{
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    } while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}

start();

const personalMovies = {
    counts: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};    

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        let filmName;
        let filmRaiting;

        do {
            filmName = prompt('Один из последних посмотренный фильмов?', '');
            filmRaiting = prompt("Рейтинг фильма?", '');
        }while(filmName === '' || filmName === null || filmName.length > 50 || filmRaiting === '' || filmRaiting === null);

        personalMovies.movies[filmName] = +filmRaiting;
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovies.counts < 10) { 
        console.log('Вы посмотрели довольно мало фильмов');
    } else if (personalMovies >= 10 && personalMovies <= 30) {
        console.log('Вы класический зритель');
    } else if (personalMovies > 30) {
        console.log('Вы киноман');
    } else 
    console.log('Error');
}

detectPersonalLevel();

function showMyBD(){
    if (!personalMovies.private) {
        console.log(personalMovies);
    }
}

showMyBD();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovies.genres.push(prompt(`Ваш любимый жанр под номером ${i + 1}`, ''));
    }
}

writeYourGenres();



// const length = 10;
// let line = '';
// for (let i = 1; i < length ; i++) {
    
//     for (let j = 1; j <= i; j++) {
//         line += '*';
//     } 
//     line += '\n';
// }
// console.log(line);
// first:
// for (let i = 0; i < 3 ; i++) {    
//     console.log(`first ${i}`);
//     for (let j = 0; j <= 3; j++) {
//         console.log(`second ${j}`);
//         for (let k = 0; k <= 3; k++) {
//             if (k === 1) {
//                 continue first;
//             }
//             console.log(`third ${k}`);
//         }
//     }    
// }