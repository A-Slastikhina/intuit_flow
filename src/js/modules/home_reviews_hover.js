const reviewsHover = function(){

    const showReviewBtns = document.querySelectorAll('.home-reviews__arrow-btn');
    const texts = document.querySelectorAll('.home-reviews__review-text');
    const socials = document.querySelectorAll('.home-reviews__reviewer-socials');
    const reviewerNames = document.querySelectorAll('.home-reviews__reviewer-name');
    const courseNames = document.querySelectorAll('.home-reviews__course-name');
    const itemInners = document.querySelectorAll('.home-reviews__item-inner');

    for(let i=0; i<itemInners.length; i++){
        showReviewBtns[i].addEventListener('click', function(){

            texts[i].classList.add('home-reviews__review-text--hover');
            socials[i].classList.add('home-reviews__reviewer-socials--hover');
            reviewerNames[i].classList.add('home-reviews__reviewer-name--hover');
            courseNames[i].classList.add('home-reviews__course-name--hover');
            itemInners[i].classList.add('home-reviews__item-inner--hover');
           showReviewBtns[i].classList.add('home-reviews__arrow-btn--hover')
        })
        itemInners[i].addEventListener('click',function(){
            texts[i].classList.remove('home-reviews__review-text--hover');
            socials[i].classList.remove('home-reviews__reviewer-socials--hover');
            reviewerNames[i].classList.remove('home-reviews__reviewer-name--hover');
            courseNames[i].classList.remove('home-reviews__course-name--hover');
            itemInners[i].classList.remove('home-reviews__item-inner--hover');
           showReviewBtns[i].classList.remove('home-reviews__arrow-btn--hover')
        })
        texts[i].addEventListener('click',function(){
            texts[i].classList.remove('home-reviews__review-text--hover');
            socials[i].classList.remove('home-reviews__reviewer-socials--hover');
            reviewerNames[i].classList.remove('home-reviews__reviewer-name--hover');
            courseNames[i].classList.remove('home-reviews__course-name--hover');
            itemInners[i].classList.remove('home-reviews__item-inner--hover');
           showReviewBtns[i].classList.remove('home-reviews__arrow-btn--hover')
        })
    }



}

export {reviewsHover as reviewsHover};