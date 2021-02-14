$(document).ready(function(){
   
     

    $('ul.aboutUs_objects_ul').on('click', 'li:not(.aboutUs_objects_ul_li_active)', function() {
      $(this)
          .addClass('aboutUs_objects_ul_li_active').siblings().removeClass('aboutUs_objects_ul_li_active')
          .closest('div.aboutUs_objects').find('div.aboutUs_objects_wrapper').removeClass('aboutUs_objects_wrapper_active').eq($(this).index()).addClass('aboutUs_objects_wrapper_active');
    }); 
    // $('ul.slider__tabs').on('click', 'li:not(.slider__tab_active)', function() {
    //   $(this)
    //       .addClass('slider__tab_active').siblings().removeClass('slider__tab_active')
    // }); 


  
    
});