import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._image = this._popup.querySelector('.popup__image')
    this._title = this._popup.querySelector('.popup__title-picture')
  }

  open (card) {
    super.open()
    this._image.alt = card.alt
    this._image.src = card.src
    this._title.textContent = card.alt
  }
}
