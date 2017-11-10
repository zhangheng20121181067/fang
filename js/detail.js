/**
 * Created by zh on 2017/5/26.
 */
$(function() {
    //头部导航颜色
    $(".nav>ul>li").find("a.two").addClass("collan").parents("li").siblings().children().removeClass("collan");

    //项目详情显示
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        return r != null ? unescape(r[2]) : null;
    }
    var indexShow= GetQueryString("index");
    //console.log(indexShow);
    $(".content").find(".setionone").eq(indexShow-1).removeClass("hide").siblings(".setionone").addClass("hide");
    $(".content").find(".setiontwo").eq(indexShow-1).removeClass("hide").siblings(".setiontwo").addClass("hide");

    //产品详情与服务详情切换
    $(".nav .nav-item").on("click",function(){
        var $index=$(this).index();
        console.log($index);
        $(this).addClass("on").siblings().removeClass("on");
        $(".setiontwo").eq(indexShow-1).find(".contentchange").find(".content-item").eq($index).removeClass("hide").siblings().addClass("hide");
    });

    //产品详情大图与小图切换
    var $smallimgIndex=0;
    $(".smallimglist .item").on("click",function(){
       /* $smallimgIndex=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".bigimglist").find("img").eq($smallimgIndex).removeClass("hide").siblings().addClass("hide");*/
        $(this).addClass("on").siblings().removeClass("on");
        var imgsrc=$(this).find("img").attr("src");
        console.log(imgsrc);
        $(".bigimglist").find("img").attr("src",imgsrc);
    });


    //底部code图
    $(".footer .code img").attr("src","../../images/footercode.jpg")
});