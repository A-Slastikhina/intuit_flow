
const scrollHeader = function(){
    
 const header = document.querySelector('.header');
 const headerItemLinks = document.querySelectorAll('.header__item-link');
 const headerIconWA = document.querySelector('.site-socials__item--WA');
 const headerIconIG = document.querySelector('.site-socials__item--IG');
const headerAdditionText = document.querySelector('.header__addition-text');
const headerLogo = document.querySelector('.header__addition-logo');
const headerPopupBtb = document.querySelector('.header__popup-btn');

 document.addEventListener('scroll', siteScroll)
 function siteScroll (){
    header.style.backgroundColor='hsla(0deg,0%,100%,.9)';
    //
    headerLogo.style.backgroundImage = "url('../intuit_flow/img/header/Intuit_Flow_logo-scroll.svg')";
//    headerLogo.style.backgroundImage = "url('../img/header/Intuit_Flow_logo-scroll.svg')";
   //

   //
//    headerPopupBtb.style.backgroundImage="url('../img/header/header_popup_bth_dark.svg')"
   headerPopupBtb.style.backgroundImage="url('../intuit_flow/img/header/header_popup_bth_dark.svg')"
   //


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

    if(pageYOffset < 50){
        for (let headerItemLink of headerItemLinks){
            headerItemLink.style.color = 'white';
            headerItemLink.addEventListener('mouseover', function(){
                headerItemLink.style.textShadow='0 0 .65px #ffffff, 0 0 .65px #ffffff';
            })
            headerItemLink.addEventListener('mouseout', function(){
                headerItemLink.style.textShadow='none';
            })
        }
        //
      headerLogo.style.backgroundImage = "url('../intuit_flow/img/header/intuit_flow_logo.png')";
        // headerLogo.style.backgroundImage = "url('../img/header/intuit_flow_logo.png')";
        //
    //
         headerPopupBtb.style.backgroundImage="url('../intuit_flow/img/header/header_popup.png')"
        // headerPopupBtb.style.backgroundImage="url('../img/header/header_popup.png')"
    //

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