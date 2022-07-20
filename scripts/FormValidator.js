export class FormValidator {
  constructor(setting, popupForm) {
    this._formSelector = setting.formSelector
    this._inputSelector = setting.inputSelector
    this._submitButtonSelector = setting.submitButtonSelector
    this._inactiveButtonClass = setting.inactiveButtonClass
    this._inputErrorClass = setting.inputErrorClass
    this._errorClass = setting.errorClass
    this._popupForm = popupForm
    this._inputList = Array.from(this._popupForm.querySelectorAll(this._inputSelector));
    this._buttonElement = this._popupForm.querySelector(this._submitButtonSelector)
  }

  // error active
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._popupForm.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  // error inactive
  _hideInputError(inputElement) {
    const errorElement = this._popupForm.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  // проверка на валидность формы
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _setEventListeners() {
    this._toggleButtonState()
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState()
      });
    });
  };

  enableValidation() {
    this._setEventListeners()
  };

  _hasInvalidInput(inputList) {
    return inputList.some(function (inputElement) {
      return !inputElement.validity.valid
    })
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._inactiveButtonClass)
      this._buttonElement.disabled = true
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass)
      this._buttonElement.disabled = false
    }
  }
}
