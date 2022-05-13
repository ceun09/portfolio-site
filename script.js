window.onload = function() {
  const webTabList = document.querySelectorAll('.web-works .tabmenu li') // 탭 버튼 부분 (Website)
  const pubTabList = document.querySelectorAll('.publish-works .tabmenu li') // 탭 버튼 부분 (Publishing)
  const webTab = document.querySelectorAll('.web-content') // 탭 내용 (Website)
  const pubTab = document.querySelectorAll('.publish-content .items') // 탭 내용 (Publishing)
  let activeTab = "" // 활성화된 탭

  for(var i = 0; i < webTabList.length; i++) {
    webTabList[i].addEventListener('click', function() {
      console.log("web")
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
    })
  }
}