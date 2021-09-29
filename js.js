const numberOfFilms = +prompt('скольок фильмов вы уже посмотрели', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const a = prompt('какой последний фильм ты смотрел', ''),
    b = prompt('на сколько вы его оцениваете', ''),
    c = prompt('какой последний фильм ты смотрел', ''),
    d = prompt('на сколько вы его оцениваете', '');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
    