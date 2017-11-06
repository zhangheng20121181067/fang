/**
 * Created by zh on 2017/5/26.
 */
$(function() {
    $(".nav>ul>li").find("a.four").addClass("collan").parents("li").siblings().children().removeClass("collan");


    $(".lei-site li,.lei-func li").on("click",function(){
        $index=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
    });


    getPageBar();
    //获取分页条
    function getPageBar() {
        //console.log("getPageBar触发了");
        $('.M-box3').pagination({
            //totalData:total,        //如果配置了数据总数和当前一页显示多少条数据，总页数会自动计算，这种情况下再配置总页数无效。（注：数据总数totalData和每页显示的条数showData必须同时配置，否则默认使用总页数pageCount。）
            pageCount: 3,
            //showData: pageCut,
            jump: true,
            coping: true,
            homePage: '首页',
            endPage: '末页',
            prevContent: '上页',
            nextContent: '下页',
            callback: function (api) {    //回调函数 只要点击分页条时即触发


            }
        });
    }
});