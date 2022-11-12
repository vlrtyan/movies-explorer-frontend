const URL = 'https://api.movies.vlrtyan.nomoredomains.icu';

export const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const getResponseData = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export const register = (name, email, password) => {
    return fetch(`${URL}/signup`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({
            name, email, password
        })
    })
        .then(getResponseData)
};

export const authorize = (email, password) => {
    return fetch(`${URL}/signin`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({
            email, password
        })
    })
        .then(getResponseData)
};
export const checkToken = (token) => {
    return fetch(`${URL}/users/me`, {
        method: 'GET',
        headers: {
            ...HEADERS,
            'Authorization': `Bearer ${token}`,
        }
    })
        .then(getResponseData)
}

