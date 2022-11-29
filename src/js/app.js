import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

//есть возможность импортировать плагины прямо в модуле
import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();




import $ from 'jquery';
import slikCarousel from 'slick-carousel';


    $(".home-courses__list").slick({
        dots:true,
        initialSlide: 2,
        mobileFirst:true,
        responsive: [
            {
            breakpoint: 1019,
           settings: {
            slidesToShow:2
           }
 
        },
        {
            breakpoint:1299,
            settings:{
                slidesToShow:3,
                dots:false,
                prevArrow: false,
                nextArrow: false,
                //variableWidth: true
            }
        }
        ]

    });



   $('.home-reviews__list').slick({
        mobileFirst:true,
        slidesToShow:1,
        arrows:true,
        appendArrows: $(".home-reviews__slider-btns"),
        responsive: [
            {
                breakpoint:699,
                settings:{
                    slidesToShow:2,
                    arrows:true,
                    slidesToScroll: 2

            }
            },
  
        {
            breakpoint:1019,
            settings:{
                slidesToShow:3,
                arrows:true,
                slidesToScroll: 3
            }
        }
        ]
   });
   $(".home-timetable__classes-list").slick({
        rows:3,
        slidesPerRow:1,
        mobileFirst: true,
        appendArrows: $(".home-timetable__more-btn")
   });

 
   $('.intro__courses-list').slick({
       
        dots:true,
        appendArrows: $(".intro__courses-slider-btns"),
        appendDots: $(".intro__courses-slider-btns"),
        autoplay:true,
       autoplaySpeed:5000
   });

 $('.about__photo-slider').slick({
    appendArrows:$('.about__photo-slider-btns'),
    arrows:true

 });

import nanogallery2 from './jquery.nanogallery2.min.js';
jQuery(document).ready(function () {
    jQuery("#my_nanogallery2").nanogallery2({
      thumbnailHeight:  200,
      thumbnailWidth:   'auto',
      thumbnailBorderHorizontal: 0,
      thumbnailL1BorderHorizontal:0,
      thumbnailBorderVertical: 0,
      thumbnailL1BorderVertical:0,
        thumbnailGutterWidth : 10,
        thumbnailGutterHeight : 10,
        thumbnailL1GutterWidth: 10,
        thumbnailL1GutterHeight:10, 
      items: [
          { src: '../intuit_flow/img/home/home_about/photo1_desktop.svg', srct: '../intuit_flow/img/home/home_about/photo1_desktop.svg', title: '' },
          { src: '../intuit_flow/img/home/home_about/photo3_mobile.svg', srct: '../intuit_flow/img/home/home_about/photo3_mobile.svg', title: '' },
          { src: '../intuit_flow/img/home/home_about/photo2_desktop.svg', srct: '../intuit_flow/img/home/home_about/photo2_desktop.svg', title: '' },
          { src: '../intuit_flow/img/home/home_about/photo-4.svg', srct: '../intuit_flow/img/home/home_about/photo-4.svg', title: '' },
          { src: '../intuit_flow/img/home/home_about/photo-5.svg', srct: '../intuit_flow/img/home/home_about/photo-5.svg', title: '' },
          { src: '../intuit_flow/img/home/home_about/photo-6.svg', srct: '../intuit_flow/img/home/home_about/photo-6.svg', title: '' },

        ],
     viewerTheme: {
            background:             'hsla(38, 100%, 73%, 0.5)',
            barBackground:          'hsla(38, 100%, 73%, 1)',
            barBorder:              '0px solid #ffffff',
            barColor:               'hsla(38, 100%, 73%, 1)',
            barDescriptionColor:    'hsla(38, 100%, 73%, 1)'
            },
    viewerTools:    {
                topLeft:    'playPauseButton,fullscreenButton',
                topRight:   ' zoomButton, closeButton'
            } ,  
    icons:{
            viewerImgPrevious: '<i style="background:rgba(0,0,0,0);font-size:0; background-image:url(../intuit_flow/img/home/home_review/review_arrow_prev.svg);background-repeat:no-repeat; background-size:contain;width:60px;height:60px;" class="nGY2Icon-ngy2_chevron-left"></i>',
            viewerImgNext:'<i style="background:rgba(0,0,0,0);font-size:0; background-image:url(../intuit_flow/img/home/home_review/review_arrow_next.svg);background-repeat:no-repeat; background-size:contain;width:60px;height:60px;" class="nGY2Icon-ngy2_chevron-right"></i>',  // icon for next image (toolbar)
            buttonClose: '<i style="text-shadow:none; color:#6B6BC5;" class="nGY2Icon-ngy2_close2"></i>',         // close button icon
            viewerPlay:  '<i style="text-shadow:none; color:#6B6BC5;" class="nGY2Icon-play"></i>',                // icon play - to start the slideshow (toolbar)
            viewerPause: '<i style="text-shadow:none; color:#6B6BC5;" class="nGY2Icon-pause"></i>',               // icon pause - to stop the slideshow (toolbar)
            viewerFullscreenOn:  '<i style="text-shadow:none; color:#6B6BC5;" class="nGY2Icon-resize-full"></i>',         // icon to switch on fullscreen (toolbar)
            viewerFullscreenOff:  '<i style="text-shadow:none; color:#6B6BC5;" class="nGY2Icon-resize-small"></i>',      // icon to switch off fullscreen (toolbar)
            viewerZoomIn: '<i style="text-shadow:none; color:#6B6BC5;" class="nGY2Icon-ngy2_zoom_in2"></i>',       // icon zoom in (toolbar)
            viewerZoomOut:  '<i  style="text-shadow:none; color:#6B6BC5;" class="nGY2Icon-ngy2_zoom_out2"></i>',      // icon zoom out (toolbar)
                  
       
        }


        
        });
  });

import {popupFunction} from "./modules/popup.js";
popupFunction();

import {scrollHeader} from "./modules/scroll-header.js";
scrollHeader();

import { openTimetableForm } from "./modules/timetable_form.js";
openTimetableForm();
  