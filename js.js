const numberOfFilms = +prompt('скольок фильмов вы уже посмотрели', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('какой последний фильм ты смотрел', ''),
        b = prompt('на сколько вы его оцениваете', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

}

if (personalMovieDB.count < 10) {
    console.log('посмотрел мало');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('классический зриетль');
} else if (personalMovieDB.count >= 30) {
    console.log('вы киноман');
} else {
    console.log('error');
}

console.log(personalMovieDB);

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'green'
    },
    makeTest: function () {
        console.log('Test');
    }
}
options.makeTest()

const {
    border,
    bg
} = options.colors

console.log(Object.keys(options).length)

// console.log(options.colors)

// delete options.name

// console.log(options);
let counter = 0
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`свойство ${i} имеет значение ${options[key][i]}`)
            counter++
        }
    } else {
        console.log(`свойство ${key} имеет значение ${options[key]}`)
        counter++
    }
}
console.log(counter)
const arr = [1, 2, 3, 10, 5]
arr.sort()
console.log(arr)

arr.pop() //delete last object
arr.push(10) // add object  last 

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (let value of arr) {
    console.log(value)
} //'of' work only in array

arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} inside an array ${arr} `)
})

const str = prompt('', '')
const products = str.split('', '')
console.log(products.join('; '))
