const slide = document.querySelector(".slide");
const slideList = slide.querySelectorAll(".card");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let x = 0; // left 값
let idx = 0; // 현재 index 값

function activeIdx() {
  const activeCard = slideList[idx];

  for (var i = 0; i < slideList.length; i++) {
    slideList[i].classList.remove("active");
  }
  activeCard.classList.add("active");
}

function prev() {
  idx -= 1;
  if (idx < 0) {
    idx = slideList.length - 1;
    x = x - 600 * (slideList.length - 1);
    slide.style.left = x + "px";
    activeIdx();
  } else {
    x += 600;
    slide.style.left = x + "px";
    activeIdx();
  }
}

function next() {
  idx += 1;
  if (idx < slideList.length) {
    x -= 600;
    slide.style.left = x + "px";
    activeIdx();
  } else {
    idx = 0;
    x = 0;
    slide.style.left = x + "px";
    activeIdx();
  }
}

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft") {
    prev();
  } else if (e.key === "ArrowRight") {
    next();
  }
});
