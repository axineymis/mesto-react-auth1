
const bigImg = document.querySelector('.popup__big-img');
const bigPictureCapt = document.querySelector('.popup__caption');
const popupTypeImg = document.querySelector('.popup_type_img');

export default class Card {
    constructor(data, selector, openPopupHandler) {
        this._name = data.name;
        this._link = data.link;
        this._selector = selector;
        this._openPopupHandler = openPopupHandler;
    } 

    _getTemplate() {
        const cardElement = document
        .querySelector(this._selector)
        .content
        .querySelector('.element')
        .cloneNode(true);
        
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        const elemPhoto = this._element.querySelector('.element__photo');
        elemPhoto.src = this._link;
        elemPhoto.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
        this._setEventListeners();
        return this._element;
    }
    _handlePopupPictureClick = () => {
        bigImg.src = this._link;
        bigImg.alt = this._name;
        bigPictureCapt.textContent = this._name;
        this._openPopupHandler(popupTypeImg);
      }
      _setEventListeners() {
        const elemPic = this._element.querySelector(".element__photo");
        elemPic.addEventListener('click', this._handlePopupPictureClick);
    
        const elemDeleteBtn = this._element.querySelector(".element__delete-btn");
        elemDeleteBtn.addEventListener('click', this._handleDelete);
    
        const elemLikeBtn = this._element.querySelector(".element__like-button");
        elemLikeBtn.addEventListener('click', this._handleLike);
      }
      _handleDelete = () => {
        this._element.remove();
      }

      _handleLike = () => {
        const elemLikeBtn = this._element.querySelector(".element__like-button");
        elemLikeBtn.classList.toggle("element__like-button_active");
      }
   
}
// export default Card;