
class Card {

  // constructor({data, owner}, userId, selector, {handleCardClick, handleLike, handleDelete}, cardId) {
  //   this._name = data.name;
  //   this._link = data.link;
  //   this._likes = data.likes;
  //   // this._owner = data.owner;
  //   this._selector = selector;
  //   this._cardId = cardId;
  //   this._userId = userId;
  //   this._ownerId = owner._id;

  //   // Обработчики
  //   this._handleCardClick = handleCardClick;
  //   this._handleLike = handleLike;
  //   this._handleDelete = handleDelete;
  // }

    constructor(data, selector, handleCardClick, userInfo, handleDeleteBtnClick) {
        this._name = data.name;
        this._link = data.link;
        this._id = data.id;
        this._likes = data.likes || [];
        this._selector = selector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteBtnClick = handleDeleteBtnClick;
        this._deletable = data.owner && data.owner._id === userInfo._userId;
        this._element = document
            .querySelector(this._selector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        this._delBtn = this._element.querySelector(".element__delete-btn");
    } 

    // _getTemplate() {
    //     const cardElement = document
    //     .querySelector(this._selector)
    //     .content
    //     .querySelector('.element')
    //     .cloneNode(true);
        
    //     return cardElement;
    // }

    generateCard() {
        // this._element = this._getTemplate();
        this._elemPhoto = this._element.querySelector('.element__photo');
        this._elemPhoto.src = this._link;
        this._elemPhoto.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector(".element__like_counter").textContent = this._likes.length;
        this.showDeleteBtn();
        this._setEventListeners();
        return this._element;
    }

    showDeleteBtn() {
      if (this._deletable) {
        this._delBtn.style.display = 'block';
      }
    }

      _setEventListeners() {
        this._elemPhoto.addEventListener('click', () => {
          this._handleCardClick(this._name, this._link);
        });
        // this._elemDeleteBtn = this._element.querySelector(".element__delete-btn");
        // this._elemDeleteBtn.addEventListener('click', this._handleDelete);
        this._elemLikeBtn = this._element.querySelector(".element__like-button");
        this._elemLikeBtn.addEventListener('click', this._handleLike);
        this._delBtn.addEventListener('click', () => { this._handleDeleteBtnClick(this) });
      }

      
      getId() {
        return this._id;
      }

      _handleDelete = () => {
        this._element.remove();
      }

      _handleLike = () => {
        this._elemLikeBtn.classList.toggle("element__like-button_active");
      }
}
export default Card;