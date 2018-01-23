/**
 * Created by g on 2018/1/19.
 */

/*页面加载函数*/
$(function(){
    init();
});

function init(){
    //第一页头文字显示
    /*setTimeout(function(){
        $('#mainDiv header span').eq(0).fadeIn(500);
        setTimeout(function(){
            $('#mainDiv header span').eq(1).fadeIn(500);
            setTimeout(function(){
                $('#mainDiv header span').eq(2).fadeIn(500);
            },300);
        },300);
        setTimeout(function(){
            $('#mainDiv header span').eq(0).addClass('hover');
            setTimeout(function(){
                $('#mainDiv header span').eq(1).addClass('hover');
                setTimeout(function(){
                    $('#mainDiv header span').eq(2).addClass('hover');
                },500);
            },500);
        },500);
    },300);*/
    $('#mainDiv header ').fadeIn(1500);
    //setTimeout(function(){
    //    $('#mainDiv header span').addClass('hover');
    //},500);
}

//重置函数
var resets = {
    1: function(){

    },
};