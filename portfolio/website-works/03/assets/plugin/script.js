/* Popup */
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup .close-btn')

popupClose.addEventListener('click', function() {
  popup.classList.add('invisible')
})

/* Loading Page */
function onloadevent() {
  document.getElementById('loader-wrap').style.visibility = 'hidden'
  document.body.classList.remove('loading')
  document.querySelector('.container').classList.remove('loading')
}

/* Theme Tour: Tab Menu */
const tabList = document.querySelectorAll('.tab li')  // 탭 버튼
const tabContent = document.querySelectorAll('.theme-slider') // 탭 버튼에 따라 달라질 컨텐츠
let activeTab = '' // 현재 active 상태인 탭 컨텐츠
let idx = 0 // 현재 인덱스 값

for(var i = 0; i < tabList.length; i++) {
  tabList[i].addEventListener('click', function() {
    for(var j = 0; j < tabList.length; j++) {
      // 다른 탭에 붙은 클래스 삭제
      tabList[j].classList.remove('active')
      // 클릭된 탭에 클래스 추가
      this.classList.add('active')

      tabContent[j].classList.remove('active')
      activeTab = this.getAttribute('data-alt')
      document.getElementById(activeTab).classList.add('active')
    }
    $(tabContent).slick('setPosition')
  })
}

/* Event List */
const eventMore = document.querySelector('.event-area .more-btn')
const eventList = document.querySelector('.event-items.invisible') // 숨겨진 이벤트 리스트

eventMore.addEventListener('click', function() {
  eventMore.classList.toggle('active')
  eventList.classList.toggle('invisible')
})

/* Quick Menu*/
const quickBtn = document.querySelector('.quick')
const quickMenu = document.querySelector('.quick-menu .menu-wrap')

quickBtn.addEventListener('click', function() {
  quickBtn.classList.toggle('active')
  quickMenu.classList.toggle('active')
})