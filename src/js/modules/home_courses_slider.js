
const findMedianElev=()=>{

        //index of middle item
    const items = document.querySelectorAll('.home-courses__item');
    console.log('items.length ' +items.length)
    let middleItem = items[Math.round((items.length - 1) / 2)];
    console.dir(middleItem);

    //  middle item offset left
    let middleItemOffset = middleItem.offsetLeft;
    console.log(middleItemOffset);

   //  item element width 
    let elemWidth = middleItem.offsetWidth;
    console.log('elemWidth '+ elemWidth);

    // whole slider width
    let sliderLineWidth = elemWidth * (items.length -1 );
    console.log('sliderLineWidth ' +sliderLineWidth);


    let offset = middleItemOffset;
    console.log('offset = middleItemOffset  '+middleItemOffset)
    const sliderLine = document.querySelector('.home-courses__slider-line');
    const btnNext = document.querySelector('.home-courses__item-btn--next');
    const btnPrev = document.querySelector('.home-courses__item-btn--prev');
   

    const onClickNextBtn =()=>{
        offset = offset + elemWidth;
         console.log('offset +elemWidth ' +offset)
       if (offset>sliderLineWidth ){
        offset = 0;
    }  
    sliderLine.style.left = - offset + 'px';
  
}

const onClickPrevtBtn =()=>{
    offset = offset - elemWidth;
   if (offset<0 ){
    offset = sliderLineWidth;
}  
sliderLine.style.left = - offset + 'px';

}

    btnPrev.addEventListener('click',onClickPrevtBtn)
    btnNext.addEventListener('click', onClickNextBtn)

    sliderLine.style.left = - offset + 'px';

}

export {findMedianElev as findMedianElev};


