var str1=" ", str2=" ", str3=" ";//str3:dãy hiển thị trên màn hình. str1, str2: 2 số.
var no1=0, no2=0, cal=0, result=0, precal=false;//cal:loại phép tính. precal:kiểm tra liệu có giá trị lưu trong bộ nhớ tạm không.

function functnumber(number){             //nhập số
	if(cal==0){
		str1+=number;
		no1=Number(str1);
	}
	else {
		str2+=number;
		no2=Number(str2);
	}
	str3+=number;
	document.getElementById("input").innerHTML=str3;
}

function functdot(){                    //nhập dấu thập phân
	if(cal==0){
		str1+=".";
		no1=Number(str1);
	}
	else {
		str2+=".";
		no2=Number(str2);
	}
	str3+=".";
	document.getElementById("input").innerHTML=str3;
}

function functadd(){                             //ấn dấu cộng
	if(precal==true&&str1==" ") no1=result;
	if(cal!=0){                                 //thực hiện phép tính đang display trên màn hình
		if(cal==1) result=no1+no2;
		else if(cal==2) result=no1-no2;
		else if(cal==3) result=no1*no2;
		else if(cal==4) result=no1/no2;
		else result=no1%no2;
		document.getElementById("output").innerHTML=result;
		str1=" ";
		str2=" ";
		str3=" ";
		no1=result;
		no2=0;
		cal=1;
		precal=true;
	}
	cal=1;
	str3+="+";
	document.getElementById("input").innerHTML=str3;
}

function functsub(){
	if(precal==true&&str1==" ") no1=result;
	if(cal!==0){
		if(cal==1) result=no1+no2;
		else if(cal==2) result=no1-no2;
		else if(cal==3) result=no1*no2;
		else if(cal==4) result=no1/no2;
		else result=no1%no2;
		document.getElementById("output").innerHTML=result;
		str1=" ";
		str2=" ";
		str3=" ";
		no1=result;
		no2=0;
		cal=2;
		precal=true;
	}
	cal=2;
	str3+="-";
	document.getElementById("input").innerHTML=str3;
}

function functmul(){
	if(precal==true&&str1==" ") no1=result;
	if(cal!=0){
		if(cal==1) result=no1+no2;
		else if(cal==2) result=no1-no2;
		else if(cal==3) result=no1*no2;
		else if(cal==4) result=no1/no2;
		else result=no1%no2;
		document.getElementById("output").innerHTML=result;
		str1=" ";
		str2=" ";
		str3=" ";
		no1=result;
		no2=0;
		cal=3;
		precal=true;
	}
	cal=3;
	str3+="*";
	document.getElementById("input").innerHTML=str3;
}

function functdiv(){
	if(precal==true&&str1==" ") no1=result;
	if(cal!=0){
		if(cal==1) result=no1+no2;
		else if(cal==2) result=no1-no2;
		else if(cal==3) result=no1*no2;
		else if(cal==4) result=no1/no2;
		else result=no1%no2;
		document.getElementById("output").innerHTML=result;
		str1=" ";
		str2=" ";
		str3=" ";
		no1=result;
		no2=0;
		cal=4;
		precal=true;
	}
	cal=4;
	str3+="/";
	document.getElementById("input").innerHTML=str3;
}

function functmod(){
	if(precal==true&&str1==" ") no1=result;
	if(cal!=0){
		if(cal==1) result=no1+no2;
		else if(cal==2) result=no1-no2;
		else if(cal==3) result=no1*no2;
		else if(cal==4) result=no1/no2;
		else result=no1%no2;
		document.getElementById("output").innerHTML=result;
		str1=" ";
		str2=" ";
		str3=" ";
		no1=result;
		no2=0;
		cal=5;
		precal=true;
	}
	cal=5;
	str3+="%";
	document.getElementById("input").innerHTML=str3;
}

function functequal(){
	if(cal==1) result=no1+no2;
	else if(cal==2) result=no1-no2;
	else if(cal==3) result=no1*no2;
	else if(cal==4) result=no1/no2;
	else result=no1%no2;
	document.getElementById("output").innerHTML=result;
	str1=" ";
	str2=" ";
	str3=" ";
	no1=0;
	no2=0;
	cal=0;
	precal=true;
	
}

function functAC(){           //reset
	str1=" ";
	str2=" ";
	str3=" ";
	no1=0;
	no2=0;
	cal=0;
	result=0;
	precal=false;
	document.getElementById("input").innerHTML="0.0";
	document.getElementById("output").innerHTML="0.0";
}