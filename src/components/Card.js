export class Card {
  constructor(data, templateElement, handleCardClick) {
    this._name = data.name
    this._link = data.link
    this._templateElement = templateElement
    this._handleCardClick = handleCardClick
  }

  _listenActions() {
    this._buttonLike.addEventListener("click",(evt)=>{this._likeCard(evt)})
    this._buttonDelete.addEventListener("click",(evt)=>{this._deleteCard(evt)})
    this._imageCard.addEventListener("click",()=>{this._handleCardClick({ name:this._name, link:this._link })})
  }

  createCard() {
    this._card = this._templateElement.querySelector('.element').cloneNode(true)
    this._newCardTitle = this._card.querySelector(".element__title")
    this._newCardImage = this._card.querySelector(".element__image")
    this._newCardTitle.textContent = this._name
    this._newCardImage.alt = this._name
    this._newCardImage.src = this._link
    this._buttonLike = this._card.querySelector(".element__like-button")
    this._buttonDelete = this._card.querySelector(".element__delete")
    this._imageCard = this._card.querySelector(".element__image")
    this._imageCard.alt = this._name
    this._imageCard.src = this._link
    this._listenActions()
    return this._card
  }

  // лайк карточки
  _likeCard() {
    this._buttonLike.classList.toggle('element__like-button_active')
  }

  // удаление карточки
  _deleteCard() {
    this._card.remove()
  }
}
