const popupBtn = document.getElementById('popup-btn');
const popup = document.getElementById('popup');

if (popupBtn && popup) {
  popupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
}