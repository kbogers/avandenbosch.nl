$(function(){
    $(".btn-primary").click(function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact-form").offset().top
        }, 1000);
    });

    

});