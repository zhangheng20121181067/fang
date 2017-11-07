/**
 * Created by zh on 2017/5/26.
 */
$(function() {
    $(".nav>ul>li").find("a.five").addClass("collan").parents("li").siblings().children().removeClass("collan");


    console.log($(document).height())
    console.log($('html').height())
    console.log($("body").height())


});