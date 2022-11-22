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
      // autoplay:true,
       autoplaySpeed:5000
   });



import nanogallery2 from './jquery.nanogallery2.min.js';

import {popupFunction} from "./modules/popup.js";
popupFunction();

import {scrollHeader} from "./modules/scroll-header.js";
scrollHeader();

import { openTimetableForm } from "./modules/timetable_form.js";
openTimetableForm();
  