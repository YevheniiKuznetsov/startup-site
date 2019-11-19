import 'bootstrap/dist/css/bootstrap.min.css';
import './less/fonts.less';
import './less/style.less';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import showHide from './modules/show_hide.js';
import icons from 'glyphicons';


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
/*
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var viewportHeight = $(window).outerHeight();
    if(scroll>=viewportHeight-55){
        $("#navigation").addClass('scroll');
        $('.mobile-menu')[0].style.display="none";
    } else {
        $("#navigation").removeClass('scroll');
    }
});
*/

showHide('track-element', 'impact-object');

function menu(){
    var n = false;
    
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var viewportHeight = $(window).outerHeight();
        $('.mobile-menu')[0].style.display="none";
        n = false;
        if (scroll > 0 && scroll < viewportHeight-55){
            $("#navigation").css({'background': '#c0301c'});
        } else if (scroll >= viewportHeight-55 || scroll === 0){
            $("#navigation").css({'background': ''});
        }
        scroll >= viewportHeight-55 ? $("#navigation").addClass('scroll') : $("#navigation").removeClass('scroll');
    });
    
    $('#mobileMenuIcon').click(function(event){
        n = !n;
        $('.mobile-menu')[0].style.display="block";
        n ? $('.mobile-menu')[0].style.display="block" : hide();
        function hide(){
            $('.mobile-menu')[0].style.display="none";
        };
    });
};
menu();

$(document).ready(function() {
  $(".block-icon").click(function() {
    $(".stick").toggleClass(function () {
      return $(this).is('.open, .close') ? 'open close' : 'open';
    });
  });
});