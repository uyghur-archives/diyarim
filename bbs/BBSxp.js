var i=0;
var ii=3;

newDate=new Date()
newDate=""+newDate.getYear()+"-"+[newDate.getMonth()+1]+"-"+newDate.getDate()+""


function getCookie (CookieName) { 
var CookieString = document.cookie; 
var CookieSet = CookieString.split (';'); 
var SetSize = CookieSet.length; 
var CookiePieces 
var ReturnValue = ""; 
var x = 0; 
for (x = 0; ((x < SetSize) && (ReturnValue == "")); x++) { 
CookiePieces = CookieSet[x].split ('='); 

if (CookiePieces[0].substring (0,1) == ' ') { 
CookiePieces[0] = CookiePieces[0].substring (1, CookiePieces[0].length); 
}

if (CookiePieces[0] == CookieName) {
ReturnValue = CookiePieces[1];
var value =ReturnValue
}


}
return value;
}



function checkclick(msg){if(confirm(msg)){event.returnValue=true;}else{event.returnValue=false;}}



function ShowPost(id,username,content,posttime,honor,userface,sex,birthday,experience,membercode,faction,consort,money,postcount,regtime,userlife,usermail,userhome,sign,medal)
{
document.write("<table class=a2 style=TABLE-LAYOUT:fixed cellPadding=5 width=97% align=center border=0 cellSpacing=1>");
ii++
if(ii==5){ii=3}
document.write("<tr class=a"+ii+"><td width=156 align=center valign=top>");
document.write("<table border=0 width=90%><tr><td><font style=font-size:10pt><b>"+username+"</b></font><br>"+honor+"</td><td align=right valign=top>");

if (""+sex+""!=''){
//document.write("<img src=images/"+sex+".gif>  ")
}



document.write(astro(""+birthday+""));
document.write("</td></tr></table>");

if (getCookie('showface')!='0'){
document.write("<img src='"+userface+"' onload='javascript:if(this.width>120)this.width=120;if(this.height>120)this.height=120;'>")
}

document.write(" <br>&nbsp;&nbsp;"+level1(experience,membercode,username,moderated)+levelimages+"&nbsp;&nbsp;&nbsp;");
if (medal!="" && medal!="|"){
document.write(Medal(medal));}
document.write("<br><table border=0 width=90%><tr><td>"+level(experience,membercode,username,moderated)+levelimage+"<br>&#65193;&#65257;&#65197;&#64488;&#65184;&#64489;&#65204;&#65264;: "+levelname+"<br>");
if (""+faction+"" !="") {document.write("&#65251;&#65258;&#65199;&#64428;&#64489;&#64345;&#65264;: "+faction+"<br>");}

document.write("&#65175;&#65258;&#65183;&#65198;&#64488;&#65170;&#64489;&#65204;&#65264;: "+experience+"<br>");
document.write("&#64344;&#64472;&#65247;&#65264;: "+money+"<br>");
document.write("&#65267;&#65262;&#65247;&#65276;&#65255;&#65252;&#64489;&#65204;&#65264;: "+postcount+"<br>");
document.write("&#65163;&#65258;&#65199;&#65165;&#65169;&#65262;&#65247;&#65232;&#65166;&#65253; &#64478;&#65165;&#65239;&#65176;&#65264;: <br>"+regtime.split(" ")[0]+"<br>");
document.write("&#65243;&#64476;&#64380;&#65264;: <img border=0 src=images/bar/0.gif width="+userlife/2+" height=9 alt="+userlife+"><br>");
if(onlinelist.indexOf("|"+username+"|") == -1 ){
document.write("&#64428;&#65166;&#65247;&#64489;&#65176;&#65264;:<img border=0 src=images/offline.gif alt='&#65267;&#65262;&#65237;'><br>");
}else{
document.write("&#64428;&#65166;&#65247;&#64489;&#65176;&#65264;:<img border=0 src=images/online.gif alt='&#65169;&#65166;&#65197;'><br>");
}

document.write("</td></tr></table></td><td height=100%>");
document.write("<table cellSpacing=0 cellPadding=0 width=100% border=0 height=100%><tr><td colspan=3 width=85%> <a href='Profile.asp?username="+username+"'><img alt='"+username+"ning materyalini kurush' src=images/Profile.gif border=0></a>   <a href='friend.asp?menu=add&username="+username+"'><img alt='"+username+" ni dostluqa qoshush' src=images/friend.gif border=0></a>  <a href='ShowBBS.asp?menu=5&username="+username+"'><img alt='"+username+" yollighan barliq temilarni izdesh' src=images/find.gif border=0></a>  <a href=mailto:"+usermail+"><img alt='"+username+"ge E-mail yollash' src=images/email.gif border=0></a> ");

if (userhome!="" && userhome!="http://"){
document.write("<a target=_blank href="+userhome+"><img alt="+userhome+" ning tor betini ziyaret qilish src=images/homepage.gif border=0></a>");
}
i=i+1
document.write(" <a href='retopic.asp?id="+topicid+"&retopicid="+id+"&quote=1&topic="+topic+"'><img alt=neqilliq_inkas src=images/reply.gif border=0></a> <a href='retopic.asp?id="+topicid+"&topic="+topic+"'><img src=images/replynow.gif border=0 alt=inkas></a></td><td align=left> &nbsp;&nbsp;No.<font color=red><b>"+i+"</b></font>&nbsp;</td></tr><tr vAlign=top><td colSpan=4><hr width=100% color=#777777 SIZE=1></td></tr>");


document.write("<tr vAlign=top><td colSpan=4 height=100% style='text-align:justify; text-justify:inter-ideograph; text-indent:26; unicode-bidi:embed'>");



if(badlist.indexOf(username) == -1 ){
document.write(ybbcode("<span id=yu"+id+">"+content+"</span>"));
}else{
document.write("<span id=yu"+id+">==============================<br> <font color=RED>&#65169;&#64472; &#65163;&#65166;&#65169;&#65262;&#65255;&#65176;&#65256;&#64489;&#64468; &#65163;&#64489;&#65256;&#65244;&#65166;&#65203;&#65248;&#64489;&#65198;&#65263; &#65163;&#64474;&#64380;&#64476;&#65197;&#64475;&#65247;&#64476;&#64344;&#65176;&#64472; </font><br>==============================</span>")
}
document.write("</td></tr><tr vAlign=top><td colSpan=4 align=right>")
if(getCookie('sign')!='0' && sign!=""){document.write("------------------------------------------------------------<br> <div style='OVERFLOW:auto' id=div"+id+">"+ybbcode(sign)+"</div>");}
document.write("</td></tr><tr vAlign=top><td colSpan=4><hr width=100% color=#777777 SIZE=1></td></tr><tr vAlign=top><td width=30%><a href='EditTopic.asp?id="+topicid+"&retopicid="+id+"&topic="+topic+"'><img src=images/edit.gif border=0></a> <a href=manage.asp?menu=deltopic&id="+topicid+"&retopicid="+id+"><img src=images/del.gif border=0></a> &nbsp;<a href='manage_post.asp?id="+topicid+"&retopicid="+id+"&topic="+topic+"'><img src=images/team.gif border=0 alt=baha> </a></td><td width=50% valign=bottom><img src=images/posttime.gif>&#65267;&#65262;&#65247;&#65276;&#65255;&#65232;&#65166;&#65253;&#64478;&#65165;&#65239;&#65176;&#65264;:"+posttime+"</td><td colSpan=2  valign=bottom><img src=images/ip.gif>IP:<a href=manage.asp?menu=lookip&id="+topicid+"&retopicid="+id+">&#65191;&#65166;&#65175;&#64489;&#65198;&#64488;&#65248;&#65258;&#65255;&#65194;&#65263;</a></td></tr></table></td></tr>");
document.write("</table>")
if(getCookie('sign')!='0' && sign!=""){if(eval("div"+id+".scrollHeight")>150){eval("div"+id+".style.height=150")}}
}



function ShowForum(ID,topic,newtopic,username,Views,icon,toptopic,locktopic,pollresult,goodtopic,replies,lastname,lasttime)
{
if(lasttime.indexOf(newDate) == 0){lasttime = lasttime.replace(newDate,"&#65169;&#64476;&#64404;&#64476;&#65253;");}
topic = topic.replace(key_word,"<font color=red>"+key_word+"<\/font>");
if (toptopic == 2) {reimage="<img src=images/top.gif border=0>"}
else
if (toptopic == 1) {reimage="<img src=images/f_top.gif border=0>"}
else
if (locktopic== 1) {reimage="<img src=images/f_locked.gif border=0>"}
else
if (pollresult!= '') {reimage="<img src=images/f_poll.gif border=0>"}
else
if ((replies>15) || (Views>150)) {reimage="<img src=images/f_hot.gif border=0>"}
else
if (replies>0) {reimage="<img src=images/f_new.gif border=0>"}
else{reimage="<img src=images/f_norm.gif border=0>"}

if (goodtopic== 1) {reimage2="<img src=images/topicgood.gif>"}
else
if (username == cookieusername) {reimage2="<img src=images/my.gif>"}
else{reimage2=""}

if (replies>0) {reimage3=replies}
else{reimage3="-"}

if (icon>0) {icon="<img src=images/brow/"+icon+".gif>"}

document.write("<tr height=25><td align=middle width=3% class=a4><a target=_blank href=ShowPost.asp?id="+ID+">"+reimage+"</a></td>");
document.write("<td width=3% class=a3 align=center>"+reimage2+"</td>");
document.write("<td class=a4 width=45%>&nbsp;<img loaded=no src=images/plus.gif id=followImg"+ID+" style=cursor:hand; onclick=loadThreadFollow("+ID+")> "+icon+" <a href=ShowPost.asp?id="+ID+">"+topic+"</a>");

if (replies > 15) {
var topicpage=""
var tol=replies/15+1;

for (var i=1; i < tol; i++) {
if(i<4 || i>=tol-2){
topicpage=topicpage+"<b><a href=ShowPost.asp?id="+ID+"&topage="+ i +">"+ i +"</a></b> ";
}
if (i >= tol-3  && i<tol-2 && i>3){topicpage=topicpage+" ... ";}
}
document.write(" ( <img src=images/multipage.gif> "+topicpage+")");
}

document.write(" "+newtopic+"</td><td align=middle width=9% class=a3><a href=Profile.asp?username="+username+">"+username+"</a></td><td align=middle width=6% class=a4>"+reimage3+"</td><td align=middle width=7% class=a3>"+Views+"</td><td width=27% class=a4>&nbsp;"+lasttime+" by <a href=Profile.asp?username="+lastname+">"+lastname+"</a></td></tr>");
document.write("<tr height=25 style=display:none id=follow"+ID+"><td width=3% class=a4> </td><td width=3% class=a3> </td><td id=followTd"+ID+" align=left class=a4 width=94% colspan=5>  Loading...</td></tr>");
}



function ShowList(pass,id,bbsname,icon,intro,moderated,today,toltopic,tolrestore,lasttime,lastname,lasttopic,password)
{
if(pass >2){password=1}

document.write("<tr><td width=5% align=middle bgcolor=FFFFFF>")

if(password==1){
document.write("<img src=images/skins/"+getCookie('skins')+"/Board3.gif>")
}else{
document.write("<img src=images/skins/"+getCookie('skins')+"/Board"+pass+".gif>")
}

document.write("</td><td bgcolor=FFFFFF>")

document.write("<table border=0 width=100% cellspacing=0 cellpadding=3><tr><td valign=top>[ <a href=ShowForum.asp?forumid="+id+">"+bbsname+"</a> ]</td><td rowspan=2 align=right>")

if (icon!=''){
document.write("<img src="+icon+" onload='javascript:if(this.width>100)this.width=100;if(this.height>60)this.height=60;'>")
}

document.write("</td>")

if(password==1){
document.write("<td rowspan=2 width=43% align=center>&#65251;&#65258;&#65191;&#64345;&#65264; &#65251;&#64472;&#65255;&#65166;&#65199;&#64488;&#65198;&#65257;")
}else{
document.write("<td rowspan=2 width=43%>&#65175;&#64487;&#65252;&#64489;&#65204;&#65264;: "+lasttopic+"...<br>&#65267;&#65262;&#65247;&#64489;&#65232;&#64472;&#64380;&#65264;: <a href=Profile.asp?username="+lastname+">"+lastname+"</a><br>&#64478;&#65165;&#65239;&#65176;&#65264;: "+lasttime+"")
}

document.write("</td></tr><tr><td>"+intro+"</td></tr><tr class=a3><td> &#65169;&#65166;&#65207;&#65240;&#64472;&#65197;&#65231;&#64472;&#64380;&#65264;: ")

var list= moderated.split ('|'); 
for(i=0;i<list.length;i++) {
if (list[i] !=''){
document.write("<a href=profile.asp?username="+list[i]+">"+list[i]+"</a> &nbsp;&nbsp;")
}
}

document.write("</td><td></td><td><table border=0 width=100% cellspacing=0><tr><td width=33%>&#65169;&#64476;&#64404;&#64476;&#65253;: <font color=red>"+today+"</font></td><td width=33%>&#65175;&#64487;&#65252;&#65166;: "+toltopic+"</td><td width=33%>ﻳﻮﻟﻼﻧﻤﺎ: "+tolrestore+"</td></tr></table></td></tr></table></td></tr>")

}


function SmallShowList(id,bbsname,intro,moderated,today,toltopic,tolrestore)
{
intro = intro.replace(/<br>/ig,"\n");

i++;
if (i==1){document.write("<tr>")}

document.write("<td><table border=0 width=100% cellspacing=0 cellpadding=4><tr bgcolor=FFFFFF><td colspan=3 title='"+intro+"'>[ <a href=ShowForum.asp?forumid="+id+">"+bbsname+"</a> ]</td></tr><tr bgcolor=FFFFFF><td>&#65169;&#64476;&#64404;&#64476;&#65253;: <font color=red>"+today+"</font></td><td>&#65175;&#64487;&#65252;&#65166;: "+toltopic+"</td><td>&#65163;&#64489;&#65256;&#65244;&#65166;&#65201;: "+tolrestore+"</td></tr><tr class=a3><td colspan=3>&#65169;&#65166;&#65207;&#65240;&#64472;&#65197;&#64471;&#65231;&#64472;&#64380;&#65264;: ")

var list= moderated.split ('|'); 
if (list.length!=0){document.write("<a href=profile.asp?username="+list[0]+">"+list[0]+"</a> &nbsp;&nbsp;")}
if (list.length>1){document.write(" <font color=gray>...</font>")}

document.write("</td></tr></table></td>")

if (i==3){i=0;document.write("</tr>")}

}


function makeupShowList()
{
if (i!=0){
for(jj=i;jj<3;jj++){document.write("<td bgcolor=FFFFFF></td>")}
i=0
}
}


function ShowPage(TotalPage,topage,url){
if (topage<6){PageLong=11-topage;}
else
if (TotalPage-topage<6){PageLong=10-(TotalPage-topage)}
else{PageLong=5;}

for (var i=1; i <= TotalPage; i++) {
if (i < topage+PageLong && i > topage-PageLong || i==1 || i==TotalPage){
if (topage==i){document.write(" "+ i +" ");}else{document.write(" <a href=?topage="+i+"&"+url+">"+ i +"</a> ");}
}
}

}


var menuOffX=0	
var menuOffY=20	

var ie4=document.all&&navigator.userAgent.indexOf("Opera")==-1
var ns6=document.getElementById&&!document.all
function showmenu(e,vmenu,mod){
	which=vmenu
	menuobj=document.getElementById("popmenu")
	menuobj.thestyle=menuobj.style
	menuobj.innerHTML=which
	menuobj.contentwidth=menuobj.offsetWidth
	eventX=e.clientX
	eventY=e.clientY
	var rightedge=document.body.clientWidth-eventX
	var bottomedge=document.body.clientHeight-eventY

		if (rightedge<menuobj.contentwidth)
			menuobj.thestyle.left=document.body.scrollLeft+eventX-menuobj.contentwidth+menuOffX
		else
			menuobj.thestyle.left=ie4? ie_x(event.srcElement)+menuOffX : ns6? window.pageXOffset+eventX : eventX
		
		if (bottomedge<menuobj.contentheight&&mod!=0)
			menuobj.thestyle.top=document.body.scrollTop+eventY-menuobj.contentheight-event.offsetY+menuOffY-23
		else
			menuobj.thestyle.top=ie4? ie_y(event.srcElement)+menuOffY : ns6? window.pageYOffset+eventY+10 : eventY

	menuobj.thestyle.visibility="visible"
}


function ie_y(e){  
	var t=e.offsetTop;  
	while(e=e.offsetParent){  
		t+=e.offsetTop;  
	}  
	return t;  
}  
function ie_x(e){  
	var l=e.offsetLeft;  
	while(e=e.offsetParent){  
		l+=e.offsetLeft;  
	}  
	return l;  
}

function highlightmenu(e,state){
	if (document.all)
		source_el=event.srcElement
		while(source_el.id!="popmenu"){
			source_el=document.getElementById? source_el.parentNode : source_el.parentElement
			if (source_el.className=="menuitems"){
				source_el.id=(state=="on")? "mouseoverstyle" : ""
		}
	}
}


function hidemenu(){if (window.menuobj)menuobj.thestyle.visibility="hidden"}
function dynamichide(e){if ((ie4||ns6)&&!menuobj.contains(e.toElement))hidemenu()}
document.onclick=hidemenu
document.write("<div class=menuskin id=popmenu onmouseover=highlightmenu(event,'on') onmouseout=highlightmenu(event,'off');dynamichide(event)></div>")


// add area script
function focusEdit(editBox)
{
 if ( editBox.value == editBox.helptext )
 {
 editBox.value = '';
 editBox.className = 'editbox';
 }
 return true;
}
function blurEdit(editBox)
{
 if ( editBox.value.length == 0 )
 {
 editBox.className = 'editbox Graytitle';
 editBox.value = editBox.helptext;
 }
}
function ValidateTextboxAdd(box, button)
{
 var buttonCtrl = document.getElementById( button );
 if ( buttonCtrl != null )
 {
 if (box.value == "" || box.value == box.helptext)
 {
 buttonCtrl.disabled = true;
 }
 else
 {
 buttonCtrl.disabled = false;
 }
 }
}
// add area script end


function loadtree(ino,bbsname){
document.frames["hiddenframe"].location.replace("ForumTree.asp?id="+ino+"")
}


function loadThreadFollow(ino,online){
var targetImg =eval("followImg" + ino);
var targetDiv =eval("follow" + ino);
if (targetDiv.style.display!='block'){
if(targetImg.loaded=="no"){document.frames["hiddenframe"].location.replace("loading.asp?id="+ino+"&forumid="+online+"");}
targetDiv.style.display="block";
targetImg.src="images/minus.gif";
}else{
targetDiv.style.display="none";
targetImg.src="images/plus.gif";
}
}
document.write("<iframe height=0 width=0 name=hiddenframe></iframe>")



function Medal(medal){
var honornote=new Array();
honornote[1]="Aktipliq";
honornote[2]="Mediniyetlik";
honornote[3]="Toghra Pikir";
honornote[4]="Mis";
honornote[5]="Kumush";
honornote[6]="Altun";
honornote[7]="Aq Altun";
honornote[8]="Almas";
honornote[9]="Eng Yuqiri Sherep";
medal=medal.split("|");
var temp="";
for (HO=1;HO<medal.length-1;HO++){
if (medal[HO]<10 &&medal[HO]>0){
temp+="<img src='images/level/winner"+medal[HO]+".gif' alt='"+honornote[medal[HO]]+" Midali'> ";
}
}
return temp;
}
