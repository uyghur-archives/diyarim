function getpet (birthday) {
abc=birthday.split("-")
if (abc.length < 3){return("");}
birthyear=(abc[0]*1)
b="ﻣﺎﻳﻤﯘﻥ | ﺗﻮﺧﯘ | ﺋﯩﺖ | ﺗﻮﯕﮕﯘﺯ | ﭼﺎﺷﻘﺎﻥ | ﻛﺎﻻ | ﻳﻮﻟﯟﺍﺱ | ﺗﻮﺷﻘﺎﻥ | ﺋﻪﮊﺩﯨﮭﺎ | ﻳﯩﻼﻥ | ﺋﺎﺕ | ﻗﻮﻱ";
var list= b.split ('|');
return(list[birthyear%12]);
}



function astro(birth)
{
abc=birth.split("-")
if (abc.length < 3){return("");}
mm=(abc[1]*1)
dd=(abc[2]*1)
if (mm=='1'){
if(dd>=21){return('<img src=images/star/h.gif alt=水瓶座>');}
else{return('<img src=images/star/g.gif alt=魔羯座>');}
}

if (mm=='2'){
if(dd>=20){return('<img src=images/star/i.gif alt=双鱼座>');}
else{return('<img src=images/star/h.gif alt=水瓶座>');}
}

if (mm=='3'){
if(dd>=21){return('<img src=images/star/^.gif alt=白羊座>');}
else{return('<img src=images/star/i.gif alt=双鱼座>');}
}

if (mm=='4'){
if(dd>=21){return('<img src=images/star/_.gif alt=金牛座>');}
else{return('<img src=images/star/^.gif alt=白羊座>');}
}

if (mm=='5'){
if(dd>=22){return('<img src=images/star/`.gif alt=双子座>');}
else{return('<img src=images/star/_.gif alt=金牛座>');}
}

if (mm=='6'){
if(dd>=22){return('<img src=images/star/a.gif alt=巨蟹座>');}
else{return('<img src=images/star/`.gif alt=双子座>');}
}

if (mm=='7'){
if(dd>=23){return('<img src=images/star/b.gif alt=狮子座>');}
else{return('<img src=images/star/a.gif alt=巨蟹座>');}
}

if (mm=='8'){
if(dd>=24){return('<img src=images/star/c.gif alt=处女座>');}
else{return('<img src=images/star/b.gif alt=狮子座>');}
}

if (mm=='9'){
if(dd>=24){return('<img src=images/star/d.gif alt=天秤座>');}
else{return('<img src=images/star/c.gif alt=处女座>');}
}

if (mm=='10'){
if(dd>=24){return('<img src=images/star/e.gif alt=天蝎座>');}
else{return('<img src=images/star/d.gif alt=天秤座>');}
}

if (mm=='11'){
if(dd>=23){return('<img src=images/star/f.gif alt=射手座>');}
else{return('<img src=images/star/e.gif alt=天蝎座>');}
}

if (mm=='12'){
if(dd>=22){return('<img src=images/star/g.gif alt=魔羯座>');}
else{return('<img src=images/star/f.gif alt=射手座>');}
}

}