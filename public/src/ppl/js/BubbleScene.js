/**
 * Created by Zachary on 2015/6/25.
 */
game.Shoot_Pos = {x:180, y:80};
game.Ready_Pos = {x:100, y:40};
game.Bound = {
    L:25,
    R:340,
    U:540,
    D:80
};

game.BubbleD = 32;
game.MaxR = 15;
game.MaxC = 10;

game.FlySpeed = 10;

var BubbleScene = cc.Scene.extend({

    fireBubble:null,
    waitBubble:null,
    shooter:null,

    bubbleArr: [],

    availbleBubTypes:[],

    //可以碰撞的泡泡数组
    collisionBubblesArr:[],

    fireCold:false,

    ctor:function(){
        this._super();

        this.availbleBubTypes = [0,1,2,3,4,5,6,7];

        var size = cc.director.getWinSize();
        var sprite = cc.Sprite.create(res.Pl_BG);
        sprite.setPosition(size.width / 2, size.height / 2);
        sprite.setScale(1);
        this.addChild(sprite, 0);

        this.createShooter();
        this.createShootBubble();
        this.createReadyBubble();
        this.addBubbles();
        this.checkAllBubbles();
        this.addEventListener();
        this.scheduleUpdate();

    },

    onEnter:function () {
        this._super();


    },

    onExit:function(){
        this.unscheduleUpdate();
    },


    checkAllBubbles:function(){
        this.collisionBubblesArr.splice(0, this.collisionBubblesArr.length);
        for(var i = 0; i < game.MaxR; ++i){
            next :for(var j = 0; j < game.MaxC; ++j){
                var canReach = false;

                var bubble = this.bubbleArr[i][j];


                if(bubble){
                    bubble.isMark = false;
                    bubble.fallMark = false;
                    for(var k = 0; k < 6; ++k){
                        var pos = bubble.getRoundPos(k);
                        if(pos){
                            if(!this.bubbleArr[pos[0]][pos[1]]){
                                canReach = true;
                                this.collisionBubblesArr.push(bubble);
                                continue next;
                            }
                        }
                    }
                }
            }
        }
    },


    flyBegin: function(pos){
        if(!this.fireCold){
            this.fireCold = true;
            this.fireBubble.fly(pos);
        }
    },


    flyEnd:function(){
        this.fireBubble = this.waitBubble;
        this.waitBubble.setPosition(game.Shoot_Pos.x,game.Shoot_Pos.y);
        this.createReadyBubble();

        this.fireCold = false;
    },


    update:function(dt){
        if(this.fireBubble && this.fireBubble.isMoving){

            var hasStop = this.fireBubble.update();

            if(hasStop){
                this.flyEnd();
                this.bubbleArr[this.fireBubble.row][this.fireBubble.col] = this.fireBubble;
            }

            this.checkCollision(this.fireBubble);
        }
    },

    checkCollision: function(flyBubble){

        for(var i = 0; i < this.collisionBubblesArr.length; ++i){
            var checkBub = this.collisionBubblesArr[i];
            if(checkBub){
                var r = game.checkCircleCollision({x: flyBubble.x, y: flyBubble.y}, {x: checkBub.x, y: checkBub.y}, game.BubbleD/2, game.BubbleD/2);
                if(r){
                    //碰到
                    flyBubble.stopFly();
                    this.flyEnd();
                    this.checkBubNewPos(flyBubble);

                    this.checkElimate(flyBubble);
                    this.checkAloneBubbles();
                    //所有判断结束，重置
                    this.checkAllBubbles();
                    r = true;
                    break;
                }
            }
        }

        return r;
    },

    //消除同色球
    checkElimate:function(bubble){
        //把自己放入数组
        bubble.isMark = true;
        var elemateArr = [bubble];

        var that = this;
        function check6Round(bubble){
            for(var i = 0; i < 6; ++i){
                var pos = bubble.getRoundPos(i);
                if(pos){
                    var roundBub = that.bubbleArr[pos[0]][pos[1]];
                    var isSame = (roundBub && !roundBub.isMark) ? bubble.type == roundBub.type : false;
                    if(isSame){
                        roundBub.isMark = true;
                        elemateArr.push(roundBub);
                        check6Round(roundBub);
                    }
                }
            }
        }

        check6Round(bubble);

        //超过3个相同消除
        if(elemateArr.length >= 3){
            for(var i = 0; i < elemateArr.length; ++i){
                var bub = elemateArr[i];

                this.bubbleArr[bub.row][bub.col] = null;
                bub.removeFromParent(true);
            }
        }
    },


    //检测悬空
    checkAloneBubbles:function(){
        var that = this;

        for(var p = 0; p < game.MaxR; ++p){
            for(var i = 0; i < game.MaxC; ++i){
                var row0Bub = this.bubbleArr[p][i];

                if(row0Bub){
                    if(p == 0){
                        row0Bub.fallMark = true;
                        for(var q = 0; q < 6; ++q){
                            var pos = row0Bub.getRoundPos(q);
                            if(pos && that.bubbleArr[pos[0]][pos[1]]){
                                var nextBub = that.bubbleArr[pos[0]][pos[1]];
                                if(nextBub && !nextBub.fallMark){
                                    //cc.log("xunhuan"+nextBub.row+" -"+nextBub.col);
                                    nextBub.fallMark = true;
                                    //setFix(nextBub);
                                }
                            }
                        }
                    }else{
                        for(var q = 0; q < 6; ++q){
                            var pos = row0Bub.getRoundPos(q);
                            if(pos && that.bubbleArr[pos[0]][pos[1]]){
                                var nextBub = that.bubbleArr[pos[0]][pos[1]];
                                if(nextBub && nextBub.fallMark){
                                    //cc.log("xunhuan"+nextBub.row+" -"+nextBub.col);
                                    row0Bub.fallMark = true;
                                    //setFix(nextBub);
                                }
                            }
                        }
                    }

                    //cc.log("chushi"+row0Bub.row+" -"+row0Bub.col);

                    //setFix(row0Bub);
                }
            }
        }


        //function setFix (bub){
        //    for(i = 0; i < 6; ++i){
        //        var pos = bub.getRoundPos(i);
        //        cc.log("diaoyong" + i);
        //        if(pos){
        //            var nextBub = that.bubbleArr[pos[0]][pos[1]];
        //            if(nextBub && !nextBub.fallMark){
        //                cc.log("xunhuan"+nextBub.row+" -"+nextBub.col);
        //                nextBub.fallMark = true;
        //                setFix(nextBub);
        //            }
        //        }
        //    }
        //}
        for(var i = 0; i < game.MaxR; ++i){
            for(var j = 0; j < game.MaxC; ++j){
                var bub = this.bubbleArr[i][j];


                if(bub && !bub.fallMark){

                    this.bubbleArr[bub.row][bub.col] = 0;
                    bub.fall();
                }
            }
        }

    },


    checkBubNewPos:function(bubble){
        //计算正确的行列
        var row = parseInt((game.Bound.U + game.BubbleD/2 - bubble.y) / game.BubbleD);

        var offset = row%2 ? -game.BubbleD/2 : 0;

        var dx = bubble.x - game.Bound.L + offset;

        var col;
        if(dx < 0){
            col = 0;
        }else if(dx > game.BubbleD * game.MaxC){
            col = game.MaxC - 1;
        }else{
            col = Math.round(dx/game.BubbleD);
        }

        bubble.row = row;
        bubble.col = col;
        //根据行列修正坐标
        var offset = row%2 ? game.BubbleD/2 : 0;
        var x = game.Bound.L + game.BubbleD*col + offset;
        var y = game.Bound.U - game.BubbleD*row;

        bubble.x = x;
        bubble.y = y;

        if(this.bubbleArr[row][col]){
            cc.log("数组覆盖。");
        }else{
            this.bubbleArr[row][col] = bubble;
        }

    },

    addEventListener: function(){

        var that = this;
        var eventListener = cc.EventListener.create({
            event: cc.EventListener.MOUSE,
            onMouseDown: function(event){
                var pos = event.getLocation();
                //cc.log("dd" , p.x, p.y);
                that.onMouseDown(pos);


            },

            onMouseMove: function(event){
                var pos = event.getLocation();
                //cc.log("mm" , pos.x, pos.y);
                that.onMouseMove(pos);


            }

        });

        cc.eventManager.addListener(eventListener,this);

    },

    onMouseMove: function(pos){
        var radius = Math.atan2(pos.y - game.Shoot_Pos.y, pos.x - game.Shoot_Pos.x);
        this.shooter.rotation = 90 - radius * 180 / Math.PI;
    },

    onMouseDown:function(pos){
        this.flyBegin(pos);
    },


    addBubbles:function(){
        for(var i = 0; i < game.MaxR; ++i){
            this.bubbleArr[i] = [];
        }
        for(var i = 0;i < 2; ++i){

            var offset = i%2 ? game.BubbleD/2 : 0;
            for(var j = 0 ; j < game.MaxC ; ++j){
                var type =  parseInt(Math.random() * 8);
                var x = game.Bound.L + game.BubbleD * j + offset;
                var y = game.Bound.U - game.BubbleD * i;

                var bubble = this.addOneBubble(type, x, y);
                bubble.row = i;
                bubble.col = j;

                this.bubbleArr[i][j] = bubble;
            }
        }

    },

    createShooter:function(){

        this.shooter = new cc.Sprite(res.Shooter);
        this.shooter.x = game.Shoot_Pos.x;
        this.shooter.y = game.Shoot_Pos.y;
        this.shooter.anchorY = 0.4;
        this.addChild(this.shooter);
    },


    createShootBubble:function(){

        var random = parseInt(Math.random() * this.availbleBubTypes.length );
        var type = this.availbleBubTypes[random];
        this.fireBubble = this.addOneBubble(type,game.Shoot_Pos.x,game.Shoot_Pos.y);
    },


    createReadyBubble:function(){

        var random = parseInt(Math.random() * this.availbleBubTypes.length );
        var type = this.availbleBubTypes[random];
        this.waitBubble = this.addOneBubble(type,game.Ready_Pos.x,game.Ready_Pos.y);
    },


    addOneBubble:function(type, x, y){
        var bubble = new Bubble(type);
        bubble.attr({
           x:x,
            y:y
        });

        this.addChild(bubble);

        return bubble;
    }






});