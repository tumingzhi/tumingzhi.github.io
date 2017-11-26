
function date(){
   var d=new Date();
   document.write('今天是 ');
   document.write(d.getFullYear());
   document.write('年');
   document.write(d.getMonth()+1);
   document.write('月');
   document.write(d.getDate());
   document.write('日');
   document.write('&nbsp;&nbsp;&nbsp;');
var d=new Date();
var days=new Array("星期天","星期一","星期二","星期三","星期四","星期五","星期六");
var i=d.getDay();
   document.write(days[i]);
}
   
function printTime(){
  var d = new Date();
  var h= d.getHours();
  var m= d.getMinutes();
  var s= d.getSeconds();
  document.getElementById("time").innerHTML= h+":"+m+":"+s; 
}


   