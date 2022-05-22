$(document).ready(function () {
  var slickOptions = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    draggable: true,
    infinite: false,
  };
  $(window).on("load resize", function () {
    if ($(window).width() < 600) {
      // 창 크기가 600보다 작을 때 Slick 해제
      $(".publish-content .items")
        .filter(".slick-initialized")
        .slick("unslick");
    } else {
      $(".publish-content .items")
        .not(".slick-initialized")
        .slick(slickOptions);
    }
  });
});
