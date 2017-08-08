/**
 * Created by Zachary on 2015/5/11.
 */
var stage;
var canvas;

var cat;

var grid = new Array(9);
var CircleDiameter = 45;
var GridOffsetX = 45;
var GridOffsetY = 300;

var gameState;
var step;
var nd = 0;

var DIR = {
    L:1,
    U_L:2,
    U_R:3,
    R:4,
    D_R:5,
    D_L:6
}

var STATE = {
    N:-1,
    S:0,
    P:1,
    E:2
}

var per = 1;

window.onload = function(){
	if(!IsPC()){
		var screenWidth = 980;//screen.width;
    	per = /*screen.width*/980 / 480 ;
	}else{

	}
    
    document.body.style.zoom= parseInt(per * 100).toString() +  '% ';

    CircleDiameter = 45 * per;
    GridOffsetX = 45 * per;
    GridOffsetY = 300 * per;


    //document.write('分辨率为:\n' + screen.width + '*' + screen.height + ' pixels');
    //console.log(per);
    stage = new createjs.Stage("myCanvas");

    createjs.Ticker.framerate =30;
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
    createjs.Ticker.addEventListener("tick",handleTick);

    canvas = document.getElementById("myCanvas");
    canvas.addEventListener("mousedown", handleMouseDown);

    //createMap();
    //createCat();
    nandu();
}

function handleTick(event){
    stage.update(event);
}

function handleMouseDown(event){
    var origX = event.pageX - canvas.offsetLeft - GridOffsetX + CircleDiameter/2;
    var origY = event.pageY - canvas.offsetTop - GridOffsetY + CircleDiameter/2;

    if(gameState == STATE.S){

        enter();

    }else if(gameState == STATE.P){
        if(origY > 0 && origY < CircleDiameter * 9  ){
            var row = parseInt(origY/CircleDiameter);
            var offset = row%2 ? CircleDiameter/2 : 0;

            if(origX > offset && origX < CircleDiameter * 9 + offset){
                var col = parseInt((origX - offset)/CircleDiameter);

                var circle = grid[row][col];

                if(circle.type == Circle.TYPE_UNSELECTED){
                    step++;
                    stage.removeChild(circle);
                    addCircle(row, col, Circle.TYPE_SELECTED);

                    catMove();

                }

            }
        }
    }else if(gameState == STATE.E){
        if(event.pageX > 80 * per && event.pageX < 250 * per && event.pageY > 400 * per && event.pageY < 480 * per){
            stage.removeAllChildren();
            nandu();
        }else if(event.pageX > 280 * per && event.pageX < 450 * per && event.pageY > 400 * per && event.pageY < 480 * per){
            reset();
        }
    }else if(gameState == STATE.N){
        if(event.pageX > 135 * per && event.pageX < 370 * per && event.pageY > 300 * per && event.pageY < 400 * per){
            nd = 0.5;
            start();
        }else if(event.pageX > 135* per && event.pageX < 370* per && event.pageY > 400* per && event.pageY < 500* per){
            nd = 0.3;
            start();
        }else if(event.pageX > 135* per && event.pageX < 370* per && event.pageY > 500* per && event.pageY < 590* per){
            nd = 0.1;
            start();
        }


    }


}

function catMove(){
    var catPos = grid[cat.row][cat.col];
    var walkAble = [];
    for(var i = 1; i <= 6; ++i){
        var p = catPos.getCloseCircleIndex( i );
        if(p){
            var closeCircle = grid[p[0]][p[1]];
            if(closeCircle.type == Circle.TYPE_UNSELECTED){
                walkAble.push(closeCircle);
            }
        }
    }

    if(walkAble.length == 0){
        //结束，赢
        gameOver(true);
    }else{
        var rIndex = parseInt(Math.random() * walkAble.length);
        var finalC = walkAble[rIndex];
        //移动到finalC
        cat.move( finalC.row, finalC.col, finalC.x, finalC.y);
        //console.log(rIndex);
        if(Circle.isBoundary(finalC.row,finalC.col)){
            //结束，输
            gameOver(false);
        }
    }

}

function addCircle(row, col, type){
    var bitmap = new Circle( type, row, col);

    stage.addChildAt(bitmap,0);
    var offset = row%2 ? CircleDiameter/2/per : 0;

    bitmap.regX = CircleDiameter/2/per;
    bitmap.regY = CircleDiameter/2/per;
    //列
    bitmap.x = GridOffsetX/per + CircleDiameter/per * col + offset;
    //行
    bitmap.y = GridOffsetY/per + CircleDiameter/per * row;

    grid[row][col] = bitmap;
}


function createCat(){

    cat = new Cat();
    cat.x = grid[4][4].x;
    cat.y = grid[4][4].y;
    cat.setGridPos(4,4);
    stage.addChild(cat);
    cat.name = "cat";
}

function createMap(){
//    行
    for(var i = 0; i < 9; ++i){
        grid[i] = new Array(9);

        //列
        for(var j = 0; j < 9; ++j){
            //var bitmap = new createjs.Bitmap("res/pot1.png");
            var ranType = Math.random()  < nd ? Circle.TYPE_SELECTED : Circle.TYPE_UNSELECTED;
            if(i == 4 && j == 4){
                ranType = Circle.TYPE_UNSELECTED;
            }
           addCircle(i, j, ranType);
            //var bitmap = new Circle( ranType, i, j);
            //
            //stage.addChild(bitmap);
            //var offset = i%2 ? CircleDiameter/2 : 0;
            //
            //bitmap.regX = CircleDiameter/2;
            //bitmap.regY = CircleDiameter/2;
            ////列
            //bitmap.x = GridOffsetX + CircleDiameter * j + offset;
            ////行
            //bitmap.y = GridOffsetY + CircleDiameter * i;
            //
            //grid[i][j] = bitmap;
        }

    }
}

////***************************************************************************************
function nandu(){
    gameState = STATE.N;
    var img1 = new createjs.Bitmap("res/nc.png");
    stage.addChild(img1);
    img1.name = "startImg";
    img1.x = 135;
    img1.y = 300;
    var img2 = new createjs.Bitmap("res/eh.png");
    stage.addChild(img2);
    img2.name = "startImg";
    img2.x = 135;
    img2.y = 400;
    var img3 = new createjs.Bitmap("res/sjb.png");
    stage.addChild(img3);
    img3.name = "startImg";
    img3.x = 135;
    img3.y = 500;

}

function start(){
    stage.removeAllChildren();
    gameState = STATE.S;
    //开始界面
    var img = new createjs.Bitmap("res/btn_start.png");
    stage.addChild(img);
    img.name = "startImg";
    img.x = 50;
    img.y = 200;
}

function enter(){
    stage.removeChild(stage.getChildByName("startImg"));
    gameState = STATE.P;
    step = 0;
    createMap();
    createCat();
}

function gameOver(win){
    gameState = STATE.E;
    //结束画面
    var pic;
    if(win){
        pic = "res/victory.png";
        var data = {
            framerate:15,
            images: ["res/weizhu.png"],
            frames:{width:64,height:93,regX:32,regY:93},
            animations:{run:[0,14]}
        }

        var spriteSheet = new createjs.SpriteSheet(data);
        var animation = new createjs.Sprite( spriteSheet, "run");
        stage.addChild(animation);
        animation.x = 240;
        animation.y = 750;
        stage.removeChild(stage.getChildByName("cat"));
    }else{
        pic = "res/failed.png";
        cat.move( 0, 0, 240, 750);
    }

    var img = new createjs.Bitmap(pic);
    stage.addChild(img);
    img.x = 10;
    img.y = 200;
    var text = new createjs.Text("一共用了" + step + "步!", "30px Arial", "#000000");
    stage.addChild(text);
    text.x = 150;
    text.y = 360;
    var imgBut1 = new createjs.Bitmap("res/shareBTN.png");
    stage.addChild(imgBut1);
    imgBut1.x = 30;
    imgBut1.y = 400;
    var imgBut2 = new createjs.Bitmap("res/replay.png");
    stage.addChild(imgBut2);
    imgBut2.x = 230;
    imgBut2.y = 400;

}

function reset(){
    ///////清空当前场景
    stage.removeAllChildren();

    enter();
}