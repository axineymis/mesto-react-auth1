export default class Api {
    constructor({ address, token }) {
      this._address = address;
      this._token = token;
    }
  
    // получить карточки
    getCards() {
      return fetch(`${this._address}/cards`, {
        headers: {
          authorization: this._token
        }
      }).then(this._handleResponse)
    }
  
    // добавление новой карточки на сервер
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
      }).then(this._handleResponse)
    }

    // удалить карточку
    deleteCard(_id) {
      return fetch(`${this._address}/cards/${_id}`, {
      method: 'DELETE',
      headers: { 
        authorization: this._token,
      }
      }).then(this._handleResponse)
    }

// поставить лайк
    likeCard(_id) {
      return fetch(`${this._address}/cards/likes/${_id}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
      }
      }).then(this._handleResponse)
    }

    // удалить лайк
    unlikeCard(_id) {
      return fetch(`${this._address}/cards/likes/${_id}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
        }
      }).then(this._handleResponse)
    }

    // получить данные пользователя
    getUserInfo() {
      return fetch(`${this._address}/users/me`, {
        headers: {
          authorization: this._token
        }
      }).then(this._handleResponse)
    }

    // отредактировать данные пользователя
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
      }).then(this._handleResponse)
    }
    
    // отредактировать аватар пользователя
    editUserAvatar(avatar) {
      return fetch(`${this._address}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: avatar
        })
      }).then(this._handleResponse)
    }

    _handleResponse(response) {
      if (response.ok) {
        return response.json(); 
      }
      return Promise.reject(`Возникла ошибка: ${response.status}`); 
    }
  }
  











//   const api = new Api({
//     baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
//     headers: {
//       authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
//       'Content-Type': 'application/json'
//     }
//   });