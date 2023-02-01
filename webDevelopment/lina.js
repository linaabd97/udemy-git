var x=7-4;
document.write(x);
var a=0, b=10;
a=b++
document.write(b);
//a=b++, a=10 b=11
//a=++b ,a=11 b=11
var x=10;
var y=9;
document.write(x>y);
var x=10;
var y=9;
var z=12;
document.write(x>y && x>z);
document.write(!(x>y));
document.write(x>y|| x>z);
var age=14;
if (age>=18){
  document.write("you are allowed!")
}
else if(age>=15){
  document.write("return later!")
}
else{
    document.write("you are not allowed!")

}
function changecolor(){
  var dd1=document.getElementById("d1");
  var dd2=document.getElementById("d2");
  var dd3=document.getElementById("d3");
  dd1.className="bluecolor";
  dd2.className="bluecolor";
  dd3.className="bluecolor";



}
