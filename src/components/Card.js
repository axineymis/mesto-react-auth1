
class Card {

    constructor(data, selector, handleCardClick, userInfo, handleDeleteBtnClick) {
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
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
        this._elemLikeBtn = this._element.querySelector(".element__like-button");
        this._elemLikeBtn.addEventListener('click', this._handleLike);
        this._delBtn.addEventListener('click', () => { this._handleDeleteBtnClick(this) });
      }

      deleteCard = () => {
        this._element.remove();
      }

      _handleLike = () => {
        this._elemLikeBtn.classList.toggle("element__like-button_active");
      }
      getId() {
        return this._id;
      }
}
export default Card;