class NewApi {
    constructor(options) {
        this._url = options.url;
    }
    _error(res) {
        if (res.ok) {
            return res.json();
        } else return Promise.reject(`Ошибка: ${res.status}`);

    }
    signup({ email, password }) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }).then(this._error)
    }

    signin({ email, password }) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }).then(this._error)
    }

    getTokenEmail({ token }) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(this._error)
    }


}

export const newapi = new NewApi({
    url: 'https://auth.nomoreparties.co'
});