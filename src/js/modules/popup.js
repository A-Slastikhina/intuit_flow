


    const popupFunction = ()=>{
    const popup =  document.querySelector('.header__popup');
    const popupBtn =  document.querySelector('.header__popup-btn');
    const closePopupBtn = document.querySelector('.header__popup-btn--close');
    popupBtn.addEventListener('click', function(){
        if(popup.classList.contains('hidden-popup')){
            popup.classList.remove('hidden-popup')
        }
    })

    closePopupBtn.addEventListener('click', function(){
        popup.classList.add('hidden-popup')
    })

    }

export {popupFunction as popupFunction}
