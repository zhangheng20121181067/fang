/**
 * Created by zh on 2017/5/26.
 */
$(function() {
  /*  $(".header a").on("mouseover",function(){
        $index=$(this).index();
        $(this).addClass("collan").parents("li").siblings().children().removeClass("collan");
    });*/

    //轮播图
    var swiperbanner = new Swiper('.swiper-container', {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
    var swiperscreen = new Swiper('.swiper-container-screen', {
        autoplay: 9000,
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

   /* //场景图切换
    $(".site li").on("mouseover",function(){
        var $index=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".site li.on").find(".bigbox").animate({
            "marginTop":"-60px"
        },800);

       // $(".tablist").find(".tab").eq($index).removeClass("hide").siblings().addClass("hide");
        $(".tablist").stop().animate({"left":-$index*1160},500)
    });*/
    //场景图切换
    $(".site li:first-child").find(".bigbox").animate({
        "marginTop":"-45px"
    },600);
    $(".site li").hover(function(){
        var $index=$(this).index();
        //if(!$(this).is(":animated")) {
            $(this).addClass("on").find(".bigbox").stop(true).animate({
                "marginTop": "-45px"
            }, 500).parent().siblings().removeClass("on").find(".bigbox").stop(true).animate({
                "marginTop": "0px"
            }, 500);
       // }


        // $(".tablist").find(".tab").eq($index).removeClass("hide").siblings().addClass("hide");
        $(".tablist").stop().animate({"left":-$index*1160},500)
    });


    //公司图切换
    var $companyIndex=0;
    $(".logolist img").on("mouseover",function(){
        $companyIndex=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".desclist").find("p").eq($companyIndex).removeClass("hide").siblings().addClass("hide");
    });

    $(".button-left").on("click",function(){
        $companyIndex--;
        if($companyIndex<0){
            $companyIndex=5;
        }
        $(".logolist").find("img").eq($companyIndex).addClass("on").siblings().removeClass("on");
        $(".desclist").find("p").eq($companyIndex).removeClass("hide").siblings().addClass("hide");
    });
    $(".button-right").on("click",function(){
        $companyIndex++;
        if($companyIndex>=6){
            $companyIndex=0;
        }
        $(".logolist").find("img").eq($companyIndex).addClass("on").siblings().removeClass("on");
        $(".desclist").find("p").eq($companyIndex).removeClass("hide").siblings().addClass("hide");
    });


    //优势切换
    $(".advantage .advantage-item").hover(function(){
        var $index=$(this).index();
        //if(!$(this).is(":animated")) {
        $(this).find(".advantage-item-left .bigbox").stop(true).animate({
            "marginTop": "-60px"
        }, 500).parents(".advantage-item").siblings().find(".advantage-item-left .bigbox").stop(true).animate({
            "marginTop": "0px"
        }, 500);
        // }
    });
});