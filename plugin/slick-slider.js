$(document).ready(function () {
  var slickOptions = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    draggable: false,
    touchMove: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  $(".publish-content .items").slick(slickOptions);
});
