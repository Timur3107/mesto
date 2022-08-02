export class Card {
  constructor(data, templateElement, handleCardClick) {
    this._name = data.name
    this._link = data.link
    this._templateElement = templateElement
    this._handleCardClick = handleCardClick
  }

  _listenActions(element) {
    element.querySelector(".element__like-button").addEventListener("click", this._likeCard)
    element.querySelector(".element__delete").addEventListener("click", this._deleteCard)
    element.querySelector(".element__image").addEventListener("click", this._handleCardClick)
  }

  createCard() {
    this._card = this._templateElement.cloneNode(true)
    this._newCardTitle = this._card.querySelector(".element__title")
    this._newCardImage = this._card.querySelector(".element__image")
    this._newCardTitle.textContent = this._name
    this._newCardImage.alt = this._name
    this._newCardImage.src = this._link
    this._listenActions(this._card)
    return this._card
  }

  // лайк карточки
  _likeCard(evt) {
    evt.target.classList.toggle('element__like-button_active')
  }

  // удаление карточки
  _deleteCard(evt) {
    evt.target.closest(".element").remove();
  }
}
