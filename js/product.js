/**
 * Created by zh on 2017/5/26.
 */
$(function() {
    $(".nav>ul>li").find("a.two").addClass("collan").parents("li").siblings().children().removeClass("collan");

    $(".nav .nav-item").on("click",function(){
        $index=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".contentchange").find(".content-item").eq($index).removeClass("hide").siblings().addClass("hide");
    });

    //切换
    var $smallimgIndex=0;
    $(".smallimglist .item").on("click",function(){
        $smallimgIndex=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".bigimglist").find("img").eq($smallimgIndex).removeClass("hide").siblings().addClass("hide");
    });

});