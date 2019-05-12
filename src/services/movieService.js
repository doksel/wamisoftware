// Здесь мы получаем данные (список фильмов) через API
// export const getMoviesListDb = () => {
//     return axios.get("http://localhost:3001/movie")
// }
// export const getMovieDb = (movieId) => {
//     return axios.get(`http://localhost:3001/movie/${movieId}`)
// }

const moviesList = [
        {
            movieId: 1,
            title: 'Fancy',
            url: 'https://www.youtube.com/embed/kOHB85vDuow?rel=0&autoplay=1&mute=1',
            image: 'https://i.ebayimg.com/images/g/0MAAAOSwShtcq~h2/s-l300.jpg'
        },
        {
            movieId: 2,
            title: 'Ariana Grande',
            url: 'https://www.youtube.com/embed/QYh6mYIJG2Y?autoplay=1',
            image: 'http://mp3lenta.net/uploads/posts/2019-01/154782000317923rzqied.jpg'
        },
        {
            movieId: 3,
            title: 'Lil Dicky',
            url: 'https://www.youtube.com/embed/pvuN_WvF1to?autoplay=1',
            image: 'https://muzonov.net/uploads/posts/2019-04/medium/1555845336_1555844479_1555844282_mini_92258203457dab98b5e2de0924837c00_1000x1000x1.jpg'
        },
        {
            movieId: 4,
            title: 'Offset',
            url: 'https://www.youtube.com/embed/mt2zvsvkKKo?autoplay=1',
            image: 'http://www.mykohan2music.xyz/wp-content/uploads/2019/04/Offset-Clout-Ft-Cardi-B1.jpg'
        },
        {
            movieId: 5,
            title: 'David Guetta',
            url: 'https://www.youtube.com/embed/ft4jcPSLJfY',
            image: 'http://mp3narezki.net/uploads/posts/2018-12/154627950417656utsjjp.jpg'
        },
        {
            movieId: 6,
            title: 'Lil Pump',
            url: 'https://www.youtube.com/embed/tLNOce4Y4uc',
            image: 'https://muzonov.net/uploads/posts/2018-10/medium/1540312291_1540308931_xxxtentacion-lil-pump-arms-around-you-feat_-maluma-swae-lee.jpg'
        },
        {
            movieId: 7,
            title: 'The Chainsmokers',
            url: 'https://www.youtube.com/embed/fKtY_37r1VI',
            image: 'https://muzonov.net/uploads/posts/2018-09/medium/1537295474_1537291655_mini_fukzwhtvkgq.jpg'
        },
        {
            movieId: 8,
            title: 'Loboda',
            url: 'https://www.youtube.com/embed/gs1JrhjUpnc',
            image: 'https://muzonov.net/uploads/posts/2018-06/medium/1528567297_a6wvf-dxjtg.jpg'
        },
        {
            movieId: 9,
            title: 'Solo',
            url: 'https://www.youtube.com/embed/8JnfIa84TnU',
            image: 'https://muzonov.net/uploads/posts/2018-05/medium/1526756505_syyaryj59u0.jpg'
        },
        {
            movieId: 10,
            title: 'Bebe Rexha',
            url: 'https://www.youtube.com/embed/LdH7aFjDzjI',
            image: 'https://muzonov.net/uploads/posts/2018-06/medium/1530187878_cover.jpg'
        }
    ];

export const getMoviesListDb = () => {
    return moviesList;
}

export const getMovieDb = (movieId) => {
    let movie = moviesList.find(currentValue => currentValue.movieId === +movieId);
    return movie;
}

export const getMovieSearchDb = (title) => {
    let movie = moviesList.find(currentValue => currentValue.title.toLowerCase() == title);
    return movie;
}