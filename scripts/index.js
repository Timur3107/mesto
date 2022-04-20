const popup = document.querySelector(".popup")
const popupButtonSave = popup.querySelector(".popup__saveButton")

const formElement = popup.querySelector(".popup__form");

const nameInput = formElement.querySelector(".popup__input-name");
const jobInput = formElement.querySelector(".popup__input-job");

const profile = document.querySelector(".profile")
const profileName = profile.querySelector(".profile__name")
const profileAbout = profile.querySelector(".profile__about")

const profileButtonEdit = profile.querySelector(".profile__editButton")
const popupButtonClose = popup.querySelector(".popup__closeButton")

// открытие попапа
function pressedEdit () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  popup.classList.add("popup_opened")
}

profileButtonEdit.addEventListener("click",pressedEdit)

// закрытие попапа
function pressedClosePopup () {
  popup.classList.remove("popup_opened")
}
popupButtonClose.addEventListener("click",pressedClosePopup)

// изменение form
function pressedSavePopup (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value
  profileAbout.textContent = jobInput.value
  pressedClosePopup()
}

formElement.addEventListener("submit",pressedSavePopup)
