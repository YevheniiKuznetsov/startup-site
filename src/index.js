
import 'bootstrap/dist/css/bootstrap.min.css';
import './less/fonts.less';
import './less/style.less';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import showHide from './modules/show_hide.js';

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:30,
      nav: true,
      navText: ["<img src='src/images/prevslide.png'>","<img src='src/images/nextslide.png'>"],
      responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    },  
  });
});

$(document).ready(function() {
   $("a.topLink").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, 
      {
         duration: 500,
         easing: "swing"
      });
      return false;
   });
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var viewportHeight = $(window).outerHeight();
    if(scroll>=viewportHeight-55){
        $("#navigation").addClass('scroll');
    } else {
        $("#navigation").removeClass('scroll');
    }
});


showHide('track-element', 'impact-object');










