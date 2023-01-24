{

  const buttonPrev = document.querySelector(".js-buttonPrev");
  const buttonNext = document.querySelector(".js-buttonNext");
  let imgNumber = 1;

  buttonPrev.addEventListener("click", () => {
    changeImage("1");
  });

  buttonNext.addEventListener("click", () => {
    changeImage("3");
  });

  function changeImage(extremeNumber) {
    const galleryItem = document.querySelector(".js-galleryItem");
    let textImgNumber;
    if (extremeNumber === "1") {
      textImgNumber = imgNumber < 2 ? extremeNumber : --imgNumber;
    }
    else {
      textImgNumber = imgNumber > 2 ? extremeNumber : ++imgNumber;
    }

    galleryItem.src = "./../img/p" + textImgNumber + ".jpg";
  }

}





