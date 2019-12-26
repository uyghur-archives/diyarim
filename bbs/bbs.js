skins=getCookie('skins')


function bbsxptop(){
document.write("<table width=97% border=0 cellspacing=0 cellpadding=0 align=center><tr><TD>");
document.write("<TABLE align=center border=0 cellPadding=0 cellSpacing=0 width=100>");
document.write("  <TBODY>");
document.write("  <TR>");
document.write("");
document.write("</TR></TBODY></TABLE>");
document.write("<TABLE align=center background='images/skins/"+skins+"/bg_1.gif' border=0 ");
document.write("cellPadding=0 cellSpacing=0 height=160 width=97%>");
document.write("  <TBODY>");
document.write("  <TR>");
document.write("    <TD background=images/skins/"+skins+"/bg_1.gif>");

document.write("  </TD></TR><TR>");
document.write("");
document.write("</TR></TBODY></TABLE>");
}


function bbsxpbottom(){
document.write("")
}

function valigntop(){
document.write("<table cellpadding=0 cellspacing=0 width=97% align=center><tr><td><img src=images/skins/"+skins+"/T_left.gif></td><td width=100% background=images/skins/"+skins+"/T_bg.gif></td><td><img src=images/skins/"+skins+"/T_right.gif></td></tr></table>")
}

function valignbottom(){
document.write("<table cellpadding=0 cellspacing=0 width=97% align=center><tr><td><img src=images/skins/"+skins+"/B_left.gif></td><td width=100% background=images/skins/"+skins+"/B_bg.gif></td><td><img src=images/skins/"+skins+"/B_right.gif></td></tr></table>")
}

