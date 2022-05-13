window.onload = function () {
  const qn = document.querySelectorAll(".qn");

  function qnaToggle() {
    const ans = this.nextElementSibling;
    if (ans.style.maxHeight) {
      ans.style.maxHeight = null;
      this.classList.toggle("active");
    } else {
      ans.style.maxHeight = ans.scrollHeight + "px";
      this.classList.toggle("active");
    }
  }

  qn.forEach((qn) => qn.addEventListener("click", qnaToggle));
};
