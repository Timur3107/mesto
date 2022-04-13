let popup = document.querySelector(".popup")
let popupButtonCave = popup.querySelector(".popup__saveButton")

let formElement = popup.querySelector(".popup__form");

let nameInput = formElement.querySelector(".popup__input-name");
let jobInput = formElement.querySelector(".popup__input-job");

let profile = document.querySelector(".profile")
let profileGeneral = profile.querySelector(".profile__general")

let profileButtonEdit = profile.querySelector(".profile__editButton")
let popupButtonClose = popup.querySelector(".popup__closeButton")

// открытие попапа
function pressedEdit () {
  nameInput.value = "Жак-Ив Кусто";
  jobInput.value = "Исследователь океана";
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
  profileGeneral.innerHTML = `
  <div class="profile__container">
  <h1 class="profile__name">${nameInput.value}</h1>
  <button class="profile__editButton"></button>
  </div>
  <p class="profile__about">${jobInput.value}</p>`
  popup.classList.remove("popup_opened")
}

popupButtonCave.addEventListener("click",pressedSavePopup)

