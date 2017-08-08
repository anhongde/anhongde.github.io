/**
 * Created by Zachary on 2015/6/26.
 */
var Bubble = cc.Sprite.extend({
    type:0,
    row:0,
    col:0,

    flyRadius: 0,

    isMoving:false,

    ctor:function(type){
        this.type = type;
        var pic = res["Bubble_" + type];
        this._super(pic);
    },

    fly:function(pos){
        this.flyRadius = Math.atan2(pos.y - this.y , pos.x - this.x);
        this.isMoving = true;

    },

    stopFly:function(){
        this.isMoving = false;
    },

    fall:function(){
        this.scheduleUpdate();
        this.isMoving = true;
        this.flyRadius = 1.5 * Math.PI;

    },

    //得到周围泡泡坐标数组
    getRoundPos:function(dir){
        var grid = null;

        var r = this.row;
        var c = this.col;

        switch (dir){
            case 0:
                grid = [r, c-1];
                break;
            case 1:
                var nc = r%2 ? c : c-1;
                grid = [r-1, nc];
                break;
            case 2:
                var nc = r%2 ? c+1 : c;
                grid = [r-1, nc];
                break;
            case 3:
                grid = [r, c+1];
                break;
            case 4:
                var nc = r%2 ? c+1 : c;
                grid = [r+1, nc];
                break;
            case 5:
                var nc = r%2 ? c : c-1;
                grid = [r+1, nc];
                break;
        }

        if(grid){
            if(grid[0] < 0 || grid[0] >= game.MaxR || grid[1] < 0 || grid[1] >= game.MaxC){
                grid = 0;
            }
        }

        return grid;
    },

    //修正球队列位置
    reachBound:function(){

        //0行
        var col = Math.round( (this.x - game.Bound.L + game.BubbleD/2) / game.BubbleD );
        cc.log(col);
        this.x = game.Bound.L + game.BubbleD * col;
        cc.log(this.x);
        this.y = game.Bound.U;
        cc.log(this.y);
        this.col = col;
        cc.log(this.col);
        this.row = 0;
        cc.log();
    },


    update:function(){
        var bStop = false;

        var dx = game.FlySpeed * Math.cos(this.flyRadius);
        var dy = game.FlySpeed * Math.sin(this.flyRadius);

        if(dx > 0 && this.x + dx > game.Bound.R){
            dx = game.Bound.R - this.x;
            cc.log(dx);
            this.flyRadius = Math.PI - this.flyRadius;
        }else if(dx < 0 && this.x + dx < game.Bound.L){
            dx = game.Bound.L - this.x;
            cc.log(dx);
            this.flyRadius = Math.PI - this.flyRadius;
        }

        if(dy > 0 && this.y + dy > game.Bound.U){
            dy = game.Bound.U - this.y;
            this.stopFly();

            //修正球队列位置
            this.reachBound();

            bStop = true;
            return bStop;
        }else if(dy < 0 && this.y + dy < game.Bound.D){
            this.stopFly();
            this.removeFromParent(true);
            this.unscheduleUpdate();
            bStop = true;
            return bStop;
        }

        this.x += dx;
        this.y += dy;

        return bStop;
    }

});