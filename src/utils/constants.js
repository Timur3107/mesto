// попапы
export const popupAddCard = document.querySelector(".popup_add-card");
export const popupEditProfile = document.querySelector(".popup_edit-profile");

// настройки для FormValidator
export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
};

// формы в profile
export const formElementProfile = popupEditProfile.querySelector(".popup__form");
export const formElementCard = popupAddCard.querySelector(".popup__form");

// поля ввода в profile
export const nameInput = formElementProfile.querySelector(".popup__input-name");
export const jobInput = formElementProfile.querySelector(".popup__input-job");

// профиль
export const profile = document.querySelector(".profile");

// кнопки открытия попапов
export const buttonProfileEdit = profile.querySelector(".profile__edit-button");
export const buttonAddCard = document.querySelector(".profile__add-button");

// template карточки
export const cardTemplate = document.querySelector("#template-element").content;
