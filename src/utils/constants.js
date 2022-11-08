export const numberOfMoviesOnScreen = () => {
    // [number of shown movies, number of 'show more' movies]
    if (document.documentElement.clientWidth >= 1280) {
        return [12, 4]
    } else if (document.documentElement.clientWidth >= 768) {
        return [8, 2]
    } else if (document.documentElement.clientWidth >= 320) {
        return [5, 2]
    }
}