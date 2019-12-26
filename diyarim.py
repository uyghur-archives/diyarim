import glob
import os
import re
import html
import shutil
import urllib.parse

#Header ghila qoshqandikin awu Googlening ID sini headerning ichidin izdeymiz
head_google_code = '''
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-143956760-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-143956760-1');
</script>
'''

index_header ='''
<html dir="RTL">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<style type="text/css">
@font-face {
	font-family: "UKIJ Tuz";
	font-weight: normal;
	src: local("UKIJ Tuz"), url("/UKIJTuz.ttf") format("TrueType"); /* non-IE */
}
body{
	font-size: 120%;
	font-family: UKIJ Tuz, UKIJ Basma, Boghda Tuz, UKIJ Nasq, Arial Unicode MS,Tahoma;
	text-align: justify;
}
a{
      text-decoration:none;
}
</style>
<title>دىيارىم توربېتىنىڭ https://archive.org دىن ئەسلىگە كەلتۈرۈلگەن يازمىلىرى</title>
</head>
<body>
<h3 align="center">دىيارىم توربېتىنىڭ https://archive.org دىن ئەسلىگە كەلتۈرۈلگەن يازمىلىرى</h3>
<hr align="middle" width="100%" size="3em" color="#559ee2">
<ul>
'''

index_footer ='''
</ul>
</body>
</html>
'''


srcdir   = R'diyarim\bbs_diyarim'
targetdir = R'diyarim\pages'

remove_title = ['新疆维吾尔人第一门户网站','powered by phpwind.net',
' Powered Uyghur by UYPW Code © 2008-06',
'for Uighur by Kroran Code © 2007-03','دىيارىم مۇنبىرى',
'帖子ID非法',
'- BBS.Diyarim.com ::',
'- www.Diyarim.com ::',
'for Uyghur by UYPW Code © 2008-01'
]

remove_urls = ['http://bbs.diyarim.com/','http://www.diyarim.com/"']

re_title = re.compile('<title>(.*?)</title>', re.DOTALL)
def clean_title(mg):
    strTitle = mg.group(1)
    for str_r in remove_title:
        strTitle = strTitle.replace(str_r,'')
    strTitle = strTitle.replace('<<<','«').replace('>>>','»')
    strTitle = strTitle.replace('<<','«').replace('>>','»')
    strTitle = strTitle.replace('<','‹').replace('>','›')

    #strTitle = re.sub('[A-Za-z]',' ',strTitle)
    #strTitle = re.sub('\\s+',' ',strTitle)
    strTitle = strTitle.strip().rstrip('-')
    if strTitle.find('查看') !=-1 or strTitle.find('删除') !=-1 :
        strTitle = ''

    return '<title>' + strTitle.strip() + '</title>'

re_clean_comm = re.compile('<!--.*?-->', re.DOTALL)
re_links =   re.compile("(src|href)\\s*=\\s*['\"]([^ '\"]*)['\"]")



def getID(strname):
    newname = urllib.parse.unquote(strname)
    newname = newname.lower().replace('read.php?','').replace('.html','')
    newname = newname.lower().replace('showpost.asp?','')
    qr = urllib.parse.parse_qs(newname)
    if len(qr) == 0:
        qr = newname.split('-')
        i = 0
        id = ''
        pid = ''
        for item in qr:
            if item =='tid':
                id = qr[i+1]
            elif item == 'page':
                pid = qr[i+1]
            i = i+1
        if len(pid)>0 and pid != '1':
            id = id +'_'+pid

    else:
        if 'tid' in qr:
            idno = qr['tid'][0]
            if 'page' in qr:
                pageno = qr['page'][0]
                if pageno != '1': 
                    id = idno+'_'+pageno
                else:
                    id = idno
            else:
                id = idno
        elif 'id' in qr:
            id = qr['id'][0]
        else:
            id =''

    if len(id)>0:
        newname = 'diyarim'+id+'.html'
    else:
        newname = ''

    return newname

def process_links(mg):
    tag = mg.group(1)
    link = mg.group(2)
    link = os.path.basename(link)
    if link.startswith('read.php?'):
        link = getID(link)

    ret = tag+'="./'+link+'"'
    return ret

def ProcessText(alltext):
    rettext = html.unescape(alltext)
    rettext = re_clean_comm.sub('',rettext)
    rettext = rettext.replace('ص','ى')
    rettext = rettext.replace('ة','ە')
    rettext = rettext.replace('ذ','ۇ')
    rettext = re_title.sub(clean_title, rettext)
    
    for r_url in remove_urls:
        rettext = rettext.replace(r_url,'./')
    rettext = re_links.sub(process_links,rettext)

    if rettext.find('<head>') == -1:
        rettext = rettext.replace('<title>','<head>\n<title>')
    rettext = rettext.replace('<head>', head_google_code)
    #rettext = rettext.replace('<html xmlns="http://www.w3.org/1999/xhtml">','<html xmlns="http://www.w3.org/1999/xhtml" dir="rtl">')
    rettext = rettext.replace('./??common.js','./common.js')
    return rettext


def MakePages():
    os.makedirs(targetdir,exist_ok=True)
    patstr = os.path.join(srcdir, '**\\read.php*')
    files = glob.glob(patstr,recursive=True)
    size_dict ={}

    for afile in files:
        if os.path.isdir(afile):
            continue
        
        newfile = os.path.basename(afile)
        newfile = urllib.parse.unquote(newfile)
        newfile = getID(newfile)
        if len(newfile) == 0:
            print(afile, '-> Yoq')
            continue
        
        #print(afile, '->', newfile)
        #continue

        with open(afile,'r',encoding='utf_8_sig',errors='ignore') as fr:
            text = fr.read()
        
        text = ProcessText(text)
        newlen = len(text)
        if newfile not in size_dict or size_dict[newfile]<newlen:
            size_dict[newfile] =newlen
            newfile = os.path.join(targetdir,newfile)
            with open(newfile,'w',encoding='utf-8') as fw:
                fw.write(text)

            print(afile, '->', newfile)
    return


def MakePagesKonaMunber():
    os.makedirs(targetdir,exist_ok=True)
    patstr = os.path.join(srcdir, '**\\ShowPost.asp*')
    files = glob.glob(patstr,recursive=True)
    size_dict ={}

    for afile in files:
        if os.path.isdir(afile):
            continue
        
        newfile = os.path.basename(afile)
        newfile = getID(newfile)
        if len(newfile) == 0:
            print(afile, '-> Yoq')
            continue
        
        #print(afile, '->', newfile)
        #continue

        with open(afile,'r',encoding='utf_8_sig',errors='ignore') as fr:
            text = fr.read()
        
        text = ProcessText(text)
        newlen = len(text)
        if newfile not in size_dict or size_dict[newfile]<newlen:
            size_dict[newfile] =newlen
            newfile = os.path.join(targetdir,newfile)
            with open(newfile,'w',encoding='utf-8') as fw:
                fw.write(text)

            print(afile, '->', newfile)
    return

re_numbers = re.compile(r'(\d+)')
def numericalSort(value): 
    parts = value.replace('-','_')
    parts = re_numbers.split(parts)
    parts[1::2] = map(int, parts[1::2])
    return parts

def getTitles():
    res ={}
    tammlanghan = set()

    files = glob.glob(os.path.join(targetdir,'*.html'))
    files=sorted(files, key=numericalSort)

    hojjetler = '\n'.join(files)    
    with open('diyarim.txt','w',encoding='utf-8') as fp:
        fp.write(hojjetler)

    for afile in files:
        if afile.find('index.html') > 0 :
            continue

        with open(afile,'r',encoding='utf-8') as fp:
            content  = fp.read()                        

        #Bezi mezmunsiz hojjetlerni qoshmaymiz
        if len(content) <6000:
            continue
        
        name = afile.replace('.html','').replace(targetdir+'\\','')
        if name.find('-1-') != -1:
            pass
        else:
            pos =  name.find('_')
            if  pos!= -1:
                name = name[:pos]

            pos =  name.find('-')
            if  pos!= -1:
                name = name[:pos]

        if name in tammlanghan:
            continue

        tammlanghan.add(name)

        mawzular = re_title.findall(content)
        if len(mawzular)>0 and len( mawzular[0].strip())>0:
            strTitle = mawzular[0].strip()
            afile = afile.replace(targetdir+'\\','')
            res[afile] = strTitle
        else:
            print("{} -> {}".format(afile,"<Title> tag yoq iken"))
            os.remove(afile)

    return res

def GenerateIndex():
    mezmun=''
    res = getTitles()    
    for k,v in res.items():
        mezmun +='<li><a href="{}">{}</a></li>\n'.format(k.replace('\\','/'),v)
    head = index_header.replace('<head>', head_google_code)
    mezmun = head + mezmun + index_footer
    indexname = os.path.join(targetdir,'index.html')
    with open(indexname,'w', encoding='utf-8') as fp:
        fp.write(mezmun)

    print("Jemiy {} yazma uchun index.html hasil qilindi".format(len(res)))

def CopyCssImg():
    os.makedirs(srcdir,exist_ok=True)
    css   = glob.glob(os.path.join(srcdir, '**\\*.css'),recursive=True)
    jpg   = glob.glob(os.path.join(srcdir, '**\\*.jp*'),recursive=True)
    png   = glob.glob(os.path.join(srcdir, '**\\*.png'),recursive=True)
    gif   = glob.glob(os.path.join(srcdir, '**\\*.gif'),recursive=True)
    js   = glob.glob(os.path.join(srcdir, '**\\*.js'),recursive=True)
    fonts   = glob.glob(os.path.join(srcdir, '**\\*.ttf'),recursive=True)
    eots   = glob.glob(os.path.join(srcdir, '**\\*.eot'),recursive=True)
    all = css + jpg + png + gif + js + fonts + eots
    all = sorted(all)

    for afile in all:
        print(afile, end='')
        newfile = os.path.basename(afile)
        newfile = os.path.join(targetdir,newfile)
        shutil.copy2(afile,newfile)
        print(" : ", newfile)


if __name__ == "__main__":
    #st ='read.php%3ftid-111769-keyword-.html '
    #id = getID(st)
    MakePages()
    #MakePagesKonaMunber()
    CopyCssImg()
    GenerateIndex()
