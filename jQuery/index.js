$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 300 ) {
            $('.to-top').removeClass('hide')
        } else {
            $('.to-top').addClass('hide')
        }
    });

    $('.to-top').click(function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    $('.aside-btn').click(function(event){
        $('body').toggleClass('open');
        // alert("測試測試測試");
    });
});
