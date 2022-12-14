const reviewsHover = function(){

    const showReviewBtns = document.querySelectorAll('._js-reviews__arrow-btn');
    const texts = document.querySelectorAll('._js-reviews__review-text');
    const socials = document.querySelectorAll('._js-reviews__reviewer-socials');
    const reviewerNames = document.querySelectorAll('._js-reviews__reviewer-name');
    const courseNames = document.querySelectorAll('._js-reviews__course-name');
    const itemInners = document.querySelectorAll('._js-reviews__item-inner');
    
    for(let i=0; i<itemInners.length; i++){
        showReviewBtns[i].addEventListener('click', function(){
           

            texts[i].classList.add('_js-reviews__review-text--hover');
            socials[i].classList.add('_js-reviews__reviewer-socials--hover');
            reviewerNames[i].classList.add('_js-reviews__course-name--hover');
            courseNames[i].classList.add('_js-reviews__course-name--hover');
            itemInners[i].classList.add('_js-reviews__item-inner--hover');
           showReviewBtns[i].classList.add('_js-reviews__arrow-btn--hover')
        })
        itemInners[i].addEventListener('click',function(){
            texts[i].classList.remove('_js-reviews__review-text--hover');
            socials[i].classList.remove('_js-reviews__reviewer-socials--hover');
            reviewerNames[i].classList.remove('_js-reviews__course-name--hover');
            courseNames[i].classList.remove('_js-reviews__course-name--hover');
            itemInners[i].classList.remove('_js-reviews__item-inner--hover');
           showReviewBtns[i].classList.remove('_js-reviews__arrow-btn--hover')
        })
        texts[i].addEventListener('click',function(){
            texts[i].classList.remove('_js-reviews__review-text--hover');
            socials[i].classList.remove('_js-reviews__reviewer-socials--hover');
            reviewerNames[i].classList.remove('_js-reviews__course-name--hover');
            courseNames[i].classList.remove('_js-reviews__course-name--hover');
            itemInners[i].classList.remove('_js-reviews__item-inner--hover');
           showReviewBtns[i].classList.remove('_js-reviews__arrow-btn--hover')
        })
    }



}

export {reviewsHover as reviewsHover};