/**
 * Created by Zachary on 2015/6/25.
 */
var game = game || {};

window.onload = function(){
    cc.game.onStart = function(){
        //load resources
        cc.LoaderScene.preload(g_resource, function () {

            cc.director.runScene(new StartScene());
        }, this);
    };
    cc.game.run("gameCanvas");
};

game.checkCircleCollision = function(p1, p2, r1, r2){
    var r = Math.pow((p2.x - p1.x),2) + Math.pow((p2.y - p1.y),2) <= Math.pow((r1 + r2),2);
    return r;
};




var leve1 = [
    [1,3,4,2,5,6],
    [2,5,3,4,1,5],
    [0,0,2,3,5,1]
];

for(var i = 0; i < leve1.length; ++i){
    for(var j = 0; j < leve1[i].length; ++j){

    }
}