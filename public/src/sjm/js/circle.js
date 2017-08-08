/**
 * Created by Zachary on 2015/5/13.
 */

function Circle(type, row, col){

    this.row = row;
    this.col = col;
    this.type;
    this.setType(type);
}

Circle.prototype = new createjs.Bitmap();

Circle.TYPE_UNSELECTED = 0;
Circle.TYPE_SELECTED = 1;

Circle.prototype.setType = function(type){
    this.type = type;

    switch (type){
        case Circle.TYPE_UNSELECTED:
            createjs.Bitmap.call(this,"res/pot1.png");
            break;

        case Circle.TYPE_SELECTED:
            createjs.Bitmap.call(this,"res/pot2.png");
            break;
    }
}

Circle.isBoundary = function (r, c){
    var ret = false;
    if(r == 0 || c == 0 || r == 8 || c == 8 ){
        ret = true;
    }
    return ret;
}

Circle.prototype.getCloseCircleIndex = function(dir){
    var ret = null;
    var r = this.row;
    var c = this.col;

    switch (dir){
        case DIR.L:
            ret = [ r, c-1];
            break;
        case DIR.U_L:
            var nc = r%2 ? c :c-1;
            ret = [ r-1, nc ];
            break;
        case DIR.U_R:
            var nc = r%2 ? c+1 :c;
            ret = [ r-1,nc ];
            break;
        case DIR.R:
            ret = [ r, c+1 ];
            break;
        case DIR.D_R:
            var nc = r%2 ? c+1 :c;
            ret = [ r+1, nc ];
            break;
        case DIR.D_L:
            var nc = r%2 ? c :c-1;
            ret = [ r+1,nc ];
            break;
    }

    if(ret){
        if(ret[0] < 0 || ret[0] > 8 || ret[1] < 0 || ret[1] > 8){
            ret = null;
        }
    }

    return ret;
};

