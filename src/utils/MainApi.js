const URL = 'https://api.movies.vlrtyan.nomoredomains.icu';

const getResponseData = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}
const getToken = () => {
    return 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzVmNzFkNjkyNDMwODA4N2U3Y2JjOTAiLCJpYXQiOjE2Njc4OTE0NDIsImV4cCI6MTY2ODQ5NjI0Mn0.S7pGXIKlLJOpaIiuneqfsjz6wxgGQ8tWUqneatM2eaE'
    // return `Bearer ${localStorage.getItem('token')}`
}

export const getUser = () => {
    return fetch(`${URL}/users/me`, {
        headers: {
            'Authorization': getToken()
        }
    })
        .then(getResponseData);
}

export const editUser = ({ name, email }) => {
    return fetch(`${URL}/users/me`, {
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
            country: data.country, 
            director: data.director, 
            duration: data.duration, 
            year: data.year, 
            description: data.description, 
            image: `https://api.nomoreparties.co${data.image.url}`, 
            trailerLink: data.trailerLink, 
            nameRU: data.nameRU, 
            nameEN: data.nameEN,
            thumbnail: `https://api.nomoreparties.co${data.image.url}`, 
            movieId: data.id.toString()
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