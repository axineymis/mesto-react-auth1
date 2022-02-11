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
  
    // другие методы работы с API
  }
  
//   const api = new Api({
//     baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
//     headers: {
//       authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
//       'Content-Type': 'application/json'
//     }
//   });