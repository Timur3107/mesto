import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, {callbackSubmitForm}) {
    super(popupSelector)
    this._callbackSubmitForm = callbackSubmitForm
    this._inputs = this._popup.querySelectorAll(".popup__input")
    this._form = this._popup.querySelector(".popup__form")
    this._buttonSave = this._popup.querySelector(".popup__save-button")
  }

  _getInputValues() {
    this._dataInputs = {}
    this._inputs.forEach((input) => {
      this._dataInputs[input.name] = input.value;
    });
    return this._dataInputs
  }

  setEventListeners(){
    super.setEventListeners()
    this._form.addEventListener("submit", (evt)=>{
      evt.preventDefault()
      this._callbackSubmitForm(this._getInputValues())
    })
  }

  close(){
    super.close()
    this._form.reset()
  }

  renderLoading(isLoading, textSaveButton){
    if(isLoading){
      this._buttonSave.textContent = "Сохранение..."
    }else{
      this._buttonSave.textContent = textSaveButton
    }
  }
}
