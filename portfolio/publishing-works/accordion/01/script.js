window.onload = function() {
  const menu = document.querySelectorAll('.mail-box .menu')
  const subMenu = document.querySelectorAll('.sub-menu')

  for(var i=0; i < menu.length; i++) {
    menu[i].addEventListener('click', function() {
      var openMenu = this.nextElementSibling

      for(var j=0; j < menu.length; j++) {
        // 활성화된 메뉴가 있을 때
        if(menu[j].classList.contains('active')) {
          // 이미 활성화된 메뉴를 다시 클릭해서 닫을 때
          if(!this.classList.contains('active')) {
            menu[j].classList.remove('active')
            subMenu[j].style.maxHeight = null
          }
        }
      }
      if(openMenu.style.maxHeight) {
        openMenu.style.maxHeight = null
        this.classList.toggle('active')
      } else {
        openMenu.style.maxHeight = openMenu.scrollHeight + 'px'
        this.classList.toggle('active')
      }
    })
  }
}