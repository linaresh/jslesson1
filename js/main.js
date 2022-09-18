const personalMovies = {
    counts: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {

        let numberOfFilms;

        do{
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        } while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));

        this.counts = numberOfFilms;
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
    
            let filmName;
            let filmRaiting;
    
            do {
                filmName = prompt('Один из последних посмотренный фильмов?', '').trim();
                filmRaiting = prompt("Рейтинг фильма?", '');
            }while(filmName === '' || filmName === null || filmName.length > 50 || filmRaiting === '' || filmRaiting === null);
    
            this.movies[filmName] = +filmRaiting;
        }
    },
    detectPersonalLevel: function() {
        if (personalMovies.counts < 10) { 
            console.log('Вы посмотрели довольно мало фильмов');
        } else if (personalMovies >= 10 && personalMovies <= 30) {
            console.log('Вы класический зритель');
        } else if (personalMovies > 30) {
            console.log('Вы киноман');
        } else 
        console.log('Error');
    },
    showMyBD: function(hidden){
        if (!hidden) {
            console.log(this);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {

            let like = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (like == '' || like == null) {
                i -= 1;
            } else {
                this.genres.push(like);
            }
        }
        this.genres.forEach((el, i) => console.log(`Любимый жанр #${i} - это ${el}`));
    },
    toggleVisibleMyBD: function() {
        if (this.private) {
            this.private = false; 
        } else {
            this.private = true;
        }
    }
};    

personalMovies.start();
personalMovies.detectPersonalLevel();
personalMovies.rememberMyFilms();

personalMovies.writeYourGenres();
console.log('1');
personalMovies.toggleVisibleMyBD();
personalMovies.showMyBD(personalMovies.private);
personalMovies.toggleVisibleMyBD();
console.log('2');
personalMovies.showMyBD(personalMovies.private);

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