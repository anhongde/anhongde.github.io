(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"72df":function(t,e,s){"use strict";var a=s("cfa2"),n=s.n(a);n.a},"7f7f":function(t,e,s){var a=s("86cc").f,n=Function.prototype,i=/^\s*function ([^ (]*)/,r="name";r in n||s("9e1e")&&a(n,r,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},cfa2:function(t,e,s){},da57:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("o",{directives:[{name:"show",rawName:"v-show",value:t.oShow,expression:"oShow"}]}),s("H",{attrs:{title:"我的订单",back:!0}}),s("div",{staticClass:"nav"},[s("div",{class:-1==t.navType?"active":"",on:{click:function(e){t.navType=-1}}},[t._v("全部订单")]),s("div",{class:1==t.navType?"active":"",on:{click:function(e){t.navType=1}}},[t._v("待支付订单")]),s("div",{class:10==t.navType?"active":"",on:{click:function(e){t.navType=10}}},[t._v("已支付订单")])]),s("div",{staticStyle:{height:"4.5rem"}}),s("div",{staticClass:"order-list"},t._l(t.orderList,function(e,a){return s("div",{directives:[{name:"show",rawName:"v-show",value:-1==t.navType||1==t.navType&&1==e.status||10==t.navType&&1!=e.status,expression:"navType==-1||(navType==1&&v.status==1)||(navType==10&&v.status!=1)"}],staticClass:"order-box"},[s("div",{staticClass:"t"},[t._v("订单编号："+t._s(e.orderNo))]),s("div",{staticClass:"t2"},[s("div",{staticClass:"kName"},[t._v(t._s(e.expressName))]),s("div",{staticClass:"stName"},[t._v("\n          "+t._s(t.getStName(e.status))+"\n        ")])]),s("div",{staticClass:"dt"},[t._v(t._s(e.savedt))]),s("div",{staticClass:"info"},[s("div",{staticClass:"l"},[s("img",{attrs:{src:t.getImg(e.skuId),alt:""}})]),s("div",{staticClass:"r"},[s("div",{staticClass:"t"},[t._v("\n            "+t._s(e.title)),s("br"),s("span",{directives:[{name:"show",rawName:"v-show",value:e.expressName,expression:"v.expressName"}]},[t._v(t._s(e.expressName)+"："+t._s(e.expressNo))])]),s("div",{staticClass:"num"},[t._v("\n            ￥"+t._s(e.actualPrice)),s("del",{directives:[{name:"show",rawName:"v-show",value:e.originalPrice,expression:"v.originalPrice"}]},[t._v("￥"+t._s(e.originalPrice))]),s("span",[t._v("x"+t._s(e.num))])])])]),s("div",{staticClass:"add"},[s("i",{staticClass:"iconfont iconweizhi"}),t._v("\n        "+t._s(e.daddress)+"\n        ")]),s("div",{staticClass:"price"},[t._v("\n        总价￥"+t._s(e.amount)+"  优惠￥0  "),s("span",[t._v(t._s(1==e.status?"应付款":"实付款")+"￥"+t._s(e.amount))])]),s("div",{staticClass:"btn-box"},[s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.status,expression:"v.status==1"}],staticClass:"c-btn",on:{click:function(s){return t.toBuy(e)}}},[t._v("去支付")]),s("div",{directives:[{name:"show",rawName:"v-show",value:1!=e.status,expression:"v.status!=1"}],staticClass:"c-btn",on:{click:function(s){return t.reBuy(e)}}},[t._v("再次购买")])])])}),0)],1)},n=[],i=(s("7f7f"),s("28a5"),s("f499")),r=s.n(i),o=(s("cadf"),s("551c"),s("f751"),s("097d"),s("dc0c")),c=s("3586"),u=s("440a"),d=s("71e4"),l=s.n(d),v=s("caff"),m=s.n(v),p={name:"",components:{H:o["a"],O:c["a"]},data:function(){return{oShow:!0,msg:"",banner:l.a,banner1:m.a,navType:-1,orderList:[]}},created:function(){var t=this,e=setInterval(function(){"complete"===document.readyState&&(t.oShow=!1,window.clearInterval(e))},500);this.orderList=localStorage.getItem("tmpOrderList")?JSON.parse(localStorage.getItem("tmpOrderList")):[];var s=localStorage.getItem("byInfo")?JSON.parse(localStorage.getItem("byInfo")):{buyed:0},a=this;u["a"].jqAjax(shenUrl+"mp/syn/list",r()({userId:localStorage.getItem("ticket").split(",")[1]}),"post",function(t){console.log(t),a.orderList=t.data,s&&s.buyed&&(a.orderList.unshift({orderNo:"new_id1234567",status:0,savedt:moment().format("YYYY-MM-DD h:mm:ss"),title:s.p_info.name,actualPrice:s.p_info.price,num:s.num,daddress:s.p_info.add.detailAddress,img:s.p_info.url,amount:s.p_info.price*s.num}),s.buyed=0,localStorage.setItem("tmpOrderList",r()(a.orderList)),localStorage.setItem("byInfo",r()(s)))},function(t){s&&s.buyed&&this.orderList.unshift({orderNo:"new_id1234567",status:0,savedt:moment().format("YYYY-MM-DD h:mm:ss"),title:s.p_info.name,actualPrice:s.p_info.price,num:s.num,daddress:s.p_info.add.detailAddress,img:s.p_info.url,amount:s.p_info.price*s.num}),s.buyed=0,localStorage.setItem("tmpOrderList",r()(this.orderList)),localStorage.setItem("byInfo",r()(s)),console.log(t)})},methods:{getStName:function(t){switch(t){case 0:return"已支付";case 1:return"待支付";case 2:return"退款";case 3:return"交易中";case 4:return"待发货";case 5:return"已发货";case 6:return"已收货";case 7:return"订单取消";case 8:return"申请退款";default:return""}},reBuy:function(){this.$router.push({path:"/p_info"})},toBuy:function(t){localStorage.setItem("byInfo",r()({p_info:{id:t.skuId?t.skuId:1,name:t.title?t.title:"经典版即食海参",des:"鲜嫩可口有营养",url:this.getImg(t.skuId),price:t.actualPrice},num:t.num})),this.$router.push({path:"/d_order",query:{danhao:t.id}})},getImg:function(t){return t?1==t?this.banner:this.banner1:this.banner}}},f=p,_=(s("72df"),s("2877")),h=Object(_["a"])(f,a,n,!1,null,"7c992fe4",null);e["default"]=h.exports}}]);