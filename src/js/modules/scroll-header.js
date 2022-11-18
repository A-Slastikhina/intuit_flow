
const scrollHeader = function(){
    
 const header = document.querySelector('.header');
 const headerItemLinks = document.querySelectorAll('.header__item-link');
 const headerIconWA = document.querySelector('.site-socials__item--WA');
 const headerIconIG = document.querySelector('.site-socials__item--IG');

 document.addEventListener('scroll', siteScroll)
 function siteScroll (){
    header.style.backgroundColor='hsla(0deg,0%,100%,.5)'
    header.style.position = 'sticky';
    headerIconWA.style.backgroundImage='url("../../img/home/home_courses/desktop/WA.svg")'
    headerIconIG.style.backgroundImage='url("../../img/home/home_courses/desktop/insta.svg")'
    for(let headerItemLink of headerItemLinks){
        headerItemLink.addEventListener('mouseover', function(){
            headerItemLink.style.textShadow='0 0 .65px #333, 0 0 .65px #333';
        })
        headerItemLink.addEventListener('mouseout', function(){
            headerItemLink.style.textShadow='none';
        })
        headerItemLink.style.color = '#464548';
        headerItemLink.style.fontWeight='100'
    }
   // header.style.transition = '0.3s'
    if(pageYOffset < 50){
        for (let headerItemLink of headerItemLinks){
            headerItemLink.style.color = '#edebf6';
        }
        
        header.style.backgroundColor='transparent'
        header.style.position = 'absolute';
        headerIconWA.style.backgroundColor = 'black';
        headerIconWA.style.backgroundImage='url("../../img/header/WA.png")';
        headerIconIG.style.backgroundImage='url("../../img/header/Insta.png")';

    }
};


}


export {scrollHeader as scrollHeader}