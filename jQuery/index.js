$(document).ready(function(){
    // 這邊是滑鼠滾輪事件
    $(window).scroll(function(){
        if ($(window).scrollTop() > 300 ) {
            $('.to-top').removeClass('hide')
        } else {
            $('.to-top').addClass('hide')
        }
    });
    // 點擊後回到最上面
    $('.to-top').click(function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
    // 點擊後側邊欄會出現
    $('.aside-btn').click(function(event){
        event.preventDefault();
        $('body').toggleClass('open');
        // alert("測試測試測試");
        $('.click-to-hide').toggleClass('open')
        // $(body).off('mousewheel DOMMouseScroll')
    });

    // 燈箱效果
    $('.click-to-hide').click(function(event){
        $('body').removeClass('open')
    });
});
