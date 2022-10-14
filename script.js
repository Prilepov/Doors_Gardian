/* Slick carousel */
$('.pop').slick({
    centerMode: false,
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: true,
    prevArrow: "<img src='images/prev_arrow.png' class='prevar' alt='1'>",
    nextArrow: "<img src='images/next_arrow.png' class='nextar' alt='1'>"
});

/* Sale slider */
$('.sale_slider').slick({
    centerMode: false,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    arrows: false,
});

/* All doors slider */
$('.all_doors_slider').slick({
    centerMode: false,
    slidesToShow: 2,
    infinite: false,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: true,
    prevArrow: "<img src='images/prev_arrow.png' class='prevar' alt='1'>",
    nextArrow: "<img src='images/next_arrow.png' class='nextar' alt='1'>"
});

/* All decor slider */
$('.all_decor_slider').slick({
    centerMode: false,
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: true,
    prevArrow: "<img src='images/prev_arrow.png' class='prevar' alt='1'>",
    nextArrow: "<img src='images/next_arrow.png' class='nextar' alt='1'>"
});

/* Blog slider */
$('.blog_slider').slick({
    centerMode: false,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    arrows: false,
});

/* Photo slider */
$('.photo_slider').slick({
    centerMode: false,
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: true,
    prevArrow: "<img src='images/prev_arrow.png' class='prevar' alt='1'>",
    nextArrow: "<img src='images/next_arrow.png' class='nextar' alt='1'>"
});

/* Photo switcher */
$( document ).ready(function() {
    $(".switcher").click(function(e) {
      $(this).addClass('active');{
        $('.tab-content.active').removeClass('active');
        $('.tab-content.' + $(this).data('target')).addClass('active');
      }
    })
  })

  /* Review slider */
$('.review_slider').slick({
    centerMode: false,
    slidesToShow: 2,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: true,
    prevArrow: "<img src='images/prev_arrow.png' class='prevar' alt='1'>",
    nextArrow: "<img src='images/next_arrow.png' class='nextar' alt='1'>"
});

/* Address slider */
$('.address_slider').slick({
    centerMode: false,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    dots: false,
    arrows: true,
    prevArrow: "<img src='images/prev_arrow.png' class='prevar' alt='1'>",
    nextArrow: "<img src='images/next_arrow.png' class='nextar' alt='1'>"
});
