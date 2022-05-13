window.onload = () => {
  // 네비게이션 - 트리거 메뉴
  const toggleBtn = document.querySelector("#trigger");
  const menu = document.querySelector(".navbar-menu");
  const icons = document.querySelector(".navbar_logo");

  toggleBtn.addEventListener("click", () => {
    if (toggleBtn.classList.toggle("active")) {
      menu.classList.toggle("active");
      icons.classList.toggle("active");
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  });

  // 설치 도움말 - 아코디언
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.display = "none";
        panel.style.maxHeight = null;
      } else {
        panel.style.display = "block";
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
};
