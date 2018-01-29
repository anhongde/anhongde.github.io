/**
 * Created by g on 2018/1/29.
 */
(function(){ window.BMap_loadScriptTime = (new Date).getTime(); window.BMap=window.BMap||{};window.BMap.apiLoad=function(){delete window.BMap.apiLoad;if(typeof mapInit=="function"){mapInit()}};var s=document.createElement('script');s.src='mapLib2.js';document.body.appendChild(s);})();