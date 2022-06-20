// error active
const showInputError = (formElement, inputElement, errorMessage, validClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validClass.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validClass.errorClass);
};

// error inactive
const hideInputError = (formElement, inputElement, validClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validClass.inputErrorClass);
  errorElement.classList.remove(validClass.errorClass);
  errorElement.textContent = '';
};

// проверка на валидность формы
const checkInputValidity = (formElement, inputElement, validClass) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage,validClass);
  } else {
    hideInputError(formElement, inputElement,validClass);
  }
};

const setEventListeners = (formElement, validClass) => {
  const inputList = Array.from(formElement.querySelectorAll(validClass.inputSelector));
  const buttonElement = formElement.querySelector(validClass.submitButtonSelector)
  toggleButtonState(inputList,buttonElement, validClass)
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, validClass);
      toggleButtonState(inputList, buttonElement, validClass)
    });
  });
};

const enableValidation = (validClass) => {
  const formList = Array.from(document.querySelectorAll(validClass.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, validClass)
  });
};

function hasInvalidInput(inputList){
  return inputList.some(function (inputElement){
   return !inputElement.validity.valid
  })
}

function toggleButtonState (inputList,buttonElement,validClass){
  if(hasInvalidInput(inputList)){
    buttonElement.classList.add(validClass.inactiveButtonClass)
  }else{
    buttonElement.classList.remove(validClass.inactiveButtonClass)
  }
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
});
