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
          }).then(response => {
              if (response.ok) {
                  return response.json()
              }
              return Promise.reject(`Ошибка ${response.status}`)
          })
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
          }).then(response => {
              if (response.ok) {
                  return response.json()
              }
              return Promise.reject(`Ошибка ${response.status}`)
          })
    }

    // удалить карточку
    deleteCard(cardId) {
      return fetch(`${this._address}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      }
    }).then(response => {
      if (response.ok) {
          return response.json()
      }
      return Promise.reject(`Ошибка ${response.status}`)
  })
}

// поставить лайк
    likeCard(cardId) {
    return fetch(`${this._address}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
  }
      }).then(response => {
      if (response.ok) {
          return response.json()
      }
      return Promise.reject(`Ошибка ${response.status}`)
  })
  
    }

    // удалить лайк
    unlikeCard(cardId) {
      return fetch(`${this._address}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
    }
        }).then(response => {
        if (response.ok) {
            return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
    })
    
      }

    // получить данные пользователя
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
      }).then(response => {
        if (response.ok) {
            return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
    })
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
      }).then(response => {
        if (response.ok) {
            return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
    })
    }

    // _handleResponse(response) {
    //   if (response.ok) {
    //     return response.json(); 
    //   }
    //   return Promise.reject(`Возникла ошибка: ${response.status}`); 
    // }

    // _errorHandler(err) {
    //   console.log(err);
    // }

  }
  











//   const api = new Api({
//     baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
//     headers: {
//       authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
//       'Content-Type': 'application/json'
//     }
//   });