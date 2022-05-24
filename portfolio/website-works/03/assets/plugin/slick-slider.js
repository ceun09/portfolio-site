$(document).ready(function () {
  /* Main Slider */
  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    speed: 1500,
    arrows: true,
    prevArrow: $('.main-prev'),
    nextArrow: $('.main-next'),
    dots: true,
    appendDots: $('.main-paging'),
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false
  })
  $('.main-play').on('click', function() {
    if($('.main-play').hasClass('stop') === true) {
      $('.main-play').removeClass('stop')
      $('.main-slider').slick('slickPlay')
    } else {
      $('.main-play').addClass('stop')
      $('.main-slider').slick('slickPause')
    }
  })

  /* Theme Slider */
  $('.theme-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    draggable: false
  })

  /* Media Video Slider */
  $('.media-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.media-prev'),
    nextArrow: $('.media-next'),
    draggable: false
  })

  /* Notice Slider */
  $('.notice-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    infinite: false,
    dots: true,
    appendDots: $('.notice-paging')
  })

  /* Footer Logo Slider */
  $('.footer-logo-area .logo-wrap').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.footer-logo-area .prev'),
    nextArrow: $('.footer-logo-area .next'),
    draggable: false
  })

  $(window).on("load resize", function () {
    if ($(window).width() < 600) {
      // 창 크기가 600보다 작을 때 Slick 해제
      $(".theme-slider").filter(".slick-initialized").slick("unslick");
      $(".media-slider").filter(".slick-initialized").slick("unslick");
    } else {
      $(".theme-slider").not(".slick-initialized").slick();
      $(".media-slider").not(".slick-initialized").slick();
    }
  });
});
