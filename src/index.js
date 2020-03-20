import './less/fonts.less';
import './less/style.less';
import './css/animate.css';
import WOW from './modules/wow.min.js';

$(document).ready(function(){
    $('.menu-icon__wrapper').on('click', toggleOpen);
    $('#close_menu_icon').on('click', toggleOpen);
    function toggleOpen(){
        $('.menu').toggleClass('open');
    }
    $(window).scroll(function(){
        if($(this).scrollTop() > 20){
            $('.header-menu').addClass('navigation-scroll');
        } else if($(this).scrollTop() < 20){
            $('.header-menu').removeClass('navigation-scroll');
        }
    })  
    $('#watch_video').on('click', function(){
        $('.video-container').css({
            visibility: 'visible'
        });
    });
    $('#close_video').on('click', function(){
        $('.video-container').css({
            visibility: 'hidden'
        })
    })
    
    var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();
    
    class ThisSlider {
        constructor(set) {
            this.slideNumber = -1;
            this.settings = set;
            this.quantity = this.settings.quantitySlides;
            this.iteration = 0;
        }
        changeSlide(reverseEl) {
            if (this.settings.quantitySlides === 1) {
                $('.carousel-content-wrapper').css({
                    'justify-content': 'center'
                })
            }
            reverseEl === 'next' ? this.slideNumber++ : this.slideNumber--;
            if (this.slideNumber > $(`.${this.settings.item}`).length - 1) {
                this.slideNumber = 0;
                this.quantity = this.settings.quantitySlides;
                this.iteration = 0;
            } else if (this.slideNumber < 0) {
                this.slideNumber = $(`.${this.settings.item}`).length - 1;
                this.quantity = $(`.${this.settings.item}`).length - 1;
                this.iteration = ($(`.${this.settings.item}`).length - 1) - this.settings.quantitySlides;
            }
            
            $('.carousel-item').css({display: 'none'});
            if (this.slideNumber === this.quantity && this.quantity !== $(`.${this.settings.item}`).length) {
                this.quantity++;
                this.iteration++;
            } else if (this.slideNumber < this.quantity - this.settings.quantitySlides && this.quantity > 0) {
                this.quantity--;
                this.iteration--;
            }
            for(let i = this.iteration; i < this.quantity; i++){
                $('.carousel-item')[i].style.display='block';
            }
            var set = setTimeout(()=>{
                $(`.${this.settings.item}`).removeClass('active-carousel-img');
                $(`.${this.settings.item}`)[this.slideNumber].classList.add('active-carousel-img');
                
                $(`.item-content`).removeClass('item-content-active');
                $(`.item-content`)[this.slideNumber].classList.add('item-content-active');
            })
            
            
        }
    }
    var thisSlider = new ThisSlider({
        item: 'item-img',
        quantitySlides: 3
    });
    thisSlider.changeSlide('next');
    
    var Interval = setInterval(function() {
        thisSlider.changeSlide('next');
    }, 5000);
    
    $('.prev-button').on('click', function() {
        thisSlider.changeSlide('prev');
    })
    $('.next-button').on('click', function() {
        thisSlider.changeSlide('next');
    })
    
    
   
    $('.choose-plan-button').on('click','.choose-plan-button-click', function() {
        $('.choose-plan-button').toggleClass('choose-plan-button-active');
        $('.choose-plan-button-elements').removeClass('choose-plan-button-element-active');
        this.classList.add('choose-plan-button-element-active');
        $('.choose-plan-button-elements').addClass('choose-plan-button-click');
        this.classList.remove('choose-plan-button-click');
        $('.product-description').toggleClass('product-description-active');
        $('.product-description-content').toggleClass('product-description-content-active');
    })
    
    
    
  
    
    
    $('.choose-plan-buttons').on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        console.log(4)
    });
    
    
    
})
