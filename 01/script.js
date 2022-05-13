window.onload = function () {
  /* Scroll Header */
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  /* Mobile Menu Trigger Start */
  const trigger = document.querySelector(".trigger");
  trigger.addEventListener("click", function () {
    this.classList.toggle("triggerOn"); // trigger 버튼에 활성화 클래스 부여
    document.querySelector(".wrap").classList.toggle("triggerOn"); // Wrap에 활성화 클래스 부여
  });
  // Close menu if the area outside the menu is pressed
  window.addEventListener("click", e => {
    if(document.querySelector(".wrap").classList.contains("triggerOn")) {
      const evTarget = e.target
      if(evTarget.classList.contains("wrap")) {
        trigger.classList.remove("triggerOn")
        document.querySelector(".wrap").classList.remove("triggerOn")
      }
    }
  })
  // Close menu when ESC key is pressed
  window.addEventListener("keyup", e => {
    if(e.key === "Escape") {
      trigger.classList.remove("triggerOn")
      document.querySelector(".wrap").classList.remove("triggerOn")
    }
  })
  /* Mobile Menu Trigger End */

  /* Tabmenu Start */
  const tabList = document.querySelectorAll(".tab-btn li"); // 탭 버튼 부분
  const tab = document.querySelectorAll(".tab-content"); // 탭 내용
  let activeTab = ""; // 활성화된 탭

  for (var i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener("click", function () {
      for (var j = 0; j < tabList.length; j++) {
        // 다른 탭에 붙은 클래스 삭제
        tabList[j].classList.remove("active");
        // 클릭된 탭에 클래스 추가
        this.classList.add("active");

        // 컨텐츠 전환
        tab[j].classList.remove("active");
        activeTab = this.getAttribute("data-alt");
        document.getElementById(activeTab).classList.add("active");
      }
    });
  }
  /* Tabmenu End */

  /* Slider Start*/
  const slideItem = document.querySelectorAll(".slide-item"); // 슬라이드 이미지들
  const prevBtn = document.querySelector(".prev"); // 이전 버튼
  const nextBtn = document.querySelector(".next"); // 다음 버튼
  let curSlide = ""; // 현재 활성화된 슬라이드
  let curIdx = 0; // 현재 활성화된 슬라이드의 인덱스 값

  // 4초마다 슬라이드 넘기기
  setInterval(function () {
    curIdx = Number(curIdx);
    if (curIdx < slideItem.length) {
      next();
    } else if (curIdx == slideItem.length) {
      curIdx = 0;
      next();
    }
    slideInit();
  }, 4000);

  // 슬라이드 이미지 클릭으로 활성화
  for (var i = 0; i < slideItem.length; i++) {
    slideItem[i].addEventListener("click", function () {
      inactive();
      this.classList.add("active");
      slideInit();
      curIdx = curSlide.getAttribute("data-alt");
    });
  }

  // 이전 버튼 실행
  function prev() {
    curIdx = Number(curIdx);
    if (curIdx > 0) {
      inactive();
      curIdx -= 1;
      slideItem[curIdx].classList.add("active");
    } else if (curIdx === 0) {
      inactive();
      curIdx = slideItem.length - 1;
      slideItem[curIdx].classList.add("active");
    }
    slideInit();
  }

  // 다음 버튼 실행
  function next() {
    // slide.length : 5
    curIdx = Number(curIdx);
    if (curIdx < slideItem.length - 1) {
      inactive();
      curIdx += 1;
      slideItem[curIdx].classList.add("active");
    } else if (curIdx == slideItem.length - 1) {
      inactive();
      curIdx = 0;
      slideItem[curIdx].classList.add("active");
    }
    slideInit();
  }

  // 전체 슬라이드 활성화 해제 (초기화)
  function inactive() {
    for (var i = 0; i < slideItem.length; i++) {
      slideItem[i].classList.remove("active");
    }
  }

  // 현재 활성화된 슬라이드로 변수 초기화
  function slideInit() {
    curSlide = document.querySelector(".active");
  }

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
  /* Slider End*/
};