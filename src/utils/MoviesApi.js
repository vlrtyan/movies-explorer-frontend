const URL = 'https://api.nomoreparties.co/beatfilm-movies';
const getResponseData = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export const getMovies = () => {
    return fetch(URL, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(getResponseData);
}