function ybbcode(temp) {

if (getCookie('ybbcode')!='0'){ //是否打开YBB代码
temp = temp.replace(/&amp;/ig,"&");
temp=temp.replace(/\[(\/|)b\]/ig,"<$1b>");
temp=temp.replace(/\[(\/|)i\]/ig,"<$1i>");
temp=temp.replace(/\[(\/|)u\]/ig,"<$1u>");
temp=temp.replace(/\[(\/|)strike\]/ig,"<$1strike>");
temp=temp.replace(/\[(\/|)center\]/ig,"<$1center>");
temp=temp.replace(/\[(\/|)hide\]/ig,"<$1hide>");
temp=temp.replace(/\[marquee\]/ig,"<marquee width=90% behavior=alternate  scrollamount=3>");
temp=temp.replace(/\[\/marquee\]/ig,"<\/marquee>");
temp=temp.replace(/\[list\]/ig,"<ul>");
temp=temp.replace(/\[\/list\]/ig,"<\/ul>");
temp=temp.replace(/\[ltr\]/ig,"<div dir=ltr>");
temp=temp.replace(/\[\/ltr\]/ig,"<\/div>");
temp=temp.replace(/\[code\]/ig,"<code><BLOCKQUOTE>CODE: <HR Size=1>");
temp=temp.replace(/\[\/code\]/ig,"<HR SIZE=1><\/BLOCKQUOTE><\/code>");
temp=temp.replace(/\[QUOTE\]/ig,"<BLOCKQUOTE>&#65255;&#65258;&#65239;&#64489;&#65246;: <HR Size=1>");
temp=temp.replace(/\[\/QUOTE\]/ig,"<HR SIZE=1><\/BLOCKQUOTE>");
temp=temp.replace(/(\[font=)([^.:;`'"=\]]*)(\])/ig,"<FONT face='$2'>");
temp=temp.replace(/\[\/font\]/ig,"<\/FONT>");
temp=temp.replace(/(\[COLOR=)([^.:;`'"=\]]*)(\])/ig,"<FONT COLOR='$2'>");
temp=temp.replace(/\[\/COLOR\]/ig,"<\/FONT>");
temp=temp.replace(/(\[size=)([0-9]*)(\])/ig,"<FONT size='$2'>");
temp=temp.replace(/\[\/size\]/ig,"<\/FONT>");
temp=temp.replace(/(\[URL\])([^]]*)(\[\/URL\])/ig,"<A TARGET=_blank HREF='$2'>$2</A>");
temp=temp.replace(/(\[URL=)([^]]*)(\])/ig,"<A TARGET=_blank HREF='$2'>");
temp=temp.replace(/\[\/URL\]/ig,"<\/A>");
temp=temp.replace(/(\[EMAIL\])(\S+\@[^]]*)(\[\/EMAIL\])/ig,"<a href=mailto:$2>$2</a>");
temp=temp.replace(/<A HREF=\"([^"]*)\">/ig,"<A TARGET=_blank HREF=\"$1\">");
temp = temp.replace(/(\[iframe\])(.[^\[]*)(\[\/iframe\])/ig,"<br><iframe width='99%' height=400 frameborder=0 scrolling=yes src=$2><\/iframe>");
temp = temp.replace(/(\[red\])(.[^\[]*)(\[\/red\])/ig,"<table width='86%' border='0' cellspacing='0' cellpadding='0' ><td align=left style='font-size: 12pt; COLOR: #ffffff; FILTER: glow(color=000000,strength=2) dropshadow(color=#ff0000,offx=1, offy=1, positive=2); HEIGHT: 20px; MARGIN: 0px; TEXT-DECORATION: none'>$2<\/td><\/tr><\/table>");
temp=temp.replace(/<IMG src=\"([^"]*)\">/ig,"<IMG src=\"$1\" border=0 onmousewheel='return yuzi_img(event,this)' onload='javascript:if(this.width>body.clientHeight)this.width=body.clientHeight'>");
}

if (getCookie('YbbMedia')!='0'){  //是否打开[FLASH][RM][MP]代码
temp=temp.replace(/(\[FLASH=([0-9]*)\,([0-9]*)\])([^]]*)(\[\/FLASH\])/ig,"<embed width=$2 height=$3 src=$4 wmode=transparent>");
temp = temp.replace(/(\[RM=([0-9]*)\,([0-9]*)\])([^]]*)(\[\/RM\])/ig,"<br><OBJECT classid=clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA width=$2 height=$3><PARAM NAME=SRC VALUE=$4><PARAM NAME=CONSOLE VALUE=Clip1><PARAM NAME=CONTROLS VALUE=imagewindow><PARAM NAME=AUTOSTART VALUE=true><\/OBJECT><br><OBJECT classid=CLSID:CFCDAA03-8BE4-11CF-B84B-0020AFBBCCFA height=60 width=430><PARAM NAME=CONTROLS VALUE=ControlPanel,StatusBar><PARAM NAME=CONSOLE VALUE=Clip1><\/OBJECT>");
temp = temp.replace(/(\[MP=([0-9]*)\,([0-9]*)\])([^]]*)(\[\/MP\])/ig,"<br><object classid=CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95 width=$2 height=$3><param name=ShowStatusBar value=-1><param name=Filename value=$4><\/object>");
temp = temp.replace(/(\[MP\])([^]]*)(\[\/MP\])/ig,"<br><object classid=CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95 width=430 height=350><param name=ShowStatusBar value=-1><param name=Filename value=$2><\/object>");
temp = temp.replace(/(\[mp3\])(.[^\[]*)(\[\/mp3\])/ig,"<br><OBJECT classid=CLSID:CFCDAA03-8BE4-11CF-B84B-0020AFBBCCFA height=60 id=video2 width=430><PARAM NAME=SRC VALUE=$2><PARAM NAME=AUTOSTART VALUE=true><PARAM NAME=CONTROLS VALUE=ControlPanel,StatusBar><PARAM NAME=CONSOLE VALUE=Clip1><PARAM NAME=type VALUE=audio/x-pn-realaudio-plugin></OBJECT>");
}

if (getCookie('ybbimg')!='0'){  //是否打开[IMG]代码
temp = temp.replace(/(\[IMG\])([^];]*)(\[\/IMG\])/ig,"<img border=0 src=\"$2\" onmousewheel='return yuzi_img(event,this)' onload='javascript:if(this.width>body.clientHeight)this.width=body.clientHeight'>");
}

if (getCookie('ybbbrow')!='0'){  //是否打开表情代码
temp = temp.replace(/(\[em)([0-9]*)(\])/ig,"<IMG border=0 SRC=images/Emotions/$2.gif>");
}

return (temp);
}

function level1(experience,membercode,username,moderated)
{
if (experience<= 100){levelimages="<img src=images/qq/star.gif alt='derjisi:1 urleshke zurur tejirbisi:"+(100-experience)+"'>";}
else
if (experience<= 300){levelimages="<img src=images/qq/star.gif alt='derjisi:2 urleshke zurur tejirbisi:"+(300-experience)+"'><img src=images/qq/star.gif alt='derjisi:2 urleshke zurur tejirbisi:"+(300-experience)+"'>";}
else
if (experience<= 600){levelimages="<img src=images/qq/star.gif alt='derjisi:3 urleshke zurur tejirbisi:"+(600-experience)+"'><img src=images/qq/star.gif alt='derjisi:3 urleshke zurur tejirbisi:"+(600-experience)+"'><img src=images/qq/star.gif alt='derjisi:3 urleshke zurur tejirbisi:"+(600-experience)+"'>";}
else
if (experience<= 1200){levelimages="<img src=images/qq/moon.gif alt='derjisi:4 urleshke zurur tejirbisi:"+(1200-experience)+"'>";}
else
if (experience<= 2000){levelimages="<img src=images/qq/moon.gif alt='derjisi:5 urleshke zurur tejirbisi:"+(2000-experience)+"'><img src=images/qq/star.gif alt='derjisi:5 urleshke zurur tejirbisi:"+(2000-experience)+"'>";}
else
if (experience<= 4000){levelimages="<img src=images/qq/moon.gif alt='derjisi:6 urleshke zurur tejirbisi:"+(4000-experience)+"'><img src=images/qq/star.gif alt='derjisi:6 urleshke zurur tejirbisi:"+(4000-experience)+"'><img src=images/qq/star.gif alt='derjisi:6 urleshke zurur tejirbisi:"+(4000-experience)+"'>";}
else
if (experience<= 8000){levelimages="<img src=images/qq/moon.gif alt='derjisi:7 urleshke zurur tejirbisi:"+(8000-experience)+"'><img src=images/qq/star.gif alt='derjisi:7 urleshke zurur tejirbisi:"+(8000-experience)+"'><img src=images/qq/star.gif alt='derjisi:7 urleshke zurur tejirbisi:"+(8000-experience)+"'><img src=images/qq/star.gif alt='derjisi:7 urleshke zurur tejirbisi:"+(8000-experience)+"'>";}
else
if (experience<= 12000){levelimages="<img src=images/qq/moon.gif alt='derjisi:8 urleshke zurur tejirbisi:"+(12000-experience)+"'><img src=images/qq/moon.gif alt='derjisi:8 urleshke zurur tejirbisi:"+(12000-experience)+"'>";}
else
if (experience<= 20000){levelimages="<img src=images/qq/moon.gif alt='derjisi:9 urleshke zurur tejirbisi:"+(20000-experience)+"'><img src=images/qq/moon.gif alt='derjisi:9 urleshke zurur tejirbisi:"+(20000-experience)+"'><img src=images/qq/star.gif alt='derjisi:9 urleshke zurur tejirbisi:"+(20000-experience)+"'>";}
else
if (experience<= 30000){levelimages="<img src=images/qq/moon.gif alt='derjisi:10 urleshke zurur tejirbisi:"+(30000-experience)+"'><img src=images/qq/moon.gif alt='derjisi:10' urleshke zurur tejirbisi:"+(30000-experience)+"><img src=images/qq/star.gif alt='derjisi:10 urleshke zurur tejirbisi:"+(30000-experience)+"'><img src=images/qq/star.gif alt='derjisi:10 urleshke zurur tejirbisi:"+(30000-experience)+"'>";}
else 
if (experience<= 60000){levelimages="<img src=images/qq/moon.gif alt='derjisi:11 urleshke zurur tejirbisi:"+(60000-experience)+"'><img src=images/qq/moon.gif alt='derjisi:11 urleshke zurur tejirbisi:"+(60000-experience)+"'><img src=images/qq/star.gif alt='derjisi:11 urleshke zurur tejirbisi:"+(60000-experience)+"'><img src=images/qq/star.gif alt='derjisi:11 urleshke zurur tejirbisi:"+(60000-experience)+"'><img src=images/qq/star.gif alt='derjisi:11 urleshke zurur tejirbisi:"+(60000-experience)+"'>";}
else
if (experience<= 120000){levelimages="<img src=images/qq/moon.gif alt='derjisi:12 urleshke zurur tejirbisi:"+(120000-experience)+"'><img src=images/qq/moon.gif alt='derjisi:12 urleshke zurur tejirbisi:"+(120000-experience)+"'><img src=images/qq/moon.gif alt='derjisi:12 urleshke zurur tejirbisi:"+(120000-experience)+"'>";}
else
if (experience<= 240000){levelimages="<img src=images/qq/moon.gif alt='derjisi:13 urleshke zurur tejirbisi:"+(240000-experience)+"'><img src=images/qq/moon.gif alt='derjisi:13 urleshke zurur tejirbisi:"+(240000-experience)+"'><img src=images/qq/moon.gif alt='derjisi:13 urleshke zurur tejirbisi:"+(240000-experience)+"'><img src=images/qq/star.gif alt='derjisi:13 urleshke zurur tejirbisi:"+(240000-experience)+"'>";}
else
if (experience<= 480000){levelimages="<img src=images/qq/moon.gif alt='derjisi:14 urleshke zurur tejirbisi:"+(480000-experience)+"'><img src=images/qq/moon.gif alt='derjisi:14 urleshke zurur tejirbisi:"+(480000-experience)+"'><img src=images/qq/moon.gif alt='derjisi:14 urleshke zurur tejirbisi:"+(480000-experience)+"'><img src=images/qq/star.gif alt='derjisi:14 urleshke zurur tejirbisi:"+(480000-experience)+"'><img src=images/qq/star.gif alt='derjisi:14 urleshke zurur tejirbisi:"+(480000-experience)+"'>";}
else
if (experience<= 1000000){levelimages="<img src=images/qq/moon.gif alt='derjisi:15 urleshke zurur tejirbisi:"+(1000000-experience)+"'><img src=images/qq/moon.gif alt='derjisi:15 urleshke zurur tejirbisi:"+(1000000-experience)+"'><img src=images/qq/moon.gif alt='derjisi:15 urleshke zurur tejirbisi:"+(1000000-experience)+"'><img src=images/qq/star.gif alt='derjisi:15 urleshke zurur tejirbisi:"+(1000000-experience)+"'><img src=images/qq/star.gif alt='derjisi:15 urleshke zurur tejirbisi:"+(1000000-experience)+"'><img src=images/qq/star.gif alt='derjisi:15 urleshke zurur tejirbisi:"+(1000000-experience)+"'>";}
else
if (experience<= 2500000){levelimages="<img src=images/qq/sun.gif alt='derjisi:16 urleshke zurur tejirbisi:"+(2500000-experience)+"'>";}
else
if (experience<= 5000000){levelimages="<img src=images/qq/sun.gif alt='derjisi:17 urleshke zurur tejirbisi:"+(5000000-experience)+"'><img src=images/qq/sun.gif alt='derjisi:17 urleshke zurur tejirbisi:"+(5000000-experience)+"'>";}
else
if (experience<= 10000000){levelimages="<img src=images/qq/sun.gif alt='derjisi:18 urleshke zurur tejirbisi:"+(10000000-experience)+"'><img src=images/qq/sun.gif alt='derjisi:18 urleshke zurur tejirbisi:"+(10000000-experience)+"'><img src=images/qq/sun.gif alt='derjisi:18 urleshke zurur tejirbisi:"+(10000000-experience)+"'>";}
else
if (experience> 10000000){levelimages="<img src=images/qq/sun.gif alt='derjisi:19'><img src=images/qq/sun.gif alt='derjisi:19'><img src=images/qq/sun.gif alt='derjisi:19'><img src=images/qq/sun.gif alt='derjisi:19'>";}
return('');
}


function level(experience,membercode,username,moderated)
{
if (membercode=='0'){levelname="&#65175;&#65258;&#65203;&#65176;&#64489;&#65240;&#65276;&#65255;&#65252;&#64489;&#65232;&#65166;&#65253;";levelimage="<img src=images/level/1.gif>";}
else
if (membercode=='4'){levelname="&#65169;&#65166;&#65207;&#65240;&#64472;&#65197;&#65231;&#64472;&#64380;&#65264;";levelimage="<img src=images/level/19.gif>";}
else
if (membercode=='5'){levelname="&#65251;&#64472;&#65255;&#65170;&#65258;&#65197; &#65251;&#65258;&#65203;&#65164;&#64472;&#65247;&#65264;";levelimage="<img src=images/level/20.gif>";}
else
if(moderated.indexOf("|"+username+"|") != -1 && moderated!=""){levelname="&#65203;&#65258;&#64428;&#64489;&#65170;&#65258; &#65251;&#65258;&#65203;&#65164;&#64472;&#65247;&#65264;";levelimage="<img src=images/level/18.gif>";}
else
if (membercode=='2'){levelname="&#65175;&#65258;&#65243;&#65248;&#64489;&#64345;&#65248;&#64489;&#65242; &#65163;&#65258;&#65199;&#65165;";levelimage="<img src=images/level/18.gif>";}else
if (experience<= 50){levelname="&#65169;&#64489;&#65198; &#65267;&#64472;&#65247;&#65176;&#64472;&#65199;";levelimage="<img src=images/level/1.gif>";}
else
if (experience<= 150){levelname="&#65163;&#64489;&#65244;&#65244;&#65264; &#65267;&#64472;&#65247;&#65176;&#64472;&#65199;";levelimage="<img src=images/level/2.gif>";}
else
if (experience<= 500){levelname="&#65163;&#64476;&#64378; &#65267;&#64472;&#65247;&#65176;&#64472;&#65199;";levelimage="<img src=images/level/3.gif>";}
else
if (experience<= 1000){levelname="&#65175;&#64474;&#65173; &#65267;&#64472;&#65247;&#65176;&#64472;";levelimage="<img src=images/level/4.gif>";}
else
if (experience<= 2000){levelname="&#65169;&#65258;&#65205; &#65267;&#64472;&#65247;&#65176;&#64472;&#65199;";levelimage="<img src=images/level/5.gif>";}
else
if (experience<= 4000){levelname="&#65163;&#65262;&#65253; &#65169;&#64487;&#65208;&#65264;";levelimage="<img src=images/level/6.gif>";}
else
if (experience<= 8000){levelname="&#65267;&#64472;&#65199; &#65169;&#64487;&#65208;&#65264;";levelimage="<img src=images/level/7.gif>";}
else
if (experience<= 12000){levelname="&#65251;&#64489;&#64468; &#65169;&#64487;&#65208;&#65264;";levelimage="<img src=images/level/8.gif>";}
else
if (experience<= 20000){levelname="&#65169;&#64489;&#65198;&#64488;&#65256;&#64381;&#65264; &#65163;&#65166;&#65239;&#65204;&#65166;&#65239;&#65166;&#65245;";levelimage="<img src=images/level/9.gif>";}
else
if (experience<= 30000){levelname="&#65163;&#64489;&#65244;&#65244;&#64489;&#65256;&#64381;&#65264; &#65163;&#65166;&#65239;&#65204;&#65166;&#65239;&#65166;&#65245;";levelimage="<img src=images/level/10.gif>";}
else
if (experience<= 50000){levelname="&#65163;&#64476;&#64380;&#64476;&#65255;&#64381;&#65264; &#65163;&#65166;&#65239;&#65204;&#65166;&#65239;&#65166;&#65245;";levelimage="<img src=images/level/11.gif>";}
else
if (experience<= 70000){levelname="&#65169;&#65258;&#65207;&#64489;&#65256;&#64381;&#65264; &#65163;&#65166;&#65239;&#65204;&#65166;&#65239;&#65166;&#65245;";levelimage="<img src=images/level/12.gif>";}
else
if (experience<= 100000){levelname="&#65251;&#64489;&#65202; &#65251;&#64489;&#65194;&#65165;&#65245;";levelimage="<img src=images/level/13.gif>";}
else
if (experience<= 130000){levelname="&#65243;&#64472;&#65251;&#64472;&#65205; &#65251;&#64489;&#65194;&#65165;&#65245;";levelimage="<img src=images/level/14.gif>";}
else
if (experience<= 160000){levelname="&#65163;&#65166;&#65247;&#65176;&#64472;&#65253; &#65251;&#64489;&#65194;&#65165;&#65245;";levelimage="<img src=images/level/15.gif>";}
else
if (experience<= 200000){levelname="&#65251;&#64472;&#65255;&#65170;&#65258;&#65197; &#64380;&#64489;&#64479;&#65257;&#65255;&#65194;&#64488;&#65200;&#65263;";levelimage="<img src=images/level/16.gif>";}
else
if (experience> 200000){levelname="&#65251;&#64472;&#65255;&#65170;&#65258;&#65197; &#65163;&#65166;&#65239;&#65204;&#65166;&#65239;&#64489;&#65248;&#65264;";levelimage="<img src=images/level/17.gif>";}
return('');
}

//放大缩小图片
function yuzi_img(e, o)
{
var zoom = parseInt(o.style.zoom, 10) || 100;
zoom += event.wheelDelta / 12;
if (zoom > 0) o.style.zoom = zoom + '%';
return false;
}