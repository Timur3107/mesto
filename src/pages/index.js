import "./../pages/index.css"
import { Card } from "../components/Card.js"
import { FormValidator } from "../components/FormValidator.js"
import Section from "../components/Section.js"
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import UserInfo from "../components/UserInfo.js"
import Api from "../components/Api.js"
import PopupWithConfirmation from "../components/PopupWithConfirmation.js"
import {
  formElementProfile,
  settings,
  formElementCard,
  buttonProfileEdit,
  buttonAddCard,
  cardTemplate,
  formElementAvatar,
  buttonAvatarEdit
} from "../utils/constants.js"

let initialCardsSection

// api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-47',
  headers: {
    authorization: 'edca42ab-b867-4886-8abe-7c55631044f1',
    'Content-Type': 'application/json'
  }
});

// отрисовка initialCards и initialUserInfo
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cards, info]) => {
    userInfo.setUserInfo(info)
    initialCardsSection = new Section({
      items: cards.reverse(),
      renderer: createCard
    }, ".elements")
    initialCardsSection.renderItems()
  })
  .catch((error) => {
    console.log(error)
  })

// userInfo
const userInfo = new UserInfo({
  profileName: ".profile__name",
  profileAbout: ".profile__about",
  profileAvatar: ".profile__avatar"
})


// -----------------------------------Popups-------------------------------------
// popup editProfile
const popupEditProfileNew = new PopupWithForm(".popup_edit-profile", {
  callbackSubmitForm: ({ name, about }) => {
    popupEditProfileNew.renderLoading(true)
    api.setUserInfo(name, about)
      .then((data) => {
        userInfo.setUserInfo(data)
        popupEditProfileNew.close()
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        popupEditProfileNew.renderLoading(false)
      })
  }
})
popupEditProfileNew.setEventListeners()

// popup addNewCard
const popupAddCardNew = new PopupWithForm(".popup_add-card", {
  callbackSubmitForm: (data) => {
    popupAddCardNew.renderLoading(true)
    api.addCard(data)
      .then((data) => {
        initialCardsSection.addItem(createCard(data))
        popupAddCardNew.close()
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        popupAddCardNew.renderLoading(false)
      })
  }
})
popupAddCardNew.setEventListeners()

// popup editAvatar
const popupEditAvatarNew = new PopupWithForm(".popup_edit-avatar", {
  callbackSubmitForm: (data) => {
    popupEditAvatarNew.renderLoading(true)
    api.setAvatar(data.avatar)
      .then((res) => {
        userInfo.setUserInfo(res)
        popupEditAvatarNew.close()
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        popupEditAvatarNew.renderLoading(false)
      })
  }
})
popupEditAvatarNew.setEventListeners()

// popup deleteCard
const popupDeleteCardNew = new PopupWithConfirmation(".popup_delete-card", {
  callbackSubmitForm: (id) => {
    popupDeleteCardNew.renderLoading(true)
    api.deleteCard(id)
      .then(() => {
        popupDeleteCardNew.deleteCard()
        popupDeleteCardNew.close()
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        popupDeleteCardNew.renderLoading(false)
      })
  }
})
popupDeleteCardNew.setEventListeners()

// popup checkPicture
const popupViewPictureNew = new PopupWithImage(".popup_picture")
popupViewPictureNew.setEventListeners()


// ----------------------------open Popups---------------------------------------
// открытие попапа editAvatar
buttonAvatarEdit.addEventListener("click", () => {
  formValidators['popup__form-avatar'].resetValidation()
  popupEditAvatarNew.open()
})

// открытие попапа profileEdit
buttonProfileEdit.addEventListener("click", () => {
  const dataUser = userInfo.getUserInfo()
  popupEditProfileNew.setInputValues(dataUser)
  formValidators['popup__form-profile'].resetValidation()
  popupEditProfileNew.open()
})

// открытие попапа addCard
buttonAddCard.addEventListener("click", () => {
  formValidators['popup__form-card'].resetValidation()
  popupAddCardNew.open()
})

// открытие попапа viewImage
function viewImage(image) {
  popupViewPictureNew.open(image)
}

// открытие попапа deleteCard
function handleDeleteCardClick(card, id) {
  popupDeleteCardNew.open(card, id)
}

// ----------------------- валидация форм ----------------------
const formValidators = {}
const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(settings, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(settings);

// -------------------------------function--------------------------------
// функция создания карточки
function createCard(data) {
  const cardElement = new Card(data, cardTemplate, viewImage, handleDeleteCardClick, userInfo.myId, {
    handleLikeCardClick: () => { handleLikeCardClick(cardElement, data) }
  })
  const newCard = cardElement.createCard()
  cardElement.setLikes(data)
  return newCard
}

// функция для лайка карточки
function handleLikeCardClick(card, newCard) {
  const likeApi = card.isLiked() ? api.deleteLike(newCard._id) : api.addLike(newCard._id)
  likeApi
    .then((res) => {
      card.setLikes(res)
    })
    .catch((error) => {
      console.log(error)
    })
}
