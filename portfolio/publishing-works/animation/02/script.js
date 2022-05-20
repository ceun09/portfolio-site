const btn = document.querySelectorAll(".btns");
let loaderName = "";

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    const play = this.querySelector(".btns .play");
    const pause = this.querySelector(".btns .pause");
    loaderName = this.getAttribute("data-alt");

    if (this.querySelector(".play").classList.contains("active")) {
      document.getElementById(loaderName).classList.toggle("active");
      play.classList.remove("active");
      pause.classList.add("active");
    } else {
      document.getElementById(loaderName).classList.toggle("active");
      play.classList.add("active");
      pause.classList.remove("active");
    }
  });
}
