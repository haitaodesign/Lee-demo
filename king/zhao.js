//创建游戏界面
var rownum=2;
var gView;
var nums;
var biaoti=document.createElement("div");
biaoti.style.cssText="width: 400px;height: 100px;margin: 0 auto;background:lightskyblue;font-size: 40px;font-family:'叶根友毛笔行书2.0版';text-align: center;";
zhengye.appendChild(biaoti);
biaoti.innerText="找你妹";
var guanka=document.createElement("div");
guanka.style.cssText="width: 400px;height: 20px;margin-top: 10px;font-size: 20px;";
guanka.innerText="第"+1+"关";
biaoti.appendChild(guanka);
var x=20;
var jishi=document.createElement("div")
jishi.style.cssText="width: 60px;height: 20px;float: right;margin-top: -20px;"
jishi.innerText=x+"s";
biaoti.appendChild(jishi);
var t;
function view(){
	gView=document.createElement("div");
	gView.id="view";
	zhengye.appendChild(gView);
	nums=rownum*rownum;
	var suiji=parseInt(Math.random()*22)%nums;
	
	for (var i=0;i<nums;i++) {
		
		var view=colorview(rownum);
		
		if(i==suiji){
			view.innerText = "妹";
//			view.style.background="red";
			view.onclick =function(){
				clearInterval(t);
				chengg();
				guanka.innerText="第"+(rownum-1)+"关";
				tongguan();
				t=setInterval(daojishi,1000);
				x=20;
			}
			}else{
				view.onclick=function(){
					shib();
					guanka.innerText="失败重来，返回第1关";
				}
		}
		
	     gView.appendChild(view);
	}
   
}
view();
//倒计时
function daojishi(){
	x--;
	var y;
	y=x+"s";
	jishi.innerText=y;
	if(x==0){
		shib();
		x=20;
		clearInterval(t);
	}
}
//通关执行
function tongguan(){
	var cha=document.getElementById("tan");
	if(rownum==17){
	zhengye.removeChild(gView);
	cha.style.display="block";
       }
}
//成功执行
function chengg(){
	rownum++;
	zhengye.removeChild(gView);
	view();
	
}
//失败执行
function shib(){
	var cha2=document.getElementById("tan2");
	zhengye.removeChild(gView);
	cha2.style.display="block";
}
//创建小色块
function colorview(rownum){
	//边距
	var m = 3;
	//总宽度
	var allwidth=400;
	//总边距
	var allm =3*(rownum+1);
	//小色块宽度
	var width=(allwidth-allm)/rownum-2;
	var colorview=document.createElement("div");
	colorview.innerText="袜";
	colorview.style.cssText="width:"+width+"px; height:"+width+"px;background-color:cornflowerblue;border: 1px solid black;border-radius: 10%; float:left;margin: 3px 0 0 3px;text-align:center;font-family:'微软雅黑';line-height: "+width+"px;";
	colorview.style.fontSize = width/2+"px";
	return colorview;
}
