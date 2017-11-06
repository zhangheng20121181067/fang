/**
 * Created by zh on 2017/11/3.
 */
$(function() {
    //颜色切换
   /* $(".header a").on("mouseover", function () {
        $index = $(this).index();
        $(this).addClass("collan").parents("li").siblings().children().removeClass("collan");
    });*/

    $(".subnav a").on("click",function(){
        window.location.href="product.html";
    })
});