// попапы
export const popupAddCard = document.querySelector(".popup_add-card");
export const popupEditProfile = document.querySelector(".popup_edit-profile");
export const popupEditAvatar = document.querySelector(".popup_edit-avatar")

// настройки для FormValidator
export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
};

// export const initialCards = [
//   {
//     name: 'Эльбрус',
//     link: 'https://alpinizzm.ru/wp-content/uploads/2017/10/6c6e9e0205b2a8f116f1fe625ea5c63a-1024x682.jpg'
//   },
//   {
//     name: 'Чегет',
//     link: 'https://images.unsplash.com/photo-1577978728453-3d444d6f96da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
//   },
//   {
//     name: 'ГЛЦ Абзаково',
//     link: 'https://chelreglib.ru/media/files/kray/tourism/abzakovo2.jpg'
//   },
//   {
//     name: 'ГЛЦ Озеро Банное',
//     link: 'https://static-cdn4.vigbo.tech/u104096/103275/blog/5825163/5309256/section/d09909a6dbbbbe0267d11291e4c71724.jpg'
//   },
//   {
//     name: 'ГЛЦ Мраткино',
//     link: 'https://s10.stc.all.kpcdn.net/best/ufa/newyear2015/images/1e33bc33-1192-4926-8a38-4532968b9123___0.jpg'
//   },
//   {
//     name: 'Зирган Тау',
//     link: 'https://travelask.ru/system/images/files/000/231/323/wysiwyg/64765582.jpg?1489020131'
//   }
// ];

// формы попапов
export const formElementProfile = popupEditProfile.querySelector(".popup__form");
export const formElementCard = popupAddCard.querySelector(".popup__form");
export const formElementAvatar = popupEditAvatar.querySelector(".popup__form")

// профиль
export const profile = document.querySelector(".profile");

// кнопки открытия попапов
export const buttonProfileEdit = profile.querySelector(".profile__edit-button");
export const buttonAddCard = document.querySelector(".profile__add-button");
export const buttonAvatarEdit = document.querySelector(".profile__edit-avatar-button")

// template карточки
export const cardTemplate = document.querySelector("#template-element").content;
