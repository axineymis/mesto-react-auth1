class Api {

  constructor({ address, token }) {
    this._address = address;
    this._token = token;
  }
 
  getCards() {
    return fetch(`${this._address}/cards`, {
      headers: {
        authorization: this._token
      }
    }).then(this._handleResponse)
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
    }).then(this._handleResponse)
  }

  deleteCard(_id) {
    return fetch(`${this._address}/cards/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
      .then(this._handleResponse)
  }

  likeCard(id) {
    return fetch(`${this._address}/cards/${id}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._token
      },
    }).then(this._handleResponse);
  }

  unlikeCard(id) {
    return fetch(`${this._address}/cards/${id}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._token
      },
    }).then(this._handleResponse);
  }

  getUserInfo() {
    console.log(`${this._address}/users/me`)
    return fetch(`${this._address}/users/me`, {
      headers: {
        authorization: this._token
      }
    }).then(this._handleResponse)
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
    }).then(this._handleResponse)
  }

  
  editUserAvatar(avatar) {
    console.log(`${this._address}/users/me/avatar`)
    return fetch(`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar,
      })
    }).then(this._handleResponse)
  }
 

  _handleResponse = (response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка ${response.status}`);
  }
}
const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-35/',
  token: '8bcdd003-6ade-478d-94ee-ebb5cd09f115'
});

export default api;
//     constructor({ address, token }) {
//       this._address = address;
//       this._token = token;
//     }
  
//     // получить карточки
//     getCards() {
//       return fetch(`${this._address}/cards`, {
//         headers: {
//           authorization: this._token
//         }
//       }).then(this._handleResponse)
//     }
  
//     // добавление новой карточки на сервер
//     addCards({ name, link }) {
//       return fetch(`${this._address}/cards`, {
//         method: 'POST',
//         headers: {
//           authorization: this._token,
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify({
//           name: name,
//           link: link
//         })
//       }).then(this._handleResponse)
//     }

//     // удалить карточку
//     deleteCard(_id) {
//       return fetch(`${this._address}/cards/${_id}`, {
//       method: 'DELETE',
//       headers: { 
//         authorization: this._token,
//       }
//       }).then(this._handleResponse)
//     }

// // поставить лайк
//     likeCard(_id) {
//       return fetch(`${this._address}/cards/likes/${_id}`, {
//       method: 'PUT',
//       headers: {
//         authorization: this._token,
//       }
//       }).then(this._handleResponse)
//     }

//     // удалить лайк
//     unlikeCard(_id) {
//       return fetch(`${this._address}/cards/likes/${_id}`, {
//         method: 'DELETE',
//         headers: {
//           authorization: this._token,
//         }
//       }).then(this._handleResponse)
//     }

//     // получить данные пользователя
//     getUserInfo() {
     
//       return fetch(`${this._address}/users/me`, {
//         headers: {
//           authorization: this._token
//         }
//       }).then(this._handleResponse)
      
//     }

//     // отредактировать данные пользователя
//     patchUserInfo({ name, about }) {
//       return fetch(`${this._address}/users/me`, {
//         method: 'PATCH',
//         headers: {
//           authorization: this._token,
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           name: name,
//           about: about
//         })
//       }).then(this._handleResponse)
//     }
    
//     // отредактировать аватар пользователя
//     editUserAvatar(avatar) {
//       return fetch(`${this._address}/users/me/avatar`, {
//         method: 'PATCH',
//         headers: {
//           authorization: this._token,
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           avatar: avatar
//         })
//       }).then(this._handleResponse)
//     }

//     _handleResponse(response) {
//       if (response.ok) {
//         return response.json(); 
//       }
//       return Promise.reject(`Возникла ошибка: ${response.status}`); 
//     }
//   }

//   const api = new Api({
//     adress: 'https://mesto.nomoreparties.co/v1/cohort-35',
//     token: '8bcdd003-6ade-478d-94ee-ebb5cd09f115'
//   });

//   export default api;