export default class Api {
    constructor({ address, token }) {
      this._address = address;
      this._token = token;
    }
  
    getCards() {
      return fetch(`${this._address}/cards`, {
        headers: {
          authorization: this._token
        }
          }).then(response => {
              if (response.ok) {
                  return response.json()
              }
              return Promise.reject(`Ошибка ${response.status}`)
          })
    }
  
    addCards({ name, link }) {
      return fetch(`${this._address}/cards`, {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          link: link
        })
          }).then(response => {
              if (response.ok) {
                  return response.json()
              }
              return Promise.reject(`Ошибка ${response.status}`)
          })
    }

    getUserInfo() {
      return fetch(`${this._address}/users/me`, {
        headers: {
          authorization: this._token
        }
      }).then(response => {
        if (response.ok) {
            return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
    })
    }

    patchUserInfo({ name, about }) {
      return fetch(`${this._address}/users/me`, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          about: about
        })
      }).then(response => {
        if (response.ok) {
            return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
    })
    }
  }
  











//   const api = new Api({
//     baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
//     headers: {
//       authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
//       'Content-Type': 'application/json'
//     }
//   });