
const scrollHeader = function(){
    
 const header = document.querySelector('.header');
 const headerItemLinks = document.querySelectorAll('.header__item-link');
 const headerIconWA = document.querySelector('.site-socials__item--WA');
 const headerIconIG = document.querySelector('.site-socials__item--IG');
const headerAdditionText = document.querySelector('.header__addition-text');
 document.addEventListener('scroll', siteScroll)
 function siteScroll (){
    header.style.backgroundColor='hsla(0deg,0%,100%,.9)';
    header.style.transition='1s'
    //header.style.position = 'sticky';
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
   // header.style.transition = '0.3s'
    if(pageYOffset < 50){
        for (let headerItemLink of headerItemLinks){
            headerItemLink.style.color = '#edebf6';
            headerItemLink.addEventListener('mouseover', function(){
                headerItemLink.style.textShadow='none';
            })
            headerItemLink.addEventListener('mouseout', function(){
                headerItemLink.style.textShadow='none';
            })
            //headerItemLink.style.textShadow='none';
        }
        headerAdditionText.style.color = '#edebf6';
        header.style.backgroundColor='transparent';
      //  header.style.position = 'absolute';
        headerIconWA.style.backgroundColor="transparent";
        headerIconIG.style.backgroundColor="transparent";
        headerIconIG.style.border = 'none';
        headerIconWA.style.border = 'none';
       

    }
};


}


export {scrollHeader as scrollHeader}