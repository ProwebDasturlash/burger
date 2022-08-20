const timer = document.querySelector(".header__timer"),
  timerExtra = document.querySelector(".header__timer-extra"),
  mainProductInfo = document.querySelectorAll(".main__product-info"),
  view = document.querySelector(".view"),
  viewImg = document.querySelector(".view img"),
  viewClose = document.querySelector(".view__close");

lvl();

function lvl(el) {
  setTimeout(() => {
    if (timerExtra.innerHTML >= 0 && timerExtra.innerHTML < 50) {
      timerExtra.innerHTML++;
      lvl(20);
    } else if (timerExtra.innerHTML >= 50 && timerExtra.innerHTML < 70) {
      timerExtra.innerHTML++;
      lvl(60);
    } else if (timerExtra.innerHTML >= 70 && timerExtra.innerHTML < 95) {
      timerExtra.innerHTML++;
      lvl(100);
    } else if (timerExtra.innerHTML >= 95 && timerExtra.innerHTML < 100) {
      timerExtra.innerHTML++;
      lvl(180);
    }
  }, el);
}

for (let i = 0; i < mainProductInfo.length; i++) {
  const element = mainProductInfo[i];

  element.addEventListener("dblclick", function (item) {
    img(this);
  });
}

function img(item) {
  view.classList.add("active");
  let parent = item.closest(".main__product-preview"),
    img = parent.querySelector("img"),
    imgSrc = img.getAttribute("src");
  viewImg.setAttribute("src", imgSrc);
}

viewClose.addEventListener("click", () => {
  view.classList.remove("active");
});
