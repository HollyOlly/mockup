const popupButton = document.querySelector('.popup-button');
const popupMenu = document.querySelector('.popup-menu');
const popupList = document.querySelector('.popup__list');

popupButton.addEventListener('click', showPopup);

function showPopup() {
    popupList.classList.toggle('hide-popup');
}

document.addEventListener('click', hidePopup);

function hidePopup(el) {
    let targetInside = popupMenu.contains(el.target);
    if (!targetInside) {
        popupList.classList.add('hide-popup');
    }
    else {
        return
    }
}


