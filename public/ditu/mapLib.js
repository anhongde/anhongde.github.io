/**
 * Created by g on 2018/1/29.
 */
(function(){ window.BMap_loadScriptTime = (new Date).getTime(); window.BMap=window.BMap||{};window.BMap.apiLoad=function(){delete window.BMap.apiLoad;if(typeof mapInit=="function"){mapInit()}};var s=document.createElement('script');s.src='http://api.map.baidu.com/getscript?v=1.4&ak=&services=&t=20180102095227';document.body.appendChild(s);})();