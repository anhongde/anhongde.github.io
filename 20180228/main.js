/**
 * Created by g on 2018/1/19.
 */

/*页面加载函数*/
$(function(){
    //init();

    $('.cover button').click(function(){
        $('.cover').hide();
        $('#musicaudio')[0].play();
        init1();

    });
});

function init(){
    statusNow = '#mainDiv';
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
    $('#mainDiv .info ').fadeIn(4500);
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

    inputName = $('.cover input').val() != ''? $('.cover input').val():'朋友';
    $('#inputName').html(inputName);
    //console.log(inputName);


//setTimeout(function(){
    //    $('#mainDiv header span').addClass('hover');
    //},500);
}

function init1(){
    statusNow = '.page1';
    inputName = $('.cover input').val() != ''? $('.cover input').val():'朋友';
    $('.audio_btn').show();

    $('.audio_btn').click(function(){
        if($('.audio_btn').hasClass('play')){
            $('.audio_btn').removeClass('play');
            $('.audio_btn img').attr("src",'img/musicoff.png');
            $('#musicaudio')[0].pause();
        }else {
            $('.audio_btn').addClass('play');
            $('.audio_btn img').attr("src",'img/musicon.png');
            $('#musicaudio')[0].play();
        }
    });


    $('#inputName').html(inputName);
    $('.page1').eq(0).fadeIn(2500);
    $('.u-arrow').show();
    $('.page1 img').eq(2).animate({
        width: "6em",
        right: "6em",
        bottom: 0
    }, 2000 );
    $('.page1 img').eq(3).animate({
        width: "4em",
        right: "7em",
        bottom: 0
    }, 2000 );
    $('.page1 img').eq(4).animate({
        width: "7em",
        right: "4em",
        bottom: 0
    }, 2000 );
    $('.page1 img').eq(5).animate({
        width: "9em",
        right: "0em",
        bottom: 0
    }, 2000 );
    $('.page1 img').eq(6).animate({
        width: "8em",
        right: "0em",
        bottom: 0
    }, 2000 );

    //开启事件绑定滑动
    setTimeout( function(){changeOpen();},1000);


}

//重置函数
var resets = {
    1: function(){

    },
};