const URL = 'api.movies.vlrtyan.nomoredomains.icu';
const getResponseData = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}
const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`
}

export const getUser = () => {
    return fetch(`${URL}/me`, {
        headers: {
            'Authorization': getToken()
        }
    })
        .then(getResponseData);
}

export const editUser = ({ name, email }) => {
    return fetch(`${URL}/me`, {
        method: 'PATCH',
        headers: {
            'Authorization': getToken(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(getResponseData);
}

export const getSavedMovies = () => {
    return fetch(`${URL}/movies`, {
        headers: {
            'Authorization': getToken()
        }
    })
        .then(getResponseData);
}

export const saveMovie = (data) => {
    return fetch(`${URL}/movies`, {
        method: 'POST',
        headers: {
            'Authorization': getToken(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            country: data.counrtry, 
            director: data.director, 
            duration: data.duration, 
            year: data.year, 
            description: data.description, 
            image: data.image.url, 
            trailerLink: data.trailerLink, 
            nameRU: data.nameRU, 
            nameEN: data.nameEN,
            thumbnail: data.thumbnail, 
            movieId: data.id
        })
    })
        .then(getResponseData);
}

export const deleteMovie = (data) => {
    return fetch(`${URL}/movies/${data._id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': getToken(),
            'Content-Type': 'application/json'
        },
    })
        .then(getResponseData);
}