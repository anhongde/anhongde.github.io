/**
 * Created by g on 2019/7/9.
 */
let hostUrl = window.location.hostname;
let fUrl = 'http://localhost:8081/';
//      console.log(hostUrl);
if(hostUrl != 'localhost'){
  //fUrl = 'http://bugs.emkol.cn/zentao/web/'
  fUrl = 'http://anrui_file.emkol.cn/'
}
var wStr = '';

for(let i = 0;i<cssArr.length;i++){
  wStr += '<link rel="stylesheet" type="text/css" href="' + fUrl + cssArr[i] +'"/>'
}
for(let i = 0;i<jsArr.length;i++){
  wStr += "<script src='" +  fUrl + jsArr[i] + "'>"+"<"+"/script>";
}

document.writeln(wStr);
