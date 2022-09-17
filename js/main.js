const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovies = {
    counts: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
    let filmName;
    let filmRaiting;

for (let i = 0; i < numberOfFilms; i++) {

    do {
        filmName = prompt('Один из последних посмотренный фильмов?', '');
        filmRaiting = prompt("Рейтинг фильма?", '');
    }while(filmName === '' || filmName.length > 50 || filmRaiting === '');

    personalMovies.movies[filmName] = +filmRaiting;
}

    if (personalMovies.counts < 10) { 
        console.log('Вы посмотрели довольно мало фильмов');
    }
    if (personalMovies >= 10 && personalMovies <= 30) {
        console.log('Вы класический зритель');
    }
    if (personalMovies > 30) {
        console.log('Вы киноман');
    }

    console.log(personalMovies);


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