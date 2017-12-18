/**
 * Created by zh on 2017/12/15.
 */
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    return r != null ? unescape(r[2]) : null;
}
$(function(){
    var index=GetQueryString("index");

    $(".main").find(".item").eq(index-1).removeClass("hide").siblings().addClass("hide");
});