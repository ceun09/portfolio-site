$(document).ready(function () {
  $('.header-include').load('../header.html')
  $('.footer-include').load('../footer.html')

  /* 장바구니 & 관심상품 버튼 */
  $(function () {
    /* 장바구니 버튼 */
    $(".btn_basket").click(function () {
      var result = confirm(
        "상품을 장바구니에 추가했습니다. 장바구니로 이동하시겠습니까?"
      );
      if (result) {
        location.replace("game_basket.html");
      } else {
      }
    });
    /* 관심상품 버튼 */
    $(".btn_like").click(function () {
      var result = alert("관심상품에 등록했습니다.");
    });
  });

  /* 랭킹 슬라이드 시작*/
  $(function () {
    var slide = 0;

    $("#rank .item").eq(0).css("color", "#fff");
    $("#rank .item span").eq(0).css("color", "#fff");

    setInterval(function () {
      if (slide < 9) {
        slide++;
      } else {
        slide = 0;
      }

      var h = slide * 45;

      setTimeout(function () {
        $("#rank .item").css("color", "#848484");
        $("#rank .item span").css("color", "#333");
      }, 400);

      $("#rank .orange").animate(
        {
          top: h + "px",
        },
        800
      );

      setTimeout(function () {
        $("#rank .item").eq(slide).css("color", "#fff");
        $("#rank .item span").eq(slide).css("color", "#fff");
      }, 400);
    }, 3000);
  });

  /* 상품 이미지 프리뷰 */
  $("#smallImg img").click(function () {
    //id가 smallImg인 노드의 a태그에 click이벤트가 발생하면 콜백 함수 호출
    //클릭 이벤트가 일어난 a태그의 href값을 path에 저장
    var path = $(this).attr("src");

    //id가 largeImg의 자식노드 중 img태그를 찾아 src속성에 저장한 path값을 설정한다.
    $("#largeImg img").attr("src", path);
    $(this).parent().siblings().css("border", "1px solid #ccc");
    $(this).parent().css("border", "1px solid #444");

    return false;
  });

  /* 이벤트 탭 메뉴 */
  $("#event_list .tabs").click(function () {
    $(".tabs").removeClass("on");
    $("#event_list #list").removeClass("on");
    $(this).addClass("on");
    if ($("#tab1").hasClass("on")) {
      $(".darkness").css("display", "none");
      var n = $("#list a").index() + 1;
      $("#list a").attr("href", "game_event_" + n + "html");
    } else if ($("#tab2").hasClass("on")) {
      $(".darkness").css("display", "block");
      $("#list a").attr("href", "#a").css("cursor", "default");
    } else {
    }
  });

  /* 체크박스 */
  $(function () {
    $("#selectAll").click(function () {
      $("input:checkbox").prop("checked", true);
    });
    $("#releaseAll").click(function () {
      $("input:checkbox").prop("checked", false);
    });
  });

  /* 장바구니 페이지 */
  $(function () {
    // 단일 항목 삭제
    $(".del").click(function () {
      var result = confirm("해당 상품을 장바구니에서 삭제하겠습니까?");
      if (result) {
        if ($("#basket_list ul").length == 1) {
          $(this).parent().empty();
        } else {
          $(this).parent().remove();
        }
      } else {
      }
    });
    // 선택 항목 삭제
    $("#del_check").click(function () {
      if ($("input[type='checkbox']").is(":checked") == false) {
        alert("선택된 상품이 없습니다.");
      } else {
        var result = confirm("선택된 상품을 장바구니에서 삭제하겠습니까?");
        if (result) {
          if (
            $("input:checkbox:checked").length == $("input:checkbox").length
          ) {
            $("input:checkbox:checked:not(:last)").parents("ul").remove();
            $("input:checkbox:checked").parents("ul").empty();
          } else {
            $("input:checkbox:checked").parents("ul").remove();
          }
        } else {
        }
      }
    });
    // 전체 항목 삭제
    $("#del_all").click(function () {
      if ($("#basket_list ul").children().length == 0) {
        alert("장바구니에 담은 상품이 없습니다.");
      } else {
        var result = confirm("장바구니를 모두 비우겠습니까?");
        if (result) {
          $("#basket_list ul:not(:last)").remove();
          $("#basket_list ul").empty();
        } else {
        }
      }
    });
  });
});

window.onload = function() {
  // 고객센터 qna 
  const items = document.querySelectorAll('.question');

  function openCloseAnswer() {
      const answerId = this.id.replace('que', 'ans');

      if (document.getElementById(answerId).style.display === 'block') {
          document.getElementById(answerId).style.display = 'none';
          document.getElementById(this.id + '-toggle').src = "../images/plus.png";
      } else {
          document.getElementById(answerId).style.display = 'block';
          document.getElementById(this.id + '-toggle').src = "../images/minus.png";
      }
  }

  items.forEach(item => item.addEventListener('click', openCloseAnswer));
}