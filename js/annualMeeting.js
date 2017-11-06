/**
 * Created by zh on 2017/5/26.
 */
$(function() {
    $(".nav>ul>li").find("a.three").addClass("collan").parents("li").siblings().children().removeClass("collan");

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

});