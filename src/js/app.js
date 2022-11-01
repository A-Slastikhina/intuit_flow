import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

//есть возможность импортировать плагины прямо в модуле
import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();
import {popupFunction} from "./modules/popup.js"
popupFunction();
import $ from 'jquery';
import slikCarousel from 'slick-carousel';


    $(".home-courses__list").slick({
        dots:true,
        initialSlide: 2,

       // infinite:true
    })

   $('.home-reviews__list').slick()
   $(".home-timetable__classes-list").slick({
        rows:3,
        slidesPerRow:1,
        mobileFirst: true,
       appendArrows: $(".home-timetable__more-btn")
       //slidesToShow: 3
   })

import nanogallery2 from './jquery.nanogallery2.min.js';




  