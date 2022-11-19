
const scrollHeader = function(){
    
 const header = document.querySelector('.header');
 const headerItemLinks = document.querySelectorAll('.header__item-link');
 const headerIconWA = document.querySelector('.site-socials__item--WA');
 const headerIconIG = document.querySelector('.site-socials__item--IG');
const headerAdditionText = document.querySelector('.header__addition-text');
 document.addEventListener('scroll', siteScroll)
 function siteScroll (){
    header.style.backgroundColor='hsla(0deg,0%,100%,.5)';
    header.style.transition='1s'
    //header.style.position = 'sticky';
    headerIconWA.style.backgroundColor="#A6ACAD";
    headerIconIG.style.backgroundColor="#A6ACAD";
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
   // header.style.transition = '0.3s'
    if(pageYOffset < 50){
        for (let headerItemLink of headerItemLinks){
            headerItemLink.style.color = '#edebf6';
        }
        headerAdditionText.style.color = '#edebf6';
        header.style.backgroundColor='transparent';
      //  header.style.position = 'absolute';
        headerIconWA.style.backgroundColor="transparent";
        headerIconIG.style.backgroundColor="transparent";

    }
};


}


export {scrollHeader as scrollHeader}