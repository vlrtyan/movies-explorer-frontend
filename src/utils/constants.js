export const getNumberOfMoviesOnScreen = () => {
    // [number of shown movies, number of 'show more' movies]
    if (window.innerWidth >= 1280) {
        return [12, 4]
    } else if (window.innerWidth >= 768) {
        return [8, 2]
    } else if (window.innerWidth >= 320) {
        return [5, 2]
    }
}