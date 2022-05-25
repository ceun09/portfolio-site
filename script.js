window.onload = function() {
  /* Dark Theme Button */
  const darkBtn = document.querySelector('.dark-theme-btn');

  darkBtn.addEventListener('click', function() {
    themeCheck()
    this.classList.toggle('active')
  })
  
  function themeCheck() {
    if(darkBtn.classList.contains('active')) {
      document.querySelector('body').removeAttribute('data-theme')
    } else {
      document.querySelector('body').setAttribute('data-theme', 'dark')
    }
  }

  /* Mobile Menu Trigger Start */
  const trigger = document.querySelector(".trigger-menu");
  trigger.addEventListener("click", function () {
    this.classList.toggle("triggerOn"); // trigger 버튼에 활성화 클래스 부여
    document.querySelector(".container").classList.toggle("triggerOn"); // Wrap에 활성화 클래스 부여
  });
  // Close menu if the area outside the menu is pressed
  window.addEventListener("click", e => {
    if(document.querySelector(".container").classList.contains("triggerOn")) {
      const evTarget = e.target
      if(evTarget.classList.contains("container")) {
        trigger.classList.remove("triggerOn")
        document.querySelector(".container").classList.remove("triggerOn")
      }
    }
  })
  // Close menu when ESC key is pressed
  window.addEventListener("keyup", e => {
    if(e.key === "Escape") {
      trigger.classList.remove("triggerOn")
      document.querySelector(".container").classList.remove("triggerOn")
    }
  })
  /* Mobile Menu Trigger End */

  /* Tabmenu Start */
  const webTabList = document.querySelectorAll('.web-works .tabmenu li') // 탭 버튼 부분 (Website)
  const pubTabList = document.querySelectorAll('.publish-works .tabmenu li') // 탭 버튼 부분 (Publishing)
  const webTab = document.querySelectorAll('.web-content') // 탭 내용 (Website)
  const pubTab = document.querySelectorAll('.publish-content .items') // 탭 내용 (Publishing)
  let activeTab = "" // 활성화된 탭

  for(var i = 0; i < webTabList.length; i++) {
    webTabList[i].addEventListener('click', function() {
      for(var j = 0; j < webTabList.length; j++) {
        // 다른 탭에 붙은 클래스 삭제
        webTabList[j].classList.remove('active')
        // 클릭된 탭에 클래스 추가
        this.classList.add('active')

        webTab[j].classList.remove('active')
        activeTab = this.getAttribute('data-alt')
        document.getElementById(activeTab).classList.add('active')
      }
    })
  }
  for(var k = 0; k < pubTabList.length; k++) {
    pubTabList[k].addEventListener('click', function() {
      for(var j = 0; j < pubTabList.length; j++) {
        // 다른 탭에 붙은 클래스 삭제
        pubTabList[j].classList.remove('active')
        // 클릭된 탭에 클래스 추가
        this.classList.add('active')

        pubTab[j].classList.remove('active')
        activeTab = this.getAttribute('data-alt')
        document.getElementById(activeTab).classList.add('active')
      }
      $('.publish-content .items').slick('setPosition')
    })
  }
  /* Tabmenu End */
}