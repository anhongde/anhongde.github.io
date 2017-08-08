/**
 * Created by Zachary on 2015/6/25.
 */
var StartScene = cc.Scene.extend({

    onEnter:function () {
        this._super();

        var size = cc.director.getWinSize();
        var sprite = cc.Sprite.create(res.St_BG);
        sprite.setPosition(size.width / 2, size.height / 2);
        sprite.setScale(1);
        this.addChild(sprite, 0);


        var startItem = new cc.MenuItemImage(
            res.Start_Btn,
            res.Start_Btn,
            function(){
                cc.log("xxxxx")
                cc.director.runScene(new cc.TransitionFade(1.5,new BubbleScene(),cc.color.BLACK) );
            }
        );

        startItem.attr(
            {
                x: size.width/2,
                y: size.height/2-100,
                anchorX:0.5,
                anchorY:0.5
            }
        );


        var menu = new cc.Menu(startItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu);
        //var label = cc.LabelTTF.create("Hello World", "Arial", 40);
        //label.setPosition(size.width / 2, size.height / 2);
        //this.addChild(label, 1);
    }

});