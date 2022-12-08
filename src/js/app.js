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
        appendArrows: $(".home-courses__slider-btns"),
        appendDots:$(".home-courses__slider-btns"),
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

 $('.programm-reviews__list').slick({
    mobileFirst:true,
    slidesToShow:1,
    arrows:true,
    appendArrows: $(".programm-reviews__slider-btns"),
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

import nanogallery2 from './jquery.nanogallery2.min.js';


import {popupFunction} from "./modules/popup.js";
popupFunction();



import { openTimetableForm } from "./modules/timetable_form.js";
openTimetableForm();
  

import {scrollHeader} from "./modules/scroll-header.js";
scrollHeader();

import {myNanogallery2 as myNanogallery2} from "./modules/home_photos_gallery.js";
import {aboutGallery1 as aboutGallery1} from "./modules/about_teacher_gallery.js";
import {aboutGallery2 as aboutGallery2} from "./modules/about_teacher_gallery.js";
import {bioenergyGallery as bioenergyGallery} from "./modules/bioenergy_photo.js"
jQuery(document).ready(myNanogallery2 () );
jQuery(document).ready(aboutGallery1 () );
jQuery(document).ready(aboutGallery2 () );
jQuery(document).ready(bioenergyGallery () );

