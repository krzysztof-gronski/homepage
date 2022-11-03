const buttonPrev = document.querySelector(".js-buttonPrev");
const buttonNext = document.querySelector(".js-buttonNext");
const galleryItem = document.querySelector(".js-galleryItem");
let imgNumber = 1;

buttonPrev.addEventListener("click", () => {
  let textImgNumber = imgNumber < 2 ? "1" : --imgNumber;
  galleryItem.src = "https://volcars.pl/frontend/m1/p" + textImgNumber + ".jpg";
});

buttonNext.addEventListener("click", () => {
  let textImgNumber = imgNumber > 2 ? "3" : ++imgNumber;
  galleryItem.src = "https://volcars.pl/frontend/m1/p" + textImgNumber + ".jpg";
});




