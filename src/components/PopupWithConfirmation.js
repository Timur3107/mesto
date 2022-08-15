import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup{
  constructor(popupSelector, {callbackSubmitForm}){
    super(popupSelector)
    this._callbackSubmitForm = callbackSubmitForm
    this._form = this._popup.querySelector(".popup__form")
    this._buttonSave = this._popup.querySelector(".popup__save-button")
  }

  open(card, id){
    super.open()
    this._card = card
    this._id = id
  }

  deleteCard(){
    this._card.remove()
  }

  setEventListeners(){
    super.setEventListeners()
    this._form.addEventListener("submit", (evt)=>{
      evt.preventDefault()
      this._callbackSubmitForm(this._id)
    })
  }

  renderLoading(isLoading){
    if(isLoading){
      this._buttonSave.textContent = "Удаление..."
    }else{
      this._buttonSave.textContent = "Да"
    }
  }
}
