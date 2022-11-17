const openTimetableForm = function(){
    const popupForm = document.querySelector('.home-timetable__popup');
    const enrollBtns = document.querySelectorAll('.home-timetable__classes-enroll-btn');
    const submitBtn = document.querySelector('.home-timetable__form-submit');
    const closeBtn = document.querySelector('.home-timetable__form--close');
    for (let enrollBtn of enrollBtns){
        enrollBtn.addEventListener('click', function(){
            popupForm.classList.remove('home-timetable__popup--hidden')
        });

    }
    submitBtn.addEventListener('click',function(evt){
        //удалить следующую строчку когда разместим на сервере
        evt.preventDefault();
        popupForm.classList.add('home-timetable__popup--hidden')

    });

    document.addEventListener('keydown', function(evt){
        if(evt.keyCode === 27){
            popupForm.classList.add('home-timetable__popup--hidden')
        }
    });
    closeBtn.addEventListener('click', function(){
        popupForm.classList.add('home-timetable__popup--hidden')
    })

}

export {openTimetableForm as openTimetableForm};