$(document).ready(function(){
	           
	$(window).scroll ( function() {
	
		var scrolletop = $(window).scrollTop();
	
		if ( scrolletop > 500) {
			$(".scrolltotop").addClass('show');
                              $("nav").addClass('header-scroll');
                              $(".logo").addClass('logo-scroll');
                              $(".iconn").addClass('iconn-scroll');
		}
		else {
			$(".scrolltotop").removeClass('show');
                              $("nav").removeClass('header-scroll');
          		$(".logo").removeClass('logo-scroll');
			$(".iconn").removeClass('iconn-scroll');

                         
		}	
	});  
     
           $(".scrolltotop").on('click' , function(){
                $("html,body").animate({
                    scrollTop: 0   
                }, 1000);
           }); 
//     
//     // dynamic tabs
//     
//          $("button").click(function(){
//               
//               $(this).addClass('active').siblings().removeClass('active')
//
//              var farag = $(this).attr("test");
//
//              $("#"+farag).fadeIn().siblings().hide()
//
//          });
//     
    $(".preloader").delay(1000).fadeOut();
});