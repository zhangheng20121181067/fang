/**
 * Created by zh on 2017/5/26.
 */
$(function() {
    $(".nav>ul>li").find("a.two").addClass("collan").parents("li").siblings().children().removeClass("collan");


    $(".footer .code img").attr("src","../images/footercode.jpg")
});