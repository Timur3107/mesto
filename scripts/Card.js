import { viewImage } from "./index.js"
export class Card {
  constructor(data, templateElement) {
    this._name = data.name
    this._link = data.link
    this._templateElement = templateElement
    this._viewImage = viewImage
  }

  _listenActions(element) {
    element.querySelector(".element__like-button").addEventListener("click", this._likeCard)
    element.querySelector(".element__delete").addEventListener("click", this._deleteCard)
    element.querySelector(".element__image").addEventListener("click", this._viewImage)
  }

  createCard() {
    this._card = this._templateElement.cloneNode(true)
    const newCardTitle = this._card.querySelector(".element__title")
    const newCardImage = this._card.querySelector(".element__image")
    newCardTitle.textContent = this._name
    newCardImage.alt = this._name
    newCardImage.src = this._link
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

  // открытие попапа (3)
  _viewImage(evt) {
    imagePopup.alt = evt.target.alt
    imagePopup.src = evt.target.src
    titlePicturePopup.textContent = evt.target.alt
    openPopup(popupViewPicture)
  }
}
