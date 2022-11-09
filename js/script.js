/* Slick carousel */
$('.pop').slick({
    centerMode: false,
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
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
    autoplay: false,
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
    autoplay: false,
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

/* Sale page slider */
$('.sale_page_slider').slick({
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

/* Photo switcher */
$( document ).ready(function() {
    $(".switcher").click(function(e) {
      $(this).addClass('active');{
        $('.tab-content.active').removeClass('active');
        $('.tab-content.' + $(this).data('target')).addClass('active');
      }
    })
  })

/* Dropdown switcher */
$( document ).ready(function() {
    $(".switcher_drop_1").click(function(e) {
      $(this).addClass('active');{
        $('.drop_content_1.active').removeClass('active');
        $('.drop_content_1.' + $(this).data('target')).addClass('active');
      }
    })
  })
  $( document ).ready(function() {
    $(".switcher_drop_2").click(function(e) {
      $(this).addClass('active');{
        $('.drop_content_2.active').removeClass('active');
        $('.drop_content_2.' + $(this).data('target')).addClass('active');
      }
    })
  })
  $( document ).ready(function() {
    $(".switcher_drop_3").click(function(e) {
      $(this).addClass('active');{
        $('.drop_content_3.active').removeClass('active');
        $('.drop_content_3.' + $(this).data('target')).addClass('active');
      }
    })
  })
  $( document ).ready(function() {
    $(".switcher_drop_4").click(function(e) {
      $(this).addClass('active');{
        $('.drop_content_4.active').removeClass('active');
        $('.drop_content_4.' + $(this).data('target')).addClass('active');
      }
    })
  })
  $( document ).ready(function() {
    $(".switcher_drop_5").click(function(e) {
      $(this).addClass('active');{
        $('.drop_content_5.active').removeClass('active');
        $('.drop_content_5.' + $(this).data('target')).addClass('active');
      }
    })
  })

  /* Review slider */
$('.review_slider').slick({
    centerMode: false,
    slidesToShow: 2,
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
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

/* Model selection slider */
$('.ms_part1_slider').slick({
    centerMode: false,
    slidesToShow: 4,
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    dots: false,
    arrows: true,
    prevArrow: "<img src='images/prev_arrow.png' class='prevar' alt='1'>",
    nextArrow: "<img src='images/next_arrow.png' class='nextar' alt='1'>"
});

/* Decor select right slider_1 */
$('.decor_select_right_slider_1').slick({
    centerMode: false,
    slidesToShow: 5,
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    dots: false,
    arrows: true,
    prevArrow: "<img src='images/prev_arrow.png' class='prevar' alt='1'>",
    nextArrow: "<img src='images/next_arrow.png' class='nextar' alt='1'>"
});

/* Decor select right slider_2 */
$('.decor_select_right_slider_2').slick({
    centerMode: false,
    slidesToShow: 5,
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    dots: false,
    arrows: true,
    prevArrow: "<img src='images/prev_arrow.png' class='prevar' alt='1'>",
    nextArrow: "<img src='images/next_arrow.png' class='nextar' alt='1'>"
});

/* Door Stuff Slider */
$('.door_stuff_slider').slick({
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

/* Dropdown */
(function(){
	var d = document,
	accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
	setAria,
	setAccordionAria,
	switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);
  
  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

		setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
	};
	setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
      case "true":
      	setAriaAttr(el1, 'aria-expanded', 'true');
      	setAriaAttr(el2, 'aria-hidden', 'false');
      	break;
      case "false":
      	setAriaAttr(el1, 'aria-expanded', 'false');
      	setAriaAttr(el2, 'aria-hidden', 'true');
      	break;
      default:
				break;
		}
	};
//function
switchAccordion = function(e) {
  console.log("triggered");
	e.preventDefault();
	var thisAnswer = e.target.parentNode.nextElementSibling;
	var thisQuestion = e.target;
	if(thisAnswer.classList.contains('is-collapsed')) {
		setAccordionAria(thisQuestion, thisAnswer, 'true');
	} else {
		setAccordionAria(thisQuestion, thisAnswer, 'false');
	}
  	thisQuestion.classList.toggle('is-collapsed');
  	thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');
 	
  	thisAnswer.classList.toggle('animateIn');
	};
	for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();

/* Order count */
var numCount = document.getElementById('num_count');
var plusBtn = document.getElementById('button_plus');
var minusBtn = document.getElementById('button_minus');
plusBtn.onclick = function() {
  var qty = parseInt(numCount.value);
  qty = qty + 1;
  numCount.value = qty;
}
minusBtn.onclick = function() {
  var qty = parseInt(numCount.value);
  qty = qty - 1;
  numCount.value = qty;
}

/* Switcher */
$( document ).ready(function() {
  $(".switcher").click(function(e) {
    $(this).addClass('active');{
      $('.tab-content.active').removeClass('active');
      $('.tab-content.' + $(this).data('target')).addClass('active');
    }
  })
})

/* Select model catalog switcher */
$( document ).ready(function() {
  $(".switcher_select").click(function(e) {
    $(this).addClass('active');{
      $('.tab-select.active').removeClass('active');
      $('.tab-select.' + $(this).data('target')).addClass('active');
    }
  })
})