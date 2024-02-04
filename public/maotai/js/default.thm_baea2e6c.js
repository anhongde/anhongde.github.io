window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","BaseContainer":"resource/eui_skins/BaseContainer.exml","BaseBoxContainer":"resource/eui_skins/BaseBoxContainer.exml","LoadingLayer":"resource/eui_skins/LoadingLayer.exml","LoginLayer":"resource/eui_skins/LoginLayer.exml","GameButton":"resource/eui_skins/GameButton.exml","AnnouncementLayer":"resource/eui_skins/AnnouncementLayer.exml","FloatingTipsLayer":"resource/eui_skins/FloatingTipsLayer.exml","FloatingTipView":"resource/eui_skins/FloatingTipView.exml","SignLayer":"resource/eui_skins/SignLayer.exml","SignItemView":"resource/eui_skins/SignItemView.exml","TimeRewardView":"resource/eui_skins/TimeRewardView.exml","AddressSelectLayer":"resource/eui_skins/AddressSelectLayer.exml","GetMoneyLayer":"resource/eui_skins/GetMoneyLayer.exml","RechargeLayer":"resource/eui_skins/RechargeLayer.exml","AddressItemView":"resource/eui_skins/AddressItemView.exml","AddressInfoLayer":"resource/eui_skins/AddressInfoLayer.exml","RechargeHistoryLayer":"resource/eui_skins/RechargeHistoryLayer.exml","RechargeHistoryItem":"resource/eui_skins/RechargeHistoryItem.exml","RewardLayer":"resource/eui_skins/RewardLayer.exml","ProxyWaitLayer":"resource/eui_skins/ProxyWaitLayer.exml","GameHelpLayer":"resource/eui_skins/GameHelpLayer.exml","GameShareLayer":"resource/eui_skins/GameShareLayer.exml","GameScene":"resource/eui_skins/GameScene.exml","coin":"resource/eui_skins/coin.exml"};generateEUI.paths['resource/eui_skins/AddressInfoLayer.exml'] = window.AddressInfoLayerSkin = (function (_super) {
	__extends(AddressInfoLayerSkin, _super);
	var AddressInfoLayerSkin$Skin1 = 	(function (_super) {
		__extends(AddressInfoLayerSkin$Skin1, _super);
		function AddressInfoLayerSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AddressInfoLayerSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "recharge_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AddressInfoLayerSkin$Skin1;
	})(eui.Skin);

	var AddressInfoLayerSkin$Skin2 = 	(function (_super) {
		__extends(AddressInfoLayerSkin$Skin2, _super);
		function AddressInfoLayerSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","getreg2_png")
					])
			];
		}
		var _proto = AddressInfoLayerSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "getreg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AddressInfoLayerSkin$Skin2;
	})(eui.Skin);

	function AddressInfoLayerSkin() {
		_super.call(this);
		this.skinParts = ["title1_txt","closeBtn","upRoot","submitBtn","downRoot","title2_txt","title3_txt","desc_txt","address_txt","mailBtn","validate_txt","title4_txt","scaleRoot","centerRoot"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.title1_txt_i(),this.upRoot_i(),this.downRoot_i(),this.centerRoot_i()];
	}
	var _proto = AddressInfoLayerSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 1136;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "recharge_bg_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.title1_txt_i = function () {
		var t = new eui.Label();
		this.title1_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "提   币";
		t.textAlign = "center";
		t.textColor = 0xB8C4CF;
		t.width = 320;
		t.x = 160;
		t.y = 56;
		return t;
	};
	_proto.upRoot_i = function () {
		var t = new eui.Group();
		this.upRoot = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.closeBtn_i()];
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "left_pag_btn_png";
		t.x = 27;
		t.y = 24;
		return t;
	};
	_proto.downRoot_i = function () {
		var t = new eui.Group();
		this.downRoot = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 1136;
		t.elementsContent = [this.submitBtn_i()];
		return t;
	};
	_proto.submitBtn_i = function () {
		var t = new GameButton();
		this.submitBtn = t;
		t.anchorOffsetX = 259;
		t.anchorOffsetY = 29;
		t.label = "提交";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 326;
		t.y = -134;
		t.skinName = AddressInfoLayerSkin$Skin1;
		return t;
	};
	_proto.centerRoot_i = function () {
		var t = new eui.Group();
		this.centerRoot = t;
		t.anchorOffsetY = 0;
		t.height = 0;
		t.width = 0;
		t.x = 320;
		t.y = 568;
		t.elementsContent = [this.scaleRoot_i()];
		return t;
	};
	_proto.scaleRoot_i = function () {
		var t = new eui.Group();
		this.scaleRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.title2_txt_i(),this.title3_txt_i(),this._Image2_i(),this.desc_txt_i(),this._Image3_i(),this._Image4_i(),this.address_txt_i(),this.mailBtn_i(),this.validate_txt_i(),this.title4_txt_i()];
		return t;
	};
	_proto.title2_txt_i = function () {
		var t = new eui.Label();
		this.title2_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "备注";
		t.textColor = 0x97a9b6;
		t.width = 86;
		t.x = -263;
		t.y = -248;
		return t;
	};
	_proto.title3_txt_i = function () {
		var t = new eui.Label();
		this.title3_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "备注";
		t.textColor = 0x97a9b6;
		t.width = 90;
		t.x = -261;
		t.y = -74;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64;
		t.scale9Grid = new egret.Rectangle(5,5,10,10);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "input_bg_png";
		t.width = 530;
		t.x = -265;
		t.y = -217;
		return t;
	};
	_proto.desc_txt_i = function () {
		var t = new eui.Label();
		this.desc_txt = t;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.width = 501;
		t.x = -253;
		t.y = -199;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.scale9Grid = new egret.Rectangle(5,5,10,10);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "input_bg_png";
		t.width = 530;
		t.x = -267;
		t.y = -45;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.scale9Grid = new egret.Rectangle(5,5,10,10);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "input_bg_png";
		t.width = 208;
		t.x = -37;
		t.y = 159;
		return t;
	};
	_proto.address_txt_i = function () {
		var t = new eui.Label();
		this.address_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.width = 511;
		t.x = -257;
		t.y = -30;
		return t;
	};
	_proto.mailBtn_i = function () {
		var t = new GameButton();
		this.mailBtn = t;
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 33;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 218;
		t.y = 185;
		t.skinName = AddressInfoLayerSkin$Skin2;
		return t;
	};
	_proto.validate_txt_i = function () {
		var t = new eui.Label();
		this.validate_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.width = 186;
		t.x = -24;
		t.y = 174;
		return t;
	};
	_proto.title4_txt_i = function () {
		var t = new eui.Label();
		this.title4_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "邮箱验证：";
		t.textAlign = "right";
		t.textColor = 0x97a9b6;
		t.width = 216;
		t.x = -253;
		t.y = 174;
		return t;
	};
	return AddressInfoLayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/AddressItemView.exml'] = window.AddressItemViewSkin = (function (_super) {
	__extends(AddressItemViewSkin, _super);
	var AddressItemViewSkin$Skin3 = 	(function (_super) {
		__extends(AddressItemViewSkin$Skin3, _super);
		function AddressItemViewSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AddressItemViewSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AddressItemViewSkin$Skin3;
	})(eui.Skin);

	function AddressItemViewSkin() {
		_super.call(this);
		this.skinParts = ["addRess_txt","desc_txt","img","deleteBtn","selcet_img"];
		
		this.height = 150;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.addRess_txt_i(),this.desc_txt_i(),this.img_i(),this.deleteBtn_i(),this.selcet_img_i()];
	}
	var _proto = AddressItemViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.source = "recharge_itembg_png";
		t.width = 640;
		t.x = 0;
		t.y = 49;
		return t;
	};
	_proto.addRess_txt_i = function () {
		var t = new eui.Label();
		this.addRess_txt = t;
		t.height = 20;
		t.size = 20;
		t.text = "Label";
		t.textColor = 0xecf7fe;
		t.width = 502;
		t.x = 40;
		t.y = 88;
		return t;
	};
	_proto.desc_txt_i = function () {
		var t = new eui.Label();
		this.desc_txt = t;
		t.size = 20;
		t.text = "备注1";
		t.textColor = 0x97a9b6;
		t.width = 502;
		t.x = 41;
		t.y = 21;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "left_pag_btn_png";
		t.x = 577;
		t.y = 86;
		return t;
	};
	_proto.deleteBtn_i = function () {
		var t = new GameButton();
		this.deleteBtn = t;
		t.anchorOffsetX = 34;
		t.anchorOffsetY = 17;
		t.label = "";
		t.x = 585;
		t.y = 97;
		t.skinName = AddressItemViewSkin$Skin3;
		return t;
	};
	_proto.selcet_img_i = function () {
		var t = new eui.Image();
		this.selcet_img = t;
		t.source = "recharge_select_png";
		t.x = 8;
		t.y = 70;
		return t;
	};
	return AddressItemViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/AddressSelectLayer.exml'] = window.AddressSelectLayerSkin = (function (_super) {
	__extends(AddressSelectLayerSkin, _super);
	var AddressSelectLayerSkin$Skin4 = 	(function (_super) {
		__extends(AddressSelectLayerSkin$Skin4, _super);
		function AddressSelectLayerSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AddressSelectLayerSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "recharge_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AddressSelectLayerSkin$Skin4;
	})(eui.Skin);

	function AddressSelectLayerSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","title1_txt","upRoot","submitBtn","downRoot","item0","item1","item2","item3","item4","scaleRoot","centerRoot"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.upRoot_i(),this.downRoot_i(),this.centerRoot_i()];
	}
	var _proto = AddressSelectLayerSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 1136;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "recharge_bg_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.upRoot_i = function () {
		var t = new eui.Group();
		this.upRoot = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.closeBtn_i(),this.title1_txt_i()];
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "left_pag_btn_png";
		t.x = 27;
		t.y = 24;
		return t;
	};
	_proto.title1_txt_i = function () {
		var t = new eui.Label();
		this.title1_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "提   币";
		t.textAlign = "center";
		t.textColor = 0xB8C4CF;
		t.width = 320;
		t.x = 160;
		t.y = 56;
		return t;
	};
	_proto.downRoot_i = function () {
		var t = new eui.Group();
		this.downRoot = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 1136;
		t.elementsContent = [this.submitBtn_i()];
		return t;
	};
	_proto.submitBtn_i = function () {
		var t = new GameButton();
		this.submitBtn = t;
		t.anchorOffsetX = 259;
		t.anchorOffsetY = 29;
		t.label = "添加地址";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 320;
		t.y = -119;
		t.skinName = AddressSelectLayerSkin$Skin4;
		return t;
	};
	_proto.centerRoot_i = function () {
		var t = new eui.Group();
		this.centerRoot = t;
		t.anchorOffsetY = 0;
		t.height = 0;
		t.width = 0;
		t.x = 320;
		t.y = 568;
		t.elementsContent = [this.scaleRoot_i()];
		return t;
	};
	_proto.scaleRoot_i = function () {
		var t = new eui.Group();
		this.scaleRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new AddressItemView();
		this.item0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -320;
		t.y = -432;
		return t;
	};
	_proto.item1_i = function () {
		var t = new AddressItemView();
		this.item1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -318;
		t.y = -274;
		return t;
	};
	_proto.item2_i = function () {
		var t = new AddressItemView();
		this.item2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -318;
		t.y = -114;
		return t;
	};
	_proto.item3_i = function () {
		var t = new AddressItemView();
		this.item3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -320;
		t.y = 46;
		return t;
	};
	_proto.item4_i = function () {
		var t = new AddressItemView();
		this.item4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -318;
		t.y = 206;
		return t;
	};
	return AddressSelectLayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/AnnouncementLayer.exml'] = window.AnnouncementLayerSkin = (function (_super) {
	__extends(AnnouncementLayerSkin, _super);
	function AnnouncementLayerSkin() {
		_super.call(this);
		this.skinParts = ["msgTxt"];
		
		this.height = 38;
		this.width = 640;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = AnnouncementLayerSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 54;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.scale9Grid = new egret.Rectangle(11,4,5,26);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "home_n2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "home_n1_png";
		t.width = 410;
		t.x = 18;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.scale9Grid = new egret.Rectangle(11,4,5,26);
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "home_n2_png";
		t.x = 446;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "off";
		t.width = 444;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.msgTxt_i()];
		return t;
	};
	_proto.msgTxt_i = function () {
		var t = new eui.Label();
		this.msgTxt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "";
		t.textColor = 0xffffff;
		t.x = 2;
		t.y = 6;
		return t;
	};
	return AnnouncementLayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BaseBoxContainer.exml'] = window.BaseBoxContainerSkin = (function (_super) {
	__extends(BaseBoxContainerSkin, _super);
	function BaseBoxContainerSkin() {
		_super.call(this);
		this.skinParts = ["MaskLayer","upRoot","downRoot","boxRoot","scaleRoot","centerRoot"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.MaskLayer_i(),this.upRoot_i(),this.downRoot_i(),this.centerRoot_i()];
	}
	var _proto = BaseBoxContainerSkin.prototype;

	_proto.MaskLayer_i = function () {
		var t = new eui.Image();
		this.MaskLayer = t;
		t.alpha = 0.6;
		t.height = 1136;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "black1_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.upRoot_i = function () {
		var t = new eui.Group();
		this.upRoot = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.downRoot_i = function () {
		var t = new eui.Group();
		this.downRoot = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 1136;
		return t;
	};
	_proto.centerRoot_i = function () {
		var t = new eui.Group();
		this.centerRoot = t;
		t.anchorOffsetY = 0;
		t.height = 0;
		t.width = 0;
		t.x = 320;
		t.y = 568;
		t.elementsContent = [this.scaleRoot_i()];
		return t;
	};
	_proto.scaleRoot_i = function () {
		var t = new eui.Group();
		this.scaleRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.boxRoot_i()];
		return t;
	};
	_proto.boxRoot_i = function () {
		var t = new eui.Group();
		this.boxRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return BaseBoxContainerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BaseContainer.exml'] = window.BaseContainerSkin = (function (_super) {
	__extends(BaseContainerSkin, _super);
	function BaseContainerSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
	}
	var _proto = BaseContainerSkin.prototype;

	return BaseContainerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/coin.exml'] = window.coinSkin = (function (_super) {
	__extends(coinSkin, _super);
	function coinSkin() {
		_super.call(this);
		this.skinParts = ["img"];
		
		this.height = 100;
		this.width = 100;
		this.elementsContent = [this.img_i()];
	}
	var _proto = coinSkin.prototype;

	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 100;
		t.source = "bi2_png";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return coinSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CoinItem.exml'] = window.CoinItemSkin = (function (_super) {
	__extends(CoinItemSkin, _super);
	function CoinItemSkin() {
		_super.call(this);
		this.skinParts = ["img"];
		
		this.height = 50;
		this.width = 50;
		this.elementsContent = [this.img_i()];
	}
	var _proto = CoinItemSkin.prototype;

	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 50;
		t.source = "bi2_png";
		t.width = 50;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return CoinItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/FloatingTipsLayer.exml'] = window.FloatingTipsLayerSkin = (function (_super) {
	__extends(FloatingTipsLayerSkin, _super);
	function FloatingTipsLayerSkin() {
		_super.call(this);
		this.skinParts = ["centerRoot"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.centerRoot_i()];
	}
	var _proto = FloatingTipsLayerSkin.prototype;

	_proto.centerRoot_i = function () {
		var t = new eui.Group();
		this.centerRoot = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 568;
		return t;
	};
	return FloatingTipsLayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/FloatingTipView.exml'] = window.FloatingTipViewSkin = (function (_super) {
	__extends(FloatingTipViewSkin, _super);
	function FloatingTipViewSkin() {
		_super.call(this);
		this.skinParts = ["MessageLabel"];
		
		this.height = 62;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.MessageLabel_i()];
	}
	var _proto = FloatingTipViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "tishikuang_11.20_png";
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto.MessageLabel_i = function () {
		var t = new eui.Label();
		this.MessageLabel = t;
		t.height = 24;
		t.size = 24;
		t.text = "";
		t.textAlign = "center";
		t.width = 640;
		t.x = 2;
		t.y = 11;
		return t;
	};
	return FloatingTipViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameButton.exml'] = window.GameButtonSkin = (function (_super) {
	__extends(GameButtonSkin, _super);
	function GameButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = GameButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return GameButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameHelpLayer.exml'] = window.GameHelpLayerSkin = (function (_super) {
	__extends(GameHelpLayerSkin, _super);
	var GameHelpLayerSkin$Skin5 = 	(function (_super) {
		__extends(GameHelpLayerSkin$Skin5, _super);
		function GameHelpLayerSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameHelpLayerSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "closeBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameHelpLayerSkin$Skin5;
	})(eui.Skin);

	function GameHelpLayerSkin() {
		_super.call(this);
		this.skinParts = ["MaskLayer","closeBtn","boxRoot","scaleRoot","centerRoot"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.MaskLayer_i(),this.centerRoot_i()];
	}
	var _proto = GameHelpLayerSkin.prototype;

	_proto.MaskLayer_i = function () {
		var t = new eui.Image();
		this.MaskLayer = t;
		t.alpha = 0.6;
		t.height = 1136;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "black1_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.centerRoot_i = function () {
		var t = new eui.Group();
		this.centerRoot = t;
		t.anchorOffsetY = 0;
		t.height = 0;
		t.width = 0;
		t.x = 320;
		t.y = 568;
		t.elementsContent = [this.scaleRoot_i()];
		return t;
	};
	_proto.scaleRoot_i = function () {
		var t = new eui.Group();
		this.scaleRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.boxRoot_i()];
		return t;
	};
	_proto.boxRoot_i = function () {
		var t = new eui.Group();
		this.boxRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "help_bg_png";
		t.x = -288;
		t.y = -489;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new GameButton();
		this.closeBtn = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 45;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 250;
		t.y = -402;
		t.skinName = GameHelpLayerSkin$Skin5;
		return t;
	};
	return GameHelpLayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameScene.exml'] = window.GameSceneSkin = (function (_super) {
	__extends(GameSceneSkin, _super);
	var GameSceneSkin$Skin6 = 	(function (_super) {
		__extends(GameSceneSkin$Skin6, _super);
		function GameSceneSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sw_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin6;
	})(eui.Skin);

	var GameSceneSkin$Skin7 = 	(function (_super) {
		__extends(GameSceneSkin$Skin7, _super);
		function GameSceneSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "go_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin7;
	})(eui.Skin);

	var GameSceneSkin$Skin8 = 	(function (_super) {
		__extends(GameSceneSkin$Skin8, _super);
		function GameSceneSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "com_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin8;
	})(eui.Skin);

	var GameSceneSkin$Skin9 = 	(function (_super) {
		__extends(GameSceneSkin$Skin9, _super);
		function GameSceneSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "go_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin9;
	})(eui.Skin);

	var GameSceneSkin$Skin10 = 	(function (_super) {
		__extends(GameSceneSkin$Skin10, _super);
		function GameSceneSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "com_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin10;
	})(eui.Skin);

	var GameSceneSkin$Skin11 = 	(function (_super) {
		__extends(GameSceneSkin$Skin11, _super);
		function GameSceneSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "save_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin11;
	})(eui.Skin);

	var GameSceneSkin$Skin12 = 	(function (_super) {
		__extends(GameSceneSkin$Skin12, _super);
		function GameSceneSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "share_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin12;
	})(eui.Skin);

	var GameSceneSkin$Skin13 = 	(function (_super) {
		__extends(GameSceneSkin$Skin13, _super);
		function GameSceneSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "yellow_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin13;
	})(eui.Skin);

	var GameSceneSkin$Skin14 = 	(function (_super) {
		__extends(GameSceneSkin$Skin14, _super);
		function GameSceneSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "blue_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin14;
	})(eui.Skin);

	var GameSceneSkin$Skin15 = 	(function (_super) {
		__extends(GameSceneSkin$Skin15, _super);
		function GameSceneSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "light_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin15;
	})(eui.Skin);

	var GameSceneSkin$Skin16 = 	(function (_super) {
		__extends(GameSceneSkin$Skin16, _super);
		function GameSceneSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "green_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin16;
	})(eui.Skin);

	var GameSceneSkin$Skin17 = 	(function (_super) {
		__extends(GameSceneSkin$Skin17, _super);
		function GameSceneSkin$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "brown_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin17;
	})(eui.Skin);

	var GameSceneSkin$Skin18 = 	(function (_super) {
		__extends(GameSceneSkin$Skin18, _super);
		function GameSceneSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "red_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin18;
	})(eui.Skin);

	var GameSceneSkin$Skin19 = 	(function (_super) {
		__extends(GameSceneSkin$Skin19, _super);
		function GameSceneSkin$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "white_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin19;
	})(eui.Skin);

	var GameSceneSkin$Skin20 = 	(function (_super) {
		__extends(GameSceneSkin$Skin20, _super);
		function GameSceneSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "beige_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin20;
	})(eui.Skin);

	var GameSceneSkin$Skin21 = 	(function (_super) {
		__extends(GameSceneSkin$Skin21, _super);
		function GameSceneSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "go_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin21;
	})(eui.Skin);

	var GameSceneSkin$Skin22 = 	(function (_super) {
		__extends(GameSceneSkin$Skin22, _super);
		function GameSceneSkin$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "com_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin22;
	})(eui.Skin);

	var GameSceneSkin$Skin23 = 	(function (_super) {
		__extends(GameSceneSkin$Skin23, _super);
		function GameSceneSkin$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "left_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin23;
	})(eui.Skin);

	var GameSceneSkin$Skin24 = 	(function (_super) {
		__extends(GameSceneSkin$Skin24, _super);
		function GameSceneSkin$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "skip_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin24;
	})(eui.Skin);

	function GameSceneSkin() {
		_super.call(this);
		this.skinParts = ["dr0","dr1","dr2","dr3","dr4","dr5","windRoot","title1_img","swBtn","goBackBtn","completeBtn","mask2_img","guide_3_img","titleRoot","name_input","goBackBtn0","completeBtn0","nameRoot","goBackBtn3","name_text","time_text","completeBtn3","shareRoot","backBtn0","backBtn1","backBtn2","backBtn3","backBtn4","backBtn5","backBtn6","backBtn7","backBtn8","backBtn9","select_img","mask1_img","guide_1_img","guide_2_img","selectRoot","downRoot","title2_img","logo_img","leftBtn","upRoot","skip_btn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.downRoot_i(),this.upRoot_i(),this.skip_btn_i()];
	}
	var _proto = GameSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_png";
		t.x = -72;
		t.y = 0;
		return t;
	};
	_proto.downRoot_i = function () {
		var t = new eui.Group();
		this.downRoot = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 1136;
		t.elementsContent = [this.windRoot_i(),this.titleRoot_i(),this.nameRoot_i(),this.shareRoot_i(),this.selectRoot_i()];
		return t;
	};
	_proto.windRoot_i = function () {
		var t = new eui.Group();
		this.windRoot = t;
		t.height = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.touchEnabled = false;
		t.width = 0;
		t.x = 65;
		t.y = 97;
		t.elementsContent = [this._Image2_i(),this.dr0_i(),this.dr1_i(),this.dr2_i(),this.dr3_i(),this.dr4_i(),this.dr5_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_down_png";
		t.x = 223;
		t.y = -252;
		return t;
	};
	_proto.dr0_i = function () {
		var t = new eui.Image();
		this.dr0 = t;
		t.name = "dr0";
		t.scaleX = 0.86;
		t.scaleY = 0.86;
		t.source = "bg_2_png";
		t.x = 72;
		t.y = -965;
		return t;
	};
	_proto.dr1_i = function () {
		var t = new eui.Image();
		this.dr1 = t;
		t.name = "dr1";
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "cloud_7_png";
		t.x = 146;
		t.y = -831;
		return t;
	};
	_proto.dr2_i = function () {
		var t = new eui.Image();
		this.dr2 = t;
		t.name = "dr2";
		t.scaleX = 0.42;
		t.scaleY = 0.42;
		t.source = "dragon_6_png";
		t.x = 118;
		t.y = -764;
		return t;
	};
	_proto.dr3_i = function () {
		var t = new eui.Image();
		this.dr3 = t;
		t.name = "dr3";
		t.scaleX = 0.42;
		t.scaleY = 0.42;
		t.source = "zhua_4_png";
		t.x = 118;
		t.y = -647;
		return t;
	};
	_proto.dr4_i = function () {
		var t = new eui.Image();
		this.dr4 = t;
		t.name = "dr4";
		t.scaleX = 0.42;
		t.scaleY = 0.42;
		t.source = "zs_3_png";
		t.x = 178;
		t.y = -852;
		return t;
	};
	_proto.dr5_i = function () {
		var t = new eui.Image();
		this.dr5 = t;
		t.name = "dr5";
		t.scaleX = 0.42;
		t.scaleY = 0.42;
		t.source = "tou_3_png";
		t.x = 75;
		t.y = -848;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "gai_png";
		t.touchEnabled = false;
		t.x = 94;
		t.y = -1064;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.source = "moren_png";
		t.touchEnabled = false;
		t.x = 72;
		t.y = -858;
		return t;
	};
	_proto.titleRoot_i = function () {
		var t = new eui.Group();
		this.titleRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this.title1_img_i(),this.swBtn_i(),this.goBackBtn_i(),this.completeBtn_i(),this.mask2_img_i(),this.guide_3_img_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "bg_red_png";
		t.x = -13;
		t.y = -369;
		return t;
	};
	_proto.title1_img_i = function () {
		var t = new eui.Image();
		this.title1_img = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "1s_png";
		t.x = 22;
		t.y = -258;
		return t;
	};
	_proto.swBtn_i = function () {
		var t = new GameButton();
		this.swBtn = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 60;
		t.label = "";
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.x = 528;
		t.y = -295;
		t.skinName = GameSceneSkin$Skin6;
		return t;
	};
	_proto.goBackBtn_i = function () {
		var t = new GameButton();
		this.goBackBtn = t;
		t.anchorOffsetX = 287;
		t.anchorOffsetY = 89;
		t.label = "";
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.x = 181;
		t.y = -80;
		t.skinName = GameSceneSkin$Skin7;
		return t;
	};
	_proto.completeBtn_i = function () {
		var t = new GameButton();
		this.completeBtn = t;
		t.anchorOffsetX = 285;
		t.anchorOffsetY = 87;
		t.label = "";
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.x = 465;
		t.y = -80;
		t.skinName = GameSceneSkin$Skin8;
		return t;
	};
	_proto.mask2_img_i = function () {
		var t = new eui.Image();
		this.mask2_img = t;
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.height = 1266;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "black1_png";
		t.width = 640;
		t.x = 0;
		t.y = -1266;
		return t;
	};
	_proto.guide_3_img_i = function () {
		var t = new eui.Group();
		this.guide_3_img = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 493;
		t.y = -318;
		t.elementsContent = [this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "guide_3_png";
		t.x = -227;
		t.y = -148;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "hand_png";
		t.x = 0;
		return t;
	};
	_proto.nameRoot_i = function () {
		var t = new eui.Group();
		this.nameRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Label1_i(),this.name_input_i(),this.goBackBtn0_i(),this.completeBtn0_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "bg_red_png";
		t.x = -13;
		t.y = -369;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "name_png";
		t.x = 59;
		t.y = -255;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 30;
		t.text = "Name:";
		t.textAlign = "center";
		t.textColor = 0xffd38e;
		t.width = 94;
		t.x = 54;
		t.y = -302;
		return t;
	};
	_proto.name_input_i = function () {
		var t = new eui.Label();
		this.name_input = t;
		t.height = 56;
		t.size = 48;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xD83A32;
		t.width = 491;
		t.x = 75;
		t.y = -243;
		return t;
	};
	_proto.goBackBtn0_i = function () {
		var t = new GameButton();
		this.goBackBtn0 = t;
		t.anchorOffsetX = 287;
		t.anchorOffsetY = 89;
		t.label = "";
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.x = 181;
		t.y = -80;
		t.skinName = GameSceneSkin$Skin9;
		return t;
	};
	_proto.completeBtn0_i = function () {
		var t = new GameButton();
		this.completeBtn0 = t;
		t.anchorOffsetX = 285;
		t.anchorOffsetY = 87;
		t.label = "";
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.x = 465;
		t.y = -80;
		t.skinName = GameSceneSkin$Skin10;
		return t;
	};
	_proto.shareRoot_i = function () {
		var t = new eui.Group();
		this.shareRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.goBackBtn3_i(),this._Image10_i(),this.name_text_i(),this.time_text_i(),this.completeBtn3_i()];
		return t;
	};
	_proto.goBackBtn3_i = function () {
		var t = new GameButton();
		this.goBackBtn3 = t;
		t.anchorOffsetX = 287;
		t.anchorOffsetY = 89;
		t.label = "";
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.x = 332;
		t.y = -79;
		t.skinName = GameSceneSkin$Skin11;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.source = "ma_png";
		t.width = 80;
		t.x = 25;
		t.y = -203;
		return t;
	};
	_proto.name_text_i = function () {
		var t = new eui.Label();
		this.name_text = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "Label";
		t.textColor = 0x7a0606;
		t.x = 117;
		t.y = -186;
		return t;
	};
	_proto.time_text_i = function () {
		var t = new eui.Label();
		this.time_text = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "Label";
		t.textColor = 0x070000;
		t.x = 119;
		t.y = -149;
		return t;
	};
	_proto.completeBtn3_i = function () {
		var t = new GameButton();
		this.completeBtn3 = t;
		t.anchorOffsetX = 285;
		t.anchorOffsetY = 87;
		t.label = "";
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.visible = false;
		t.x = 465;
		t.y = -79;
		t.skinName = GameSceneSkin$Skin12;
		return t;
	};
	_proto.selectRoot_i = function () {
		var t = new eui.Group();
		this.selectRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image11_i(),this.backBtn0_i(),this.backBtn1_i(),this.backBtn2_i(),this.backBtn3_i(),this.backBtn4_i(),this.backBtn5_i(),this.backBtn6_i(),this.backBtn7_i(),this.backBtn8_i(),this.backBtn9_i(),this.select_img_i(),this.mask1_img_i(),this.guide_1_img_i(),this.guide_2_img_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "bg_red_png";
		t.x = -13;
		t.y = -367;
		return t;
	};
	_proto.backBtn0_i = function () {
		var t = new GameButton();
		this.backBtn0 = t;
		t.anchorOffsetX = 140;
		t.anchorOffsetY = 80;
		t.label = "";
		t.name = "backBtn0";
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.x = 114;
		t.y = -264;
		t.skinName = GameSceneSkin$Skin13;
		return t;
	};
	_proto.backBtn1_i = function () {
		var t = new GameButton();
		this.backBtn1 = t;
		t.anchorOffsetX = 140;
		t.anchorOffsetY = 80;
		t.label = "";
		t.name = "backBtn1";
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.x = 251.66666666666666;
		t.y = -264;
		t.skinName = GameSceneSkin$Skin14;
		return t;
	};
	_proto.backBtn2_i = function () {
		var t = new GameButton();
		this.backBtn2 = t;
		t.anchorOffsetX = 140;
		t.anchorOffsetY = 80;
		t.label = "";
		t.name = "backBtn2";
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.x = 389.3333333333333;
		t.y = -264;
		t.skinName = GameSceneSkin$Skin15;
		return t;
	};
	_proto.backBtn3_i = function () {
		var t = new GameButton();
		this.backBtn3 = t;
		t.anchorOffsetX = 140;
		t.anchorOffsetY = 80;
		t.label = "";
		t.name = "backBtn3";
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.x = 527;
		t.y = -264;
		t.skinName = GameSceneSkin$Skin16;
		return t;
	};
	_proto.backBtn4_i = function () {
		var t = new GameButton();
		this.backBtn4 = t;
		t.anchorOffsetX = 140;
		t.anchorOffsetY = 80;
		t.label = "";
		t.name = "backBtn4";
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.x = 114;
		t.y = -180;
		t.skinName = GameSceneSkin$Skin17;
		return t;
	};
	_proto.backBtn5_i = function () {
		var t = new GameButton();
		this.backBtn5 = t;
		t.anchorOffsetX = 140;
		t.anchorOffsetY = 80;
		t.label = "";
		t.name = "backBtn5";
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.x = 251.66666666666666;
		t.y = -180;
		t.skinName = GameSceneSkin$Skin18;
		return t;
	};
	_proto.backBtn6_i = function () {
		var t = new GameButton();
		this.backBtn6 = t;
		t.anchorOffsetX = 140;
		t.anchorOffsetY = 80;
		t.label = "";
		t.name = "backBtn6";
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.x = 389.3333333333333;
		t.y = -180;
		t.skinName = GameSceneSkin$Skin19;
		return t;
	};
	_proto.backBtn7_i = function () {
		var t = new GameButton();
		this.backBtn7 = t;
		t.anchorOffsetX = 140;
		t.anchorOffsetY = 80;
		t.label = "";
		t.name = "backBtn7";
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.x = 527;
		t.y = -180;
		t.skinName = GameSceneSkin$Skin20;
		return t;
	};
	_proto.backBtn8_i = function () {
		var t = new GameButton();
		this.backBtn8 = t;
		t.anchorOffsetX = 287;
		t.anchorOffsetY = 89;
		t.label = "";
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.x = 181;
		t.y = -80;
		t.skinName = GameSceneSkin$Skin21;
		return t;
	};
	_proto.backBtn9_i = function () {
		var t = new GameButton();
		this.backBtn9 = t;
		t.anchorOffsetX = 285;
		t.anchorOffsetY = 87;
		t.label = "";
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.x = 462;
		t.y = -80;
		t.skinName = GameSceneSkin$Skin22;
		return t;
	};
	_proto.select_img_i = function () {
		var t = new eui.Image();
		this.select_img = t;
		t.scaleX = 0.43;
		t.scaleY = 0.43;
		t.source = "select_bg_png";
		t.x = 322;
		t.y = -223;
		return t;
	};
	_proto.mask1_img_i = function () {
		var t = new eui.Image();
		this.mask1_img = t;
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.height = 1266;
		t.source = "black1_png";
		t.width = 640;
		t.x = 0;
		t.y = -1266;
		return t;
	};
	_proto.guide_1_img_i = function () {
		var t = new eui.Group();
		this.guide_1_img = t;
		t.x = 92;
		t.y = -279;
		t.elementsContent = [this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "guide_1_png";
		t.x = 0;
		t.y = 103;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "hand_png";
		t.x = 0;
		return t;
	};
	_proto.guide_2_img_i = function () {
		var t = new eui.Group();
		this.guide_2_img = t;
		t.x = 212;
		t.y = -541;
		t.elementsContent = [this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "guide_2_png";
		t.x = 0;
		t.y = 103;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "hand_png";
		t.x = 0;
		return t;
	};
	_proto.upRoot_i = function () {
		var t = new eui.Group();
		this.upRoot = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.title2_img_i(),this.logo_img_i(),this.leftBtn_i()];
		return t;
	};
	_proto.title2_img_i = function () {
		var t = new eui.Image();
		this.title2_img = t;
		t.height = 402;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1b_png";
		t.visible = false;
		t.width = 545;
		t.x = 45;
		t.y = 39;
		return t;
	};
	_proto.logo_img_i = function () {
		var t = new eui.Image();
		this.logo_img = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "logo_png";
		t.visible = false;
		t.x = 541;
		t.y = 39;
		return t;
	};
	_proto.leftBtn_i = function () {
		var t = new GameButton();
		this.leftBtn = t;
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 40;
		t.y = 36;
		t.skinName = GameSceneSkin$Skin23;
		return t;
	};
	_proto.skip_btn_i = function () {
		var t = new GameButton();
		this.skip_btn = t;
		t.anchorOffsetX = 88;
		t.anchorOffsetY = 31;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 533;
		t.y = 43;
		t.skinName = GameSceneSkin$Skin24;
		return t;
	};
	return GameSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameShareLayer.exml'] = window.GameShareLayerSkin = (function (_super) {
	__extends(GameShareLayerSkin, _super);
	var GameShareLayerSkin$Skin25 = 	(function (_super) {
		__extends(GameShareLayerSkin$Skin25, _super);
		function GameShareLayerSkin$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameShareLayerSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "closeBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameShareLayerSkin$Skin25;
	})(eui.Skin);

	function GameShareLayerSkin() {
		_super.call(this);
		this.skinParts = ["MaskLayer","closeBtn","boxRoot","scaleRoot","centerRoot"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.MaskLayer_i(),this.centerRoot_i()];
	}
	var _proto = GameShareLayerSkin.prototype;

	_proto.MaskLayer_i = function () {
		var t = new eui.Image();
		this.MaskLayer = t;
		t.alpha = 0.6;
		t.height = 1136;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "black1_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.centerRoot_i = function () {
		var t = new eui.Group();
		this.centerRoot = t;
		t.anchorOffsetY = 0;
		t.height = 0;
		t.width = 0;
		t.x = 320;
		t.y = 568;
		t.elementsContent = [this.scaleRoot_i()];
		return t;
	};
	_proto.scaleRoot_i = function () {
		var t = new eui.Group();
		this.scaleRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.boxRoot_i()];
		return t;
	};
	_proto.boxRoot_i = function () {
		var t = new eui.Group();
		this.boxRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "share_bg_png";
		t.x = -287;
		t.y = -267;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new GameButton();
		this.closeBtn = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 45;
		t.label = "";
		t.x = 247;
		t.y = -178;
		t.skinName = GameShareLayerSkin$Skin25;
		return t;
	};
	return GameShareLayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GetMoneyLayer.exml'] = window.GetMoneyLayerSkin = (function (_super) {
	__extends(GetMoneyLayerSkin, _super);
	var GetMoneyLayerSkin$Skin26 = 	(function (_super) {
		__extends(GetMoneyLayerSkin$Skin26, _super);
		function GetMoneyLayerSkin$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GetMoneyLayerSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "recharge_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GetMoneyLayerSkin$Skin26;
	})(eui.Skin);

	function GetMoneyLayerSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","title1_txt","his_txt","upRoot","name_txt","title2_txt","title3_txt","title4_txt","numInput_txt","scaleRoot","centerRoot","title5_txt","addressItem","noAddress_txt","submitBtn","downRoot"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.upRoot_i(),this.centerRoot_i(),this.downRoot_i()];
	}
	var _proto = GetMoneyLayerSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 1136;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "recharge_bg_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.upRoot_i = function () {
		var t = new eui.Group();
		this.upRoot = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.closeBtn_i(),this.title1_txt_i(),this.his_txt_i()];
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "left_pag_btn_png";
		t.x = 27;
		t.y = 24;
		return t;
	};
	_proto.title1_txt_i = function () {
		var t = new eui.Label();
		this.title1_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "提   币";
		t.textAlign = "center";
		t.textColor = 0xB8C4CF;
		t.width = 320;
		t.x = 160;
		t.y = 56;
		return t;
	};
	_proto.his_txt_i = function () {
		var t = new eui.Label();
		this.his_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "提   币";
		t.textAlign = "center";
		t.textColor = 0xB8C4CF;
		t.width = 125;
		t.x = 508;
		t.y = 28;
		return t;
	};
	_proto.centerRoot_i = function () {
		var t = new eui.Group();
		this.centerRoot = t;
		t.anchorOffsetY = 0;
		t.height = 0;
		t.width = 0;
		t.x = 320;
		t.y = 568;
		t.elementsContent = [this.scaleRoot_i()];
		return t;
	};
	_proto.scaleRoot_i = function () {
		var t = new eui.Group();
		this.scaleRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.name_txt_i(),this.title2_txt_i(),this.title3_txt_i(),this.title4_txt_i(),this.numInput_txt_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "head_png";
		t.width = 100;
		t.x = -51;
		t.y = -313;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64;
		t.scale9Grid = new egret.Rectangle(5,5,10,10);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "input_bg_png";
		t.width = 558;
		t.x = -277;
		t.y = 11;
		return t;
	};
	_proto.name_txt_i = function () {
		var t = new eui.Label();
		this.name_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "提币";
		t.textAlign = "center";
		t.textColor = 0x97a9b6;
		t.width = 640;
		t.x = -320;
		t.y = -359;
		return t;
	};
	_proto.title2_txt_i = function () {
		var t = new eui.Label();
		this.title2_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "我的财富";
		t.textAlign = "center";
		t.textColor = 0x97a9b6;
		t.width = 640;
		t.x = -320;
		t.y = -185;
		return t;
	};
	_proto.title3_txt_i = function () {
		var t = new eui.Label();
		this.title3_txt = t;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "6666";
		t.textAlign = "center";
		t.textColor = 0x55b5de;
		t.width = 640;
		t.x = -320;
		t.y = -135;
		return t;
	};
	_proto.title4_txt_i = function () {
		var t = new eui.Label();
		this.title4_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "提币数量";
		t.textAlign = "left";
		t.textColor = 0x97a9b6;
		t.width = 297;
		t.x = -275;
		t.y = -18;
		return t;
	};
	_proto.numInput_txt_i = function () {
		var t = new eui.Label();
		this.numInput_txt = t;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "提币数量";
		t.textAlign = "center";
		t.width = 515;
		t.x = -256;
		t.y = 29;
		return t;
	};
	_proto.downRoot_i = function () {
		var t = new eui.Group();
		this.downRoot = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 1136;
		t.elementsContent = [this.title5_txt_i(),this.addressItem_i(),this.noAddress_txt_i(),this.submitBtn_i()];
		return t;
	};
	_proto.title5_txt_i = function () {
		var t = new eui.Label();
		this.title5_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "提币数量";
		t.textAlign = "left";
		t.textColor = 0x97A9B6;
		t.width = 297;
		t.x = 38;
		t.y = -398;
		return t;
	};
	_proto.addressItem_i = function () {
		var t = new AddressItemView();
		this.addressItem = t;
		t.x = 0;
		t.y = -419;
		return t;
	};
	_proto.noAddress_txt_i = function () {
		var t = new eui.Label();
		this.noAddress_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "没有地址请添加";
		t.textAlign = "center";
		t.textColor = 0xb8c4cf;
		t.width = 640;
		t.x = 0;
		t.y = -339;
		return t;
	};
	_proto.submitBtn_i = function () {
		var t = new GameButton();
		this.submitBtn = t;
		t.anchorOffsetX = 259;
		t.anchorOffsetY = 29;
		t.label = "提交";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 320;
		t.y = -161;
		t.skinName = GetMoneyLayerSkin$Skin26;
		return t;
	};
	return GetMoneyLayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LoadingLayer.exml'] = window.LoadingLayerSkin = (function (_super) {
	__extends(LoadingLayerSkin, _super);
	function LoadingLayerSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
	}
	var _proto = LoadingLayerSkin.prototype;

	return LoadingLayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LoginLayer.exml'] = window.LoginLayerSkin = (function (_super) {
	__extends(LoginLayerSkin, _super);
	var LoginLayerSkin$Skin27 = 	(function (_super) {
		__extends(LoginLayerSkin$Skin27, _super);
		function LoginLayerSkin$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginLayerSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "loginBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginLayerSkin$Skin27;
	})(eui.Skin);

	function LoginLayerSkin() {
		_super.call(this);
		this.skinParts = ["loginBtn","downRoot"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.downRoot_i(),this._Image5_i()];
	}
	var _proto = LoginLayerSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_png";
		t.x = -76;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "logo_png";
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto.downRoot_i = function () {
		var t = new eui.Group();
		this.downRoot = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 1136;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.loginBtn_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 623;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wine_png";
		t.width = 448;
		t.x = 96;
		t.y = -790;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 251;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pen_png";
		t.width = 310;
		t.x = 304.3;
		t.y = -588;
		return t;
	};
	_proto.loginBtn_i = function () {
		var t = new GameButton();
		this.loginBtn = t;
		t.anchorOffsetX = 228;
		t.anchorOffsetY = 54;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 320;
		t.y = -137;
		t.skinName = LoginLayerSkin$Skin27;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 238;
		t.source = "bg_title_png";
		t.width = 640;
		t.x = 0;
		t.y = 112;
		return t;
	};
	return LoginLayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProxyWaitLayer.exml'] = window.ProxyWaitLayerSkin = (function (_super) {
	__extends(ProxyWaitLayerSkin, _super);
	function ProxyWaitLayerSkin() {
		_super.call(this);
		this.skinParts = ["MaskLayer","lbTxt","scaleRoot","centerRoot"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.MaskLayer_i(),this.centerRoot_i()];
	}
	var _proto = ProxyWaitLayerSkin.prototype;

	_proto.MaskLayer_i = function () {
		var t = new eui.Image();
		this.MaskLayer = t;
		t.alpha = 0.6;
		t.height = 1136;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "black1_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.centerRoot_i = function () {
		var t = new eui.Group();
		this.centerRoot = t;
		t.anchorOffsetY = 0;
		t.height = 0;
		t.width = 0;
		t.x = 320;
		t.y = 568;
		t.elementsContent = [this.scaleRoot_i()];
		return t;
	};
	_proto.scaleRoot_i = function () {
		var t = new eui.Group();
		this.scaleRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.lbTxt_i()];
		return t;
	};
	_proto.lbTxt_i = function () {
		var t = new eui.Label();
		this.lbTxt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Label";
		t.textAlign = "center";
		t.width = 640;
		t.x = -320;
		t.y = 0;
		return t;
	};
	return ProxyWaitLayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RechargeHistoryItem.exml'] = window.RechargeHistoryItemSkin = (function (_super) {
	__extends(RechargeHistoryItemSkin, _super);
	function RechargeHistoryItemSkin() {
		_super.call(this);
		this.skinParts = ["time_txt","num_txt","name_txt","state_txt"];
		
		this.height = 102;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.time_txt_i(),this.num_txt_i(),this.name_txt_i(),this.state_txt_i()];
	}
	var _proto = RechargeHistoryItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.source = "recharge_itembg_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.time_txt_i = function () {
		var t = new eui.Label();
		this.time_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.size = 18;
		t.text = "2018-05-10 18:20";
		t.textAlign = "center";
		t.textColor = 0xd7d8d9;
		t.verticalAlign = "middle";
		t.width = 107;
		t.x = 58;
		t.y = 0;
		return t;
	};
	_proto.num_txt_i = function () {
		var t = new eui.Label();
		this.num_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.size = 18;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xd7d8d9;
		t.verticalAlign = "middle";
		t.width = 107;
		t.x = 209;
		t.y = 0;
		return t;
	};
	_proto.name_txt_i = function () {
		var t = new eui.Label();
		this.name_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.size = 18;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xd7d8d9;
		t.verticalAlign = "middle";
		t.width = 107;
		t.x = 349;
		t.y = 0;
		return t;
	};
	_proto.state_txt_i = function () {
		var t = new eui.Label();
		this.state_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.size = 18;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xd7d8d9;
		t.verticalAlign = "middle";
		t.width = 107;
		t.x = 493;
		t.y = 0;
		return t;
	};
	return RechargeHistoryItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RechargeHistoryLayer.exml'] = window.RechargeHistoryLayerSkin = (function (_super) {
	__extends(RechargeHistoryLayerSkin, _super);
	var RechargeHistoryLayerSkin$Skin28 = 	(function (_super) {
		__extends(RechargeHistoryLayerSkin$Skin28, _super);
		function RechargeHistoryLayerSkin$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","his_rec2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RechargeHistoryLayerSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "his_rec1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RechargeHistoryLayerSkin$Skin28;
	})(eui.Skin);

	var RechargeHistoryLayerSkin$Skin29 = 	(function (_super) {
		__extends(RechargeHistoryLayerSkin$Skin29, _super);
		function RechargeHistoryLayerSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","his_get2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RechargeHistoryLayerSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "his_get1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RechargeHistoryLayerSkin$Skin29;
	})(eui.Skin);

	function RechargeHistoryLayerSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","btn1","btn2","upRoot","title1_txt","title2_txt","title3_txt","title4_txt","listTable","scaleRoot","centerRoot"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.upRoot_i(),this.centerRoot_i()];
	}
	var _proto = RechargeHistoryLayerSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 1136;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "recharge_bg_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.upRoot_i = function () {
		var t = new eui.Group();
		this.upRoot = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.closeBtn_i(),this.btn1_i(),this.btn2_i()];
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "left_pag_btn_png";
		t.x = 27;
		t.y = 24;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new GameButton();
		this.btn1 = t;
		t.anchorOffsetX = 160;
		t.anchorOffsetY = 19;
		t.label = "";
		t.name = "btn1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 162;
		t.y = 77;
		t.skinName = RechargeHistoryLayerSkin$Skin28;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new GameButton();
		this.btn2 = t;
		t.anchorOffsetX = 165;
		t.anchorOffsetY = 19;
		t.label = "";
		t.name = "btn2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 490;
		t.y = 77;
		t.skinName = RechargeHistoryLayerSkin$Skin29;
		return t;
	};
	_proto.centerRoot_i = function () {
		var t = new eui.Group();
		this.centerRoot = t;
		t.anchorOffsetY = 0;
		t.height = 0;
		t.width = 0;
		t.x = 320;
		t.y = 568;
		t.elementsContent = [this.scaleRoot_i()];
		return t;
	};
	_proto.scaleRoot_i = function () {
		var t = new eui.Group();
		this.scaleRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.title1_txt_i(),this.title2_txt_i(),this.title3_txt_i(),this.title4_txt_i(),this.listTable_i()];
		return t;
	};
	_proto.title1_txt_i = function () {
		var t = new eui.Label();
		this.title1_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x97a9b6;
		t.width = 107;
		t.x = -267;
		t.y = -443;
		return t;
	};
	_proto.title2_txt_i = function () {
		var t = new eui.Label();
		this.title2_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x97a9b6;
		t.width = 107;
		t.x = -115;
		t.y = -443;
		return t;
	};
	_proto.title3_txt_i = function () {
		var t = new eui.Label();
		this.title3_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x97a9b6;
		t.width = 107;
		t.x = 30;
		t.y = -443;
		return t;
	};
	_proto.title4_txt_i = function () {
		var t = new eui.Label();
		this.title4_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x97a9b6;
		t.width = 107;
		t.x = 170;
		t.y = -443;
		return t;
	};
	_proto.listTable_i = function () {
		var t = new eui.Group();
		this.listTable = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 930;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = -320;
		t.y = -409;
		return t;
	};
	return RechargeHistoryLayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RechargeLayer.exml'] = window.RechargeLayerSkin = (function (_super) {
	__extends(RechargeLayerSkin, _super);
	var RechargeLayerSkin$Skin30 = 	(function (_super) {
		__extends(RechargeLayerSkin$Skin30, _super);
		function RechargeLayerSkin$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RechargeLayerSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "recharge_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RechargeLayerSkin$Skin30;
	})(eui.Skin);

	function RechargeLayerSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","his_txt","title1_txt","upRoot","submitBtn","downRoot","title2_txt","title3_txt","title4_txt","title5_txt","addressItem","noAddress_txt","addressRoot","title6_txt","title7_txt","descRoot","scaleRoot","centerRoot"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.upRoot_i(),this.downRoot_i(),this.centerRoot_i()];
	}
	var _proto = RechargeLayerSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 1136;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "recharge_bg_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.upRoot_i = function () {
		var t = new eui.Group();
		this.upRoot = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.closeBtn_i(),this.his_txt_i(),this.title1_txt_i()];
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "left_pag_btn_png";
		t.x = 27;
		t.y = 24;
		return t;
	};
	_proto.his_txt_i = function () {
		var t = new eui.Label();
		this.his_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "提   币";
		t.textAlign = "center";
		t.textColor = 0xB8C4CF;
		t.width = 125;
		t.x = 508;
		t.y = 28;
		return t;
	};
	_proto.title1_txt_i = function () {
		var t = new eui.Label();
		this.title1_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "提   币";
		t.textAlign = "center";
		t.textColor = 0xB8C4CF;
		t.width = 320;
		t.x = 160;
		t.y = 56;
		return t;
	};
	_proto.downRoot_i = function () {
		var t = new eui.Group();
		this.downRoot = t;
		t.height = 0;
		t.width = 0;
		t.x = 0;
		t.y = 1136;
		t.elementsContent = [this.submitBtn_i()];
		return t;
	};
	_proto.submitBtn_i = function () {
		var t = new GameButton();
		this.submitBtn = t;
		t.anchorOffsetX = 259;
		t.anchorOffsetY = 29;
		t.label = "提交";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 320;
		t.y = -160;
		t.skinName = RechargeLayerSkin$Skin30;
		return t;
	};
	_proto.centerRoot_i = function () {
		var t = new eui.Group();
		this.centerRoot = t;
		t.anchorOffsetY = 0;
		t.height = 0;
		t.width = 0;
		t.x = 320;
		t.y = 568;
		t.elementsContent = [this.scaleRoot_i()];
		return t;
	};
	_proto.scaleRoot_i = function () {
		var t = new eui.Group();
		this.scaleRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.title2_txt_i(),this.title3_txt_i(),this.addressRoot_i(),this.descRoot_i()];
		return t;
	};
	_proto.title2_txt_i = function () {
		var t = new eui.Label();
		this.title2_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "123111111";
		t.textColor = 0xb8c4cf;
		t.x = -274;
		t.y = -232;
		return t;
	};
	_proto.title3_txt_i = function () {
		var t = new eui.Label();
		this.title3_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "1231111111";
		t.textColor = 0xb8c4cf;
		t.x = -167;
		t.y = -232;
		return t;
	};
	_proto.addressRoot_i = function () {
		var t = new eui.Group();
		this.addressRoot = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 523;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 638;
		t.x = -320;
		t.y = -234;
		t.elementsContent = [this.title4_txt_i(),this.title5_txt_i(),this.addressItem_i(),this.noAddress_txt_i()];
		return t;
	};
	_proto.title4_txt_i = function () {
		var t = new eui.Label();
		this.title4_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "地址";
		t.textColor = 0x97a9b6;
		t.width = 297;
		t.x = 41;
		t.y = 107;
		return t;
	};
	_proto.title5_txt_i = function () {
		var t = new eui.Label();
		this.title5_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "地址";
		t.textColor = 0xb8c4cf;
		t.width = 543;
		t.x = 45.94;
		t.y = 321.45;
		return t;
	};
	_proto.addressItem_i = function () {
		var t = new AddressItemView();
		this.addressItem = t;
		t.x = 0;
		t.y = 86;
		return t;
	};
	_proto.noAddress_txt_i = function () {
		var t = new eui.Label();
		this.noAddress_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "没有地址请添加";
		t.textAlign = "center";
		t.textColor = 0xb8c4cf;
		t.width = 640;
		t.x = 2;
		t.y = 173;
		return t;
	};
	_proto.descRoot_i = function () {
		var t = new eui.Group();
		this.descRoot = t;
		t.height = 523;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 638;
		t.x = -320;
		t.y = -234;
		t.elementsContent = [this.title6_txt_i(),this.title7_txt_i(),this._Image2_i()];
		return t;
	};
	_proto.title6_txt_i = function () {
		var t = new eui.Label();
		this.title6_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "123";
		t.textColor = 0xecf7fe;
		t.width = 533;
		t.x = 48;
		t.y = 98;
		return t;
	};
	_proto.title7_txt_i = function () {
		var t = new eui.Label();
		this.title7_txt = t;
		t.anchorOffsetY = 0;
		t.height = 90.61;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "123";
		t.textColor = 0xecf7fe;
		t.width = 527;
		t.x = 48;
		t.y = 210;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "recharge_png";
		t.x = 209;
		t.y = 330;
		return t;
	};
	return RechargeLayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RewardLayer.exml'] = window.RewardLayerSkin = (function (_super) {
	__extends(RewardLayerSkin, _super);
	function RewardLayerSkin() {
		_super.call(this);
		this.skinParts = ["MaskLayer","reward_title","desc_txt","boxRoot","scaleRoot","centerRoot"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.MaskLayer_i(),this.centerRoot_i()];
	}
	var _proto = RewardLayerSkin.prototype;

	_proto.MaskLayer_i = function () {
		var t = new eui.Image();
		this.MaskLayer = t;
		t.alpha = 0.6;
		t.height = 1136;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "black1_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.centerRoot_i = function () {
		var t = new eui.Group();
		this.centerRoot = t;
		t.anchorOffsetY = 0;
		t.height = 0;
		t.width = 0;
		t.x = 320;
		t.y = 568;
		t.elementsContent = [this.scaleRoot_i()];
		return t;
	};
	_proto.scaleRoot_i = function () {
		var t = new eui.Group();
		this.scaleRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.boxRoot_i()];
		return t;
	};
	_proto.boxRoot_i = function () {
		var t = new eui.Group();
		this.boxRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.reward_title_i(),this._Image1_i(),this._Image2_i(),this.desc_txt_i()];
		return t;
	};
	_proto.reward_title_i = function () {
		var t = new eui.Image();
		this.reward_title = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "reward_bg_png";
		t.x = -290;
		t.y = -274;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "reward_title_png";
		t.x = -256;
		t.y = -308;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rewardcoin_png";
		t.x = -116;
		t.y = -84;
		return t;
	};
	_proto.desc_txt_i = function () {
		var t = new eui.Label();
		this.desc_txt = t;
		t.anchorOffsetX = 0;
		t.text = "Label";
		t.textAlign = "center";
		t.width = 469;
		t.x = -235;
		t.y = -125;
		return t;
	};
	return RewardLayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SignItemView.exml'] = window.SignItemViewSkin = (function (_super) {
	__extends(SignItemViewSkin, _super);
	function SignItemViewSkin() {
		_super.call(this);
		this.skinParts = ["icon","complete_img","name_txt","money_txt"];
		
		this.height = 189;
		this.width = 126;
		this.elementsContent = [this._Image1_i(),this.icon_i(),this.complete_img_i(),this._Image2_i(),this.name_txt_i(),this.money_txt_i()];
	}
	var _proto = SignItemViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sign_itembg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.source = "money1_png";
		t.x = 24;
		t.y = 54;
		return t;
	};
	_proto.complete_img_i = function () {
		var t = new eui.Image();
		this.complete_img = t;
		t.source = "sign_complete_png";
		t.x = 30;
		t.y = 64;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "coin_png";
		t.x = 15;
		t.y = 142;
		return t;
	};
	_proto.name_txt_i = function () {
		var t = new eui.Label();
		this.name_txt = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "第一天";
		t.textAlign = "center";
		t.width = 110;
		t.x = 8;
		t.y = 11;
		return t;
	};
	_proto.money_txt_i = function () {
		var t = new eui.Label();
		this.money_txt = t;
		t.anchorOffsetX = 0;
		t.size = 22;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xd87d13;
		t.width = 73;
		t.x = 35;
		t.y = 144;
		return t;
	};
	return SignItemViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SignLayer.exml'] = window.SignLayerSkin = (function (_super) {
	__extends(SignLayerSkin, _super);
	function SignLayerSkin() {
		_super.call(this);
		this.skinParts = ["MaskLayer","item0","item1","item2","item3","item4","item5","item6","boxRoot","scaleRoot","centerRoot"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.MaskLayer_i(),this.centerRoot_i()];
	}
	var _proto = SignLayerSkin.prototype;

	_proto.MaskLayer_i = function () {
		var t = new eui.Image();
		this.MaskLayer = t;
		t.alpha = 0.6;
		t.height = 1136;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "black1_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.centerRoot_i = function () {
		var t = new eui.Group();
		this.centerRoot = t;
		t.anchorOffsetY = 0;
		t.height = 0;
		t.width = 0;
		t.x = 320;
		t.y = 568;
		t.elementsContent = [this.scaleRoot_i()];
		return t;
	};
	_proto.scaleRoot_i = function () {
		var t = new eui.Group();
		this.scaleRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.boxRoot_i()];
		return t;
	};
	_proto.boxRoot_i = function () {
		var t = new eui.Group();
		this.boxRoot = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sign_bg_png";
		t.x = -301.21;
		t.y = -337.24;
		return t;
	};
	_proto.item0_i = function () {
		var t = new SignItemView();
		this.item0 = t;
		t.x = -256;
		t.y = -163;
		return t;
	};
	_proto.item1_i = function () {
		var t = new SignItemView();
		this.item1 = t;
		t.x = -126;
		t.y = -163;
		return t;
	};
	_proto.item2_i = function () {
		var t = new SignItemView();
		this.item2 = t;
		t.x = 3;
		t.y = -163;
		return t;
	};
	_proto.item3_i = function () {
		var t = new SignItemView();
		this.item3 = t;
		t.x = 131;
		t.y = -163;
		return t;
	};
	_proto.item4_i = function () {
		var t = new SignItemView();
		this.item4 = t;
		t.x = -210;
		t.y = 55;
		return t;
	};
	_proto.item5_i = function () {
		var t = new SignItemView();
		this.item5 = t;
		t.x = -63;
		t.y = 55;
		return t;
	};
	_proto.item6_i = function () {
		var t = new SignItemView();
		this.item6 = t;
		t.x = 84;
		t.y = 55;
		return t;
	};
	return SignLayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 1;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 45;
		t.textAlign = "left";
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TimeRewardView.exml'] = window.TimeRewardViewSkin = (function (_super) {
	__extends(TimeRewardViewSkin, _super);
	function TimeRewardViewSkin() {
		_super.call(this);
		this.skinParts = ["timeReward1","timeReward2","time_txt"];
		
		this.height = 120;
		this.width = 120;
		this.elementsContent = [this.timeReward1_i(),this.timeReward2_i(),this.time_txt_i()];
	}
	var _proto = TimeRewardViewSkin.prototype;

	_proto.timeReward1_i = function () {
		var t = new eui.Image();
		this.timeReward1 = t;
		t.source = "timeReward1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.timeReward2_i = function () {
		var t = new eui.Image();
		this.timeReward2 = t;
		t.source = "timeReward2_png";
		return t;
	};
	_proto.time_txt_i = function () {
		var t = new eui.Label();
		this.time_txt = t;
		t.rotation = 0;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 186;
		t.x = -31;
		t.y = 81;
		return t;
	};
	return TimeRewardViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);