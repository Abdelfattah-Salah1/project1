$(document).ready( function(){

    $(window).scroll( function() {
        var scrolltop = $(window).scrollTop();
        
        if ( scrolltop > 200) {
            $(".top").addClass('show')
        }
        else {
            $(".top").removeClass('show');
        }
    })

    $(".top").on('click' , function() {
        $("html,body").animate({
            scrollTop: 0
        })
    })


});


