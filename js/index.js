/**
 * Created by zh on 2017/5/26.
 */
$(function() {
    $(".header a").on("mouseover",function(){
        $index=$(this).index();
        $(this).addClass("collan").parents("li").siblings().children().removeClass("collan");
    });

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

    //场景图切换
    $(".site li").on("mouseover",function(){
        $index=$(this).index();
        console.log($index);
        $(this).addClass("collan").siblings().removeClass("collan");
       // $(".tablist").find(".tab").eq($index).removeClass("hide").siblings().addClass("hide");
        $(".tablist").stop().animate({"left":-$index*1200},500)
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
    })
});