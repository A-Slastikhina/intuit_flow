const myNanogallery2 = function(){
    jQuery("#my_nanogallery2").nanogallery2({
        thumbnailHeight:  200,
        thumbnailWidth:   'auto',
        thumbnailBorderHorizontal: 0,
        thumbnailL1BorderHorizontal:0,
        thumbnailBorderVertical: 0,
        thumbnailL1BorderVertical:0,
          thumbnailGutterWidth : 10,
          thumbnailGutterHeight : 10,
          thumbnailL1GutterWidth: 10,
          thumbnailL1GutterHeight:10, 
        items: [
            // { src: '../img/home/home_about/photo1_desktop.svg', srct: '../img/home/home_about/photo1_desktop.svg', title: '' },
      
            // { src: '../img/home/home_about/photo3_mobile.svg', srct: '../img/home/home_about/photo3_mobile.svg', title: '' },
            // { src: '../img/home/home_about/photo2_desktop.svg', srct: '../img/home/home_about/photo2_desktop.svg', title: '' },
            // { src: '../img/home/home_about/photo-4.svg', srct: '../img/home/home_about/photo-4.svg', title: '' },
            // { src: '../img/home/home_about/photo-5.svg', srct: '../img/home/home_about/photo-5.svg', title: '' },
            // { src: '../img/home/home_about/photo-6.svg', srct: '../img/home/home_about/photo-6.svg', title: '' }
  
 //
 { src: '../intuit_flow/img/home/home_about/photo1_desktop.svg', srct: '../intuit_flow/img/home/home_about/photo1_desktop.svg', title: '' },
      
 { src: '../intuit_flow/img/home/home_about/photo3_mobile.svg', srct: '../intuit_flow/img/home/home_about/photo3_mobile.svg', title: '' },
 { src: '../intuit_flow/img/home/home_about/photo2_desktop.svg', srct: '../intuit_flow/img/home/home_about/photo2_desktop.svg', title: '' },
 { src: '../intuit_flow/img/home/home_about/photo-4.svg', srct: '../intuit_flow/img/home/home_about/photo-4.svg', title: '' },
 { src: '../intuit_flow/img/home/home_about/photo-5.svg', srct: '../intuit_flow/img/home/home_about/photo-5.svg', title: '' },
 { src: '../intuit_flow/img/home/home_about/photo-6.svg', srct: '../intuit_flow/img/home/home_about/photo-6.svg', title: '' }

  //
  
          ],
       viewerTheme: {
              background:             'hsla(38, 100%, 73%, 0.5)',
              barBackground:          'hsla(38, 100%, 73%, 1)',
              barBorder:              '0px solid #ffffff',
              barColor:               'hsla(38, 100%, 73%, 1)',
              barDescriptionColor:    'hsla(38, 100%, 73%, 1)'
              },
      viewerTools:    {
                  topLeft:    'playPauseButton,fullscreenButton',
                  topRight:   ' zoomButton, closeButton'
              } ,  
      icons:{
              viewerImgPrevious: '<i style="background:rgba(0,0,0,0);font-size:0; background-image:url(../intuit_flow/img/home/home_review/review_arrow_prev.svg);background-repeat:no-repeat; background-size:contain;width:60px;height:60px;" class="nGY2Icon-ngy2_chevron-left"></i>',
              viewerImgNext:'<i style="background:rgba(0,0,0,0);font-size:0; background-image:url(../intuit_flow/img/home/home_review/review_arrow_next.svg);background-repeat:no-repeat; background-size:contain;width:60px;height:60px;" class="nGY2Icon-ngy2_chevron-right"></i>',  // icon for next image (toolbar)
              buttonClose: '<i style="text-shadow:none; color:#6B6BC5;" class="nGY2Icon-ngy2_close2"></i>',         // close button icon
              viewerPlay:  '<i style="text-shadow:none; color:#6B6BC5;" class="nGY2Icon-play"></i>',                // icon play - to start the slideshow (toolbar)
              viewerPause: '<i style="text-shadow:none; color:#6B6BC5;" class="nGY2Icon-pause"></i>',               // icon pause - to stop the slideshow (toolbar)
              viewerFullscreenOn:  '<i style="text-shadow:none; color:#6B6BC5;" class="nGY2Icon-resize-full"></i>',         // icon to switch on fullscreen (toolbar)
              viewerFullscreenOff:  '<i style="text-shadow:none; color:#6B6BC5;" class="nGY2Icon-resize-small"></i>',      // icon to switch off fullscreen (toolbar)
              viewerZoomIn: '<i style="text-shadow:none; color:#6B6BC5;" class="nGY2Icon-ngy2_zoom_in2"></i>',       // icon zoom in (toolbar)
              viewerZoomOut:  '<i  style="text-shadow:none; color:#6B6BC5;" class="nGY2Icon-ngy2_zoom_out2"></i>',      // icon zoom out (toolbar)
                    
         
          }
  
  
          
          });
}

export {myNanogallery2 as myNanogallery2}