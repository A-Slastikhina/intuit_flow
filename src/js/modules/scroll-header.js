
const scrollHeader = function(){
    
 const header = document.querySelector('.header');
 const headerItemLinks = document.querySelectorAll('.header__item-link');
 const headerIconWA = document.querySelector('.site-socials__item--WA');
 const headerIconIG = document.querySelector('.site-socials__item--IG');
const headerAdditionText = document.querySelector('.header__addition-text');
const headerLogo = document.querySelector('.header__addition-logo');
const headerPopupBtb = document.querySelector('.header__popup-btn');
var sticky = header.offsetTop;

 document.addEventListener('scroll', siteScroll)
 function siteScroll (){
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky_header");
      } else {
        header.classList.remove("sticky_header");
      }

    header.style.backgroundColor='hsla(0deg,0%,100%,.9)';
    //
    headerLogo.classList.remove('header__addition-logo--light');
    headerLogo.classList.add('header__addition-logo--scroll');
 
   headerPopupBtb.classList.remove('header__popup-btn--top');
   headerPopupBtb.classList.add('header__popup-btn--scroll');

    headerIconWA.style.backgroundColor="#A6ACAD";
    headerIconIG.style.backgroundColor="#A6ACAD";
    headerIconIG.style.border = '0.1px solid white';
    headerIconWA.style.border = '0.1px solid white';
    headerAdditionText.style.color = '#7a7a7d';
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

    if(pageYOffset < 5){
        for (let headerItemLink of headerItemLinks){
          
            headerItemLink.style.color = 'white';
            headerItemLink.addEventListener('mouseover', function(){
                headerItemLink.style.textShadow='0 0 .65px #ffffff, 0 0 .65px #ffffff';
            })
            headerItemLink.addEventListener('mouseout', function(){
                headerItemLink.style.textShadow='none';
            })
        }
        
        headerLogo.classList.remove('header__addition-logo--scroll');
        headerLogo.classList.add('header__addition-logo--light');
    
    headerPopupBtb.classList.remove('header__popup-btn--scroll');
    headerPopupBtb.classList.add('header__popup-btn--top');

        headerAdditionText.style.color = 'white';
        header.style.backgroundColor='transparent';
      
        headerIconWA.style.backgroundColor="transparent";
        headerIconIG.style.backgroundColor="transparent";
        headerIconIG.style.border = 'none';
        headerIconWA.style.border = 'none';
  

    }
};


}


export {scrollHeader as scrollHeader}