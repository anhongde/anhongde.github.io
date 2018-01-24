/**
 * Created by g on 2018/1/19.
 */

/*页面加载函数*/
$(function(){
    $('.cover button').click(function(){
        $('.cover').hide();
        init();
    });
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
    setInterval(function(){garden.render()},Garden.options.growSpeed);
    if (!document.createElement('canvas').getContext) {
        var msg = document.createElement("div");
        msg.id = "errorMsg";
        msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+";
        document.body.appendChild(msg);
        $("#code").css("display", "none")
        $("#copyright").css("position", "absolute");
        $("#copyright").css("bottom", "10px");
        document.execCommand("stop");
    } else {
        setTimeout(function () {
            adjustWordsPosition();
            startHeartAnimation();
        }, 50);
        adjustCodePosition();
        $("#code").typewriter();
    }

    inputName = $('.cover input').val();
    //console.log(inputName);


//setTimeout(function(){
    //    $('#mainDiv header span').addClass('hover');
    //},500);
}

//重置函数
var resets = {
    1: function(){

    },
};