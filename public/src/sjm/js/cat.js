/**
 * Created by Zachary on 2015/5/14.
 */
function Cat(row, col, catched){
    this.row = row;
    this.col = col;
    this.catched = catched;
    this.init();
}

Cat.prototype = new createjs.Sprite();

Cat.prototype.init = function(){
    var data = {
        framerate:15,
        images: ["res/stay.png"],
        frames:{width:61,height:93,regX:30,regY:93},
        animations:{run:[0,15]}
    }

    var spriteSheet = new createjs.SpriteSheet(data);
    createjs.Sprite.call(this, spriteSheet, "run");

}

Cat.prototype.setGridPos = function(r, c){
    this.col = c;
    this.row = r;
}

Cat.prototype.move = function( r, c, x, y){
    this.setGridPos( r,c);
    this.x = x;
    this.y = y;
}