/**
 * Created by zh on 2017/5/26.
 */
$(function() {
    $(".nav>ul>li").find("a.three").addClass("collan").parents("li").siblings().children().removeClass("collan");

    //第一部分图片切换
    $(".bigpic .left1").hover(
        function(){
            $(".bigpic .center1,.bigpic .right2").removeClass("hide");
            $(".bigpic .right1").addClass("hide");
        },function(){
            $(".bigpic .center1,.bigpic .right2").addClass("hide");
            $(".bigpic .right1").removeClass("hide");
        }
    );
    $(".bigpic .right1").hover(
        function(){
            $(".bigpic .center2,.bigpic .left2").removeClass("hide");
            $(".bigpic .left1").addClass("hide");
        },function(){
            $(".bigpic .center2,.bigpic .left2").addClass("hide");
            $(".bigpic .left1").removeClass("hide");
        }
    );

    //‘好好办’‘简单办’解决方案切换
    $(".solution .tabs").find(".tab-item").on("click",function(){
        var $index=$(this).index();
       $(this).addClass("on").siblings().removeClass("on");
        $(".solution .contentchange").find(".contentlist").eq($index).removeClass("hide").siblings().addClass("hide");;
    })

});