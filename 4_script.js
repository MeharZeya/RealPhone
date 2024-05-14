var cir= document.getElementById("circle");
var ub= document.getElementById("up");
var db= document.getElementById("down");

var rv=circle.style.transform;
var rs;
up.onclick=function(){
    rs=rv+"rotate(-90deg)";
    circle.style.transform=rs;
    rv=rs;
}
down.onclick=function(){
    rs=rv+"rotate(90deg)";
    circle.style.transform=rs;
    rv=rs;
}