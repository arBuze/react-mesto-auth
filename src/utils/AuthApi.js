class AuthApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  register(email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password,
        email
      })
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
  }

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password,
        email
      })
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.token){
          localStorage.setItem('jwt', data.token);
          return data;
        }
      })
      .catch(err => console.log(err))
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    })
    .then((response) => {
      return response.json();
    })
    .then(data => data)
    .catch(err => console.log(err));
  }
}

export const auth = new AuthApi({
  baseUrl: 'https://auth.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'
  }
});
