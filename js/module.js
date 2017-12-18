/**
 * Created by zh on 2017/5/26.
 */
$(function() {
    $(".nav>ul>li").find("a.two").addClass("collan").parents("li").siblings().children().removeClass("collan");

    $(".lei .lei-func").find("li").on("click",function(){
        var dataRole=$(this).attr("data-role");
        $('html,body').animate({scrollTop:$('#'+dataRole).offset().top}, 1000);
    });



    $(".footer .code img").attr("src","../images/footercode.jpg")
});