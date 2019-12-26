var inited = 0 ;
var imode = 0 ; // input mode, default is Uyghur
var prevflag = 0 ;
var txtcpy = "" ;


function storeCaret ( content ) { // text area content
   if ( content.createTextRange ) {
      content.caretPos = document.selection.createRange().duplicate() ;
   }

   return true ;
}
function findSpecialString ( input ) //
{
   var sca = "|Il!" ; 

   var esp = sca.substr ( 0, 1 ) ; 
   var i ;

   while ( input.indexOf ( esp ) != -1 ) {
      i = Math.floor ( Math.random() * sca.length ) ;
      esp = esp + String.fromCharCode ( sca.charCodeAt(i) ) ; 
   }

   return esp ;
}

function insertAtContext ( content, charcode ) { // text area content
   var tmp = "" ;
   var prev_str = "", next_str = "" ;
   var prev = -1, cur = -1, next =-1 ; // previous, current, next character codes
   var repl = "" ; //replacement string
   var line_no = 0 ; // which line we are at
   var pos ;
   var charcount = 1 ;
   var esp = "" ;
   var cursor_position = 0 ;

   if ( content.createTextRange && content.caretPos ) {
      // clear selected text
      document.selection.createRange().text = "" ;
      // backup the current text content
      tmp = content.value ;

      // insert special char
      esp = findSpecialString ( tmp )  ;
      content.caretPos.text = esp ;

      // find index of special char
      cursor_position = content.value.indexOf ( esp );

      prev_str = tmp.substring(0, cursor_position - 1 );  //string to the left
      next_str = tmp.substring(cursor_position + esp.length, tmp.length); //string to the right

      line_no = get_lineno ( prev_str ) ;

      //alert ( "next_str:\"" + next_str + "\", cursor_pos: " + cursor_position ) ; 

      if ( cursor_position > 0 ) {
         prev = tmp.charCodeAt ( cursor_position - 1 ) ;
         charcount++ ;
      }

      if ( cursor_position < content.value.length - esp.length ) {
         next = content.value.charCodeAt ( cursor_position + esp.length ) ;
         charcount++ ;
      }

      cur = charcode ;

      repl = getContextString ( prev, cur, next ) ; 

      tmp = prev_str + repl + next_str ;
      content.value = tmp ;  

      pos = cursor_position + 1 - line_no ; // compensate for "\r\n"
      pos = pos + repl.length - charcount ; // compensate for "LA" 
      setSelectionRange ( content, pos, pos ) ;
   } 
}

function setSelectionRange(input, selectionStart, selectionEnd) {//ulax
  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(selectionStart, selectionEnd);
  } else if (input.createTextRange) {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveEnd('character', selectionEnd);
    range.moveStart('character', selectionStart);
    range.select();
  }
}

function setPreviewText ( str ) {
   var tmp = str ;
   var regExp = /\n/gi ;

   if ( prevflag == 0 ) {
      document.getElementById("Preview").innerHTML = "" ; 
   } else {
      tmp = tmp.replace ( regExp, "<br>" ) ;
      document.getElementById("Preview").innerHTML = tmp ; 
   }
}


function proc_kp ( content, event ) {
   var ev = event ;
   var t = content ; 

   var ch, i, ch2 ;

   /*
   if ( editable == false ) {
      ev.returnValue = false ;
      return false ;
   }
   */

   if ( imode == 1 ) { // English
      ev.returnValue = true ;
      return true ;
   }

   insertAtContext ( t, ev.keyCode ) ; 

   setPreviewText ( t.value ) ;

   ev.returnValue = false ;
   return false ;
}

function proc_kd ( content ) {
   var t = content ;

   storeCaret( t ) ;
}

function proc_ku ( content, event ) {
   var t = content ; 
   var kcode ;

   storeCaret( t ) ;

   kcode = event.keyCode ;

   if ( kcode == 8 ) {  // backspace key
      insertAtContext ( t, -1 ) ;
   } else if ( kcode == 46 ) { // delete key
      insertAtContext ( t, -1 ) ;
   } else if ( kcode == 17  ) { // Ctrl key
       if ( imode == 0 ) {
      imode = 1 ;
  	 } else {
      imode = 0 ;
   	}
   }

   setPreviewText ( t.value ) ;
}

function selectLang ( langID )
{
   var idx = document.getElementById(langID).selectedIndex ;
   var selected = document.getElementById(langID).options[idx].value;

   if ( selected == "English" ) {
      imode = 1 ;
   } else {
      imode = 0 ;
   }
}


var n = 1 ;
AA           = n++ ;
_AA_         = n++ ;
_AA          = n++ ;
__AA         = n++ ;
AE           = n++ ;
_AE          = n++ ;
_AE_         = n++ ;
__AE         = n++ ;
OO           = n++ ;
_OO          = n++ ;
S_OO         = n++ ;
__OO         = n++ ;
OE           = n++ ;
S_OE         = n++ ;
_OE          = n++ ;
__OE         = n++ ;
UE           = n++ ;
S_UE         = n++ ;
_UE          = n++ ;
__UE         = n++ ;
UU           = n++ ;
S_UU         = n++ ;
_UU          = n++ ;
__UU         = n++ ;
II           = n++ ;
I            = n++ ;
_II          = n++ ;
_I           = n++ ;
II_          = n++ ;
I_           = n++ ;
_I_          = n++ ;
_II_         = n++ ;
DSH          = n++ ;
DSH_         = n++ ;
EE           = n++ ;
E            = n++ ;
_EE          = n++ ;
_E           = n++ ;
EE_          = n++ ;
E_           = n++ ;
_E_          = n++ ;
_EE_         = n++ ;
BEE          = n++ ;
_BEE         = n++ ;
_BEE_        = n++ ;
BEE_         = n++ ;
NEE          = n++ ;
_NEE         = n++ ;
_NEE_        = n++ ;
NEE_         = n++ ;
GHEE         = n++ ;
_GHEE        = n++ ;
GHEE_        = n++ ;
_GHEE_       = n++ ;
PEE          = n++ ;
_PEE         = n++ ;
_PEE_        = n++ ;
PEE_         = n++ ;
DEE          = n++ ;
_DEE         = n++ ;
REE          = n++ ;
_REE         = n++ ;
ZEE          = n++ ;
_ZEE         = n++ ;
SZEE         = n++ ;
_SZEE        = n++ ;
TEE          = n++ ;
_TEE         = n++ ;
_TEE_        = n++ ;
TEE_         = n++ ;
FEE          = n++ ;
_FEE         = n++ ;
__FEE        = n++ ;
FEE_         = n++ ;
_FEE_        = n++ ;
KEE          = n++ ;
_KEE_        = n++ ;
KEE_         = n++ ;
_KEE         = n++ ;
JEE          = n++ ;
_JEE_        = n++ ;
_JEE         = n++ ;
JEE_         = n++ ;
NGEE         = n++ ;
_NGEE_       = n++ ;
_NGEE        = n++ ;
NGEE_        = n++ ;
CHEE         = n++ ;
_CHEE_       = n++ ;
_CHEE        = n++ ;
CHEE_        = n++ ;
SEE          = n++ ;
_SEE_        = n++ ;
SEE_         = n++ ;
_SEE         = n++ ;
QEE          = n++ ;
_QEE         = n++ ;
_QEE_        = n++ ;
QEE_         = n++ ;
SHEE         = n++ ;
_SHEE_       = n++ ;
SHEE_        = n++ ;
_SHEE        = n++ ;
HEE          = n++ ;
_HEE_        = n++ ;
_HEE         = n++ ;
HEE_         = n++ ;
LA           = n++ ;
_LA          = n++ ;
GEE          = n++ ;
_GEE_        = n++ ;
GEE_         = n++ ;
_GEE         = n++ ;
LEE          = n++ ;
LEE_         = n++ ;
_LEE_        = n++ ;
_LEE         = n++ ;
MEE          = n++ ;
MEE_         = n++ ;
_MEE_        = n++ ;
_MEE         = n++ ;
YEE          = n++ ;
YEE_         = n++ ;
_YEE_        = n++ ;
_YEE         = n++ ;
EHE_         = n++ ;
_EHE_        = n++ ;
VEE          = n++ ;
_VEE         = n++ ;
U_SEMICOLON  = n++ ;
U_QUESTION   = n++ ;
U_COMMA      = n++ ;
ONE          = n++ ;
TWO          = n++ ;
THREE        = n++ ;
FOUR         = n++ ;
FIVE         = n++ ;
SIX          = n++ ;
SEVEN        = n++ ;
EIGHT        = n++ ;
NINE         = n++ ;
ZERO         = n++ ;
EXCLAMATION  = n++ ;
ASTERISC     = n++ ;
PERCENT      = n++ ;
DOLLAR       = n++ ;
POUND        = n++ ;
AT           = n++ ;
WEDGE        = n++ ;
AND          = n++ ;
LPAREN       = n++ ;
RPAREN       = n++ ;
LBRACK       = n++ ;
RBRACK       = n++ ;
LBRACE       = n++ ;
RBRACE       = n++ ;
DQUOTE       = n++ ;
SQUOTE       = n++ ;
LTHAN        = n++ ;
GTHAN        = n++ ;
PIPE         = n++ ;
PRIM         = n++ ;
PLUS         = n++ ;
MINUS        = n++ ;
EQUAL        = n++ ;
TILDE        = n++ ;
DOT          = n++ ;
UNDERSCORE   = n++ ;
SPACE        = n++ ;
TAB          = n++ ;
COLON        = n++ ;
FSLASH       = n++ ;
BSLASH       = n++ ;
LFEED        = n++ ;

WD_BEG = 2 ;
IN_BEG = 1 ;
NO_BEG = 0 ;

var char_code = new Array( n ) ;
var beg_form = new Array( n ) ;
var in_beg_form = new Array( n ) ;
var end_form = new Array( n ) ;
var med_form = new Array( n ) ;
var rev_med_form = new Array( n ) ;
var beg_tab  = new Array( n ) ;

var initialized = 0 ;

char_code[ AA ]     = 0xFBEA ;
char_code[ _AA_ ]   = 0xFE8D ;
char_code[ _AA ]    = 0xFE8E ;
char_code[ __AA ]   = 0xFBEB ;
char_code[ AE ]     = 0xFBEC ;
char_code[ _AE ]    = 0xFEEA ;
char_code[ _AE_ ]   = 0xFEE9 ;
char_code[ __AE ]  = 0xFBED ;
char_code[ OO ]     = 0xFBEE ;
char_code[ _OO ]    = 0xFEEE ;
char_code[ S_OO ]    = 0xFEED ;
char_code[ __OO ]   = 0xFBEF ;
char_code[ OE ]     = 0xFBF2 ;
char_code[ S_OE ]   = 0xFBD9 ;
char_code[ _OE ]    = 0xFBDA ;
char_code[ __OE ]   = 0xFBF3 ;
char_code[ UE ]     = 0xFBF4 ;
char_code[ S_UE ]   = 0xFBDB ;
char_code[ _UE ]    = 0xFBDC ;
char_code[ __UE ]   = 0xFBF5 ;
char_code[ UU  ]    = 0xFBF0 ;
char_code[ S_UU  ]  = 0xFBD7 ;
char_code[ _UU  ]   = 0xFBD8 ;
char_code[ __UU  ]  = 0xFBEF ;
char_code[ II ]     = 0xFE8B ;
char_code[ I ]      = 0xFEEF ;
char_code[ _II ]    = 0xFE8C ;
char_code[ _I ]     = 0xFEF0 ;
char_code[ II_ ]    = 0xFE8B ;
//char_code[ I_ ]     = 0xFE8B ;
char_code[ I_ ]     = 0xFBE8 ;
//char_code[ _I_ ]    = 0xFE8C ;
char_code[ _I_ ]    = 0xFBE9 ;
char_code[ _II_ ]   = 0xFE8C ;
char_code[ DSH ]    = 0xFBE9 ;
char_code[ DSH_ ]   = 0xFBE8 ;
char_code[ EE ]     = 0xFBF6 ;
char_code[ E ]      = 0x06D0 ;
char_code[ _EE ]    = 0xFBF7 ;
char_code[ _E ]     = 0xFBE5 ; // the same with _EE?
char_code[ EE_ ]    = 0xFBF8 ;
char_code[ E_ ]     = 0xFBE6 ;
char_code[ _E_ ]    = 0xFBE7 ;
char_code[ _EE_ ]   = 0xFBD1 ;
char_code[ BEE ]    = 0xFE8F ;
char_code[ _BEE ]   = 0xFE90 ;
char_code[ _BEE_ ]  = 0xFE92 ;
char_code[ BEE_ ]   = 0xFE91 ;
char_code[ NEE ]    = 0xFEE5 ;
char_code[ _NEE ]   = 0xFEE6 ;
char_code[ _NEE_ ]  = 0xFEE8 ;
char_code[ NEE_ ]   = 0xFEE7 ;
char_code[ GHEE ]   = 0xFECD ;
char_code[ _GHEE ]  = 0xFECE ;
char_code[ GHEE_ ]  = 0xFECF ;
char_code[ _GHEE_ ] = 0xFED0 ;
char_code[ PEE ]    = 0xFB56 ;
char_code[ _PEE ]   = 0xFB57 ;
char_code[ _PEE_ ]  = 0xFB59 ;
char_code[ PEE_ ]   = 0xFB58 ;
char_code[ DEE ]    = 0xFEA9 ;
char_code[ _DEE ]   = 0xFEAA ;
char_code[ REE ]    = 0xFEAD ;
char_code[ _REE ]   = 0xFEAE ;
char_code[ ZEE ]    = 0xFEAF ;
char_code[ _ZEE ]   = 0xFEB0 ;
char_code[ SZEE ]   = 0xFB8A ;
char_code[ _SZEE ]  = 0xFB8B ;
char_code[ TEE ]    = 0xFE95 ;
char_code[ _TEE ]   = 0xFE96 ;
char_code[ _TEE_ ]  = 0xFE98 ;
char_code[ TEE_ ]   = 0xFE97 ;
char_code[ FEE ]    = 0xFED1 ;
char_code[ _FEE ]   = 0xFED2 ;
char_code[ __FEE ]  = 0xFED2 ;
char_code[ FEE_ ]   = 0xFED3 ;
char_code[ _FEE_ ]  = 0xFED4 ;
char_code[ KEE ]    = 0xFED9 ;
char_code[ _KEE_ ]  = 0xFEDC ;
char_code[ KEE_ ]   = 0xFEDB ;
char_code[ _KEE ]   = 0xFEDA ;
char_code[ JEE ]    = 0xFE9D ;
char_code[ _JEE_ ]  = 0xFEA0 ;
char_code[ _JEE ]   = 0xFE9E ;
char_code[ JEE_ ]   = 0xFE9F ;
char_code[ NGEE ]   = 0xFBD3 ;
char_code[ _NGEE_ ] = 0xFBD6 ;
char_code[ _NGEE ]  = 0xFBD4 ;
char_code[ NGEE_ ]  = 0xFBD5 ;
char_code[ CHEE ]   = 0xFB7A ;
char_code[ _CHEE_ ] = 0xFB7D ;
char_code[ _CHEE ]  = 0xFB7B ;
char_code[ CHEE_ ]  = 0xFB7C ;
char_code[ SEE ]    = 0xFEB1 ;
char_code[ _SEE_ ]  = 0xFEB4 ;
char_code[ SEE_ ]   = 0xFEB3 ;
char_code[ _SEE ]   = 0xFEB2 ;
char_code[ QEE ]    = 0xFED5 ;
char_code[ _QEE ]   = 0xFED6 ;
char_code[ _QEE_ ]  = 0xFED8 ;
char_code[ QEE_ ]   = 0xFED7 ;
char_code[ SHEE ]   = 0xFEB5 ;
char_code[ _SHEE_ ] = 0xFEB8 ;
char_code[ SHEE_ ]  = 0xFEB7 ;
char_code[ _SHEE ]  = 0xFEB6 ;
char_code[ HEE ]    = 0xFEA5 ;
char_code[ _HEE_ ]  = 0xFEA8 ;
char_code[ _HEE ]   = 0xFEA6 ;
char_code[ HEE_ ]   = 0xFEA7 ;
char_code[ LA ]    = 0xFEFB ;
char_code[ _LA ]     = 0xFEFC ;
char_code[ GEE ]    = 0xFB92 ;
char_code[ _GEE_ ]  = 0xFB95 ;
char_code[ GEE_ ]   = 0xFB94 ;
char_code[ _GEE ]   = 0xFB93 ;
char_code[ LEE ]    = 0xFEDD ;
char_code[ LEE_ ]   = 0xFEDF ;
char_code[ _LEE_ ]  = 0xFEE0 ;
char_code[ _LEE ]   = 0xFEDE ;
char_code[ MEE ]    = 0xFEE1 ;
char_code[ MEE_ ]   = 0xFEE3 ;
char_code[ _MEE_ ]  = 0xFEE4 ;
char_code[ _MEE ]   = 0xFEE2 ;
char_code[ YEE ]    = 0xFEF1 ;
char_code[ YEE_ ]   = 0xFEF3 ;
char_code[ _YEE_ ]  = 0xFEF4 ;
char_code[ _YEE ]   = 0xFEF2 ;
char_code[ EHE_ ]   = 0xFBAC ;
char_code[ _EHE_ ]  = 0xFBAD ;
char_code[ VEE ]    = 0xFBDE ;
char_code[ _VEE ]   = 0xFBDF ;

char_code[ U_SEMICOLON ]   = 0x061B ;
char_code[ U_QUESTION ]    = 0x061F ;
char_code[ U_COMMA ]    = 0x060C ;

//char_code[ U_COMMA ]    = getAsCharcode ( ',' ) ;

/* Standard Part */
char_code [ ONE ] = getAsCharcode ( '1' ) ;
char_code [ TWO ] =  getAsCharcode ('2' ) ;
char_code [ THREE ] = getAsCharcode ( '3' ) ;
char_code [ FOUR ] = getAsCharcode ( '4' ) ;
char_code [ FIVE ] = getAsCharcode ( '5' ) ;
char_code [ SIX ] = getAsCharcode ( '6' ) ;
char_code [ SEVEN ] = getAsCharcode ( '7' ) ;
char_code [ EIGHT ] = getAsCharcode ( '8' ) ;
char_code [ NINE ] = getAsCharcode ( '9' ) ;
char_code [ ZERO ] = getAsCharcode ( '0' ) ; 
char_code [ EXCLAMATION ] = getAsCharcode ( '!' ) ;
char_code [ ASTERISC ] = getAsCharcode ( '*' ) ;
char_code [ PERCENT ] = getAsCharcode ( '%' ) ;
char_code [ DOLLAR ] = getAsCharcode ( '$' ) ;
char_code [ POUND ] = getAsCharcode ( '#' ) ;
char_code [ AT ] = getAsCharcode ( '@' ) ;
char_code [ WEDGE ] = getAsCharcode ( '^' ) ;
char_code [ AND ] = getAsCharcode ( '&' ) ;
char_code [ LPAREN ] = getAsCharcode ( '(' ) ;
char_code [ RPAREN ] = getAsCharcode ( ')' ) ;
char_code [ LBRACK ] = getAsCharcode ( '[' ) ;
char_code [ RBRACK ] = getAsCharcode ( ']' ) ;
char_code [ LBRACE ] = getAsCharcode ( '{' ) ;
char_code [ RBRACE ] = getAsCharcode ( '}' ) ;
char_code [ DQUOTE ] = getAsCharcode ( '"' ) ;
char_code [ SQUOTE ] = getAsCharcode ( '\'' ) ;
char_code [ LTHAN ] = getAsCharcode ( '<' ) ;
char_code [ GTHAN ] = getAsCharcode ( '>' ) ;
char_code [ PIPE ] = getAsCharcode ( '|' ) ;
char_code [ PRIM ] = getAsCharcode ( '`' ) ;
char_code [ PLUS ] = getAsCharcode ( '+' ) ;
char_code [ MINUS ] = getAsCharcode ( '-' ) ;
char_code [ EQUAL ] = getAsCharcode ( '=' ) ;
char_code [ TILDE ] = getAsCharcode ( '~' ) ;
char_code [ DOT ] = getAsCharcode ( '.' ) ;
char_code [ UNDERSCORE ] = getAsCharcode ( '_' ) ;
char_code [ SPACE ] = getAsCharcode ( ' ' ) ;
char_code [ TAB ] = getAsCharcode ( '\t' ) ;
char_code [ COLON ] = getAsCharcode ( ':' ) ;
char_code [ FSLASH ] = getAsCharcode ( '/' ) ;
char_code [ BSLASH ] = getAsCharcode ( '\\' ) ;
char_code [ LFEED ] = getAsCharcode ( '\n' ) ;
//char_code [ LFEED ] = getAsCharcode ( '\r' ) ;


// beginning table
beg_tab[ AA ]     = WD_BEG ;
beg_tab[ _AA_ ]   = WD_BEG ;
beg_tab[ _AA ]    = WD_BEG ;
beg_tab[ __AA ]   = WD_BEG ;
beg_tab[ AE ]     = WD_BEG ;
beg_tab[ _AE ]    = WD_BEG ;
beg_tab[ _AE_ ]   = WD_BEG ;
beg_tab[ __AE ]  = WD_BEG ;
beg_tab[ OO ]     = IN_BEG ;
beg_tab[ _OO ]    = IN_BEG ;
beg_tab[ S_OO ]    = IN_BEG ;
beg_tab[ __OO ]   = IN_BEG ;
beg_tab[ OE ]     = IN_BEG ;
beg_tab[ S_OE ]   = IN_BEG ;
beg_tab[ _OE ]    = IN_BEG ;
beg_tab[ __OE ]   = IN_BEG ;
beg_tab[ UE ]     = IN_BEG ;
beg_tab[ S_UE ]   = IN_BEG ;
beg_tab[ _UE ]    = IN_BEG ;
beg_tab[ __UE ]   = IN_BEG ;
beg_tab[ UU  ]    = IN_BEG ;
beg_tab[ S_UU  ]  = IN_BEG ;
beg_tab[ _UU  ]   = IN_BEG ;
beg_tab[ __UU  ]  = IN_BEG ;
beg_tab[ II ]     = NO_BEG ;
beg_tab[ I ]      = NO_BEG ;
beg_tab[ _II ]    = NO_BEG ;
beg_tab[ _I ]     = NO_BEG ;
beg_tab[ II_ ]    = NO_BEG ;
beg_tab[ I_ ]     = NO_BEG ;
beg_tab[ _I_ ]    = NO_BEG ;
beg_tab[ _II_ ]   = NO_BEG ;
beg_tab[ DSH ]    = NO_BEG ;
beg_tab[ DSH_ ]   = NO_BEG ;
beg_tab[ EE ]     = NO_BEG ;
beg_tab[ E ]      = NO_BEG ;
beg_tab[ _EE ]    = NO_BEG ;
beg_tab[ _E ]     = NO_BEG ;
beg_tab[ EE_ ]    = NO_BEG ;
beg_tab[ E_ ]     = NO_BEG ;
beg_tab[ _E_ ]    = NO_BEG ;
beg_tab[ _EE_ ]   = NO_BEG ;
beg_tab[ BEE ]    = NO_BEG ;
beg_tab[ _BEE ]   = NO_BEG ;
beg_tab[ _BEE_ ]  = NO_BEG ;
beg_tab[ BEE_ ]   = NO_BEG ;
beg_tab[ NEE ]    = NO_BEG ;
beg_tab[ _NEE ]   = NO_BEG ;
beg_tab[ _NEE_ ]  = NO_BEG ;
beg_tab[ NEE_ ]   = NO_BEG ;
beg_tab[ GHEE ]   = NO_BEG ;
beg_tab[ _GHEE ]  = NO_BEG ;
beg_tab[ GHEE_ ]  = NO_BEG ;
beg_tab[ _GHEE_ ] = NO_BEG ;
beg_tab[ PEE ]    = NO_BEG ;
beg_tab[ _PEE ]   = NO_BEG ;
beg_tab[ _PEE_ ]  = NO_BEG ;
beg_tab[ PEE_ ]   = NO_BEG ;
beg_tab[ DEE ]    = IN_BEG ;
beg_tab[ _DEE ]   = IN_BEG ;
beg_tab[ REE ]    = IN_BEG ;
beg_tab[ _REE ]   = IN_BEG ;
beg_tab[ ZEE ]    = IN_BEG ;
beg_tab[ _ZEE ]   = IN_BEG ;
beg_tab[ SZEE ]   = IN_BEG ;
beg_tab[ _SZEE ]  = IN_BEG ;
beg_tab[ TEE ]    = NO_BEG ;
beg_tab[ _TEE ]   = NO_BEG ;
beg_tab[ _TEE_ ]  = NO_BEG ;
beg_tab[ TEE_ ]   = NO_BEG ;
beg_tab[ FEE ]    = NO_BEG ;
beg_tab[ _FEE ]   = NO_BEG ;
beg_tab[ __FEE ]  = NO_BEG ;
beg_tab[ FEE_ ]   = NO_BEG ;
beg_tab[ _FEE_ ]  = NO_BEG ;
beg_tab[ KEE ]    = NO_BEG ;
beg_tab[ _KEE_ ]  = NO_BEG ;
beg_tab[ KEE_ ]   = NO_BEG ;
beg_tab[ _KEE ]   = NO_BEG ;
beg_tab[ JEE ]    = NO_BEG ;
beg_tab[ _JEE_ ]  = NO_BEG ;
beg_tab[ _JEE ]   = NO_BEG ;
beg_tab[ JEE_ ]   = NO_BEG ;
beg_tab[ NGEE ]   = NO_BEG ;
beg_tab[ _NGEE_ ] = NO_BEG ;
beg_tab[ _NGEE ]  = NO_BEG ;
beg_tab[ NGEE_ ]  = NO_BEG ;
beg_tab[ CHEE ]   = NO_BEG ;
beg_tab[ _CHEE_ ] = NO_BEG ;
beg_tab[ _CHEE ]  = NO_BEG ;
beg_tab[ CHEE_ ]  = NO_BEG ;
beg_tab[ SEE ]    = NO_BEG ;
beg_tab[ _SEE_ ]  = NO_BEG ;
beg_tab[ SEE_ ]   = NO_BEG ;
beg_tab[ _SEE ]   = NO_BEG ;
beg_tab[ QEE ]    = NO_BEG ;
beg_tab[ _QEE ]   = NO_BEG ;
beg_tab[ _QEE_ ]  = NO_BEG ;
beg_tab[ QEE_ ]   = NO_BEG ;
beg_tab[ SHEE ]   = NO_BEG ;
beg_tab[ _SHEE_ ] = NO_BEG ;
beg_tab[ SHEE_ ]  = NO_BEG ;
beg_tab[ _SHEE ]  = NO_BEG ;
beg_tab[ HEE ]    = NO_BEG ;
beg_tab[ _HEE_ ]  = NO_BEG ;
beg_tab[ _HEE ]   = NO_BEG ;
beg_tab[ HEE_ ]   = NO_BEG ;
beg_tab[ _LA ]    = WD_BEG ;
beg_tab[ LA ]     = WD_BEG ;
beg_tab[ GEE ]    = NO_BEG ;
beg_tab[ _GEE_ ]  = NO_BEG ;
beg_tab[ GEE_ ]   = NO_BEG ;
beg_tab[ _GEE ]   = NO_BEG ;
beg_tab[ LEE ]    = NO_BEG ;
beg_tab[ LEE_ ]   = NO_BEG ;
beg_tab[ _LEE_ ]  = NO_BEG ;
beg_tab[ _LEE ]   = NO_BEG ;
beg_tab[ MEE ]    = NO_BEG ;
beg_tab[ MEE_ ]   = NO_BEG ;
beg_tab[ _MEE_ ]  = NO_BEG ;
beg_tab[ _MEE ]   = NO_BEG ;
beg_tab[ YEE ]    = NO_BEG ;
beg_tab[ YEE_ ]   = NO_BEG ;
beg_tab[ _YEE_ ]  = NO_BEG ;
beg_tab[ _YEE ]   = NO_BEG ;
beg_tab[ EHE_ ]   = NO_BEG ;
beg_tab[ _EHE_ ]  = NO_BEG ;
beg_tab[ VEE ]    = IN_BEG ;
beg_tab[ _VEE ]   = IN_BEG ;

beg_tab[ U_SEMICOLON ]   = WD_BEG ;
beg_tab[ U_QUESTION ]    = WD_BEG ;

beg_tab[ U_COMMA ]    = WD_BEG ;

/* Standard Part */
beg_tab [ ONE ] = WD_BEG ;
beg_tab [ TWO ] = WD_BEG ;
beg_tab [ THREE ] = WD_BEG ;
beg_tab [ FOUR ] = WD_BEG ;
beg_tab [ FIVE ] = WD_BEG ;
beg_tab [ SIX ] = WD_BEG ;
beg_tab [ SEVEN ] = WD_BEG ;
beg_tab [ EIGHT ] = WD_BEG ;
beg_tab [ NINE ] = WD_BEG ;
beg_tab [ ZERO ] = WD_BEG ; 
beg_tab [ EXCLAMATION ] = WD_BEG ;
beg_tab [ ASTERISC ] = WD_BEG ;
beg_tab [ PERCENT ] = WD_BEG ;
beg_tab [ DOLLAR ] = WD_BEG ;
beg_tab [ POUND ] = WD_BEG ;
beg_tab [ AT ] = WD_BEG ;
beg_tab [ WEDGE ] = WD_BEG ;
beg_tab [ AND ] = WD_BEG ;
beg_tab [ LPAREN ] = WD_BEG ;
beg_tab [ RPAREN ] = WD_BEG ;
beg_tab [ PLUS ] = WD_BEG ;
beg_tab [ MINUS ] = WD_BEG ;
beg_tab [ EQUAL ] = WD_BEG ;
beg_tab [ TILDE ] = WD_BEG ;
beg_tab [ DOT ] = WD_BEG ;
beg_tab [ UNDERSCORE ] = WD_BEG ;
beg_tab [ SPACE ] = WD_BEG ;
beg_tab [ TAB ] = WD_BEG ;
beg_tab [ LFEED ] = WD_BEG ;

function get_lineno ( str )
{
   var nl = "\r" ;
   var index ;
   var nolines = 0 ;

   index = str.indexOf ( nl ) ;

   while ( index != -1 ) {
      nolines++ ;
      index = str.indexOf ( nl, index + 1 ); //start search after last match found
   }

   return nolines ;
}

// returns a char code for a given character
function getAsCharcode ( ascii ) 
{
   var str, ch ;

   str = "" + ascii ;

   ch = str.charCodeAt(0) ;

   return ch ;
}

// loads beginning, medial, and ending forms, 
//   returns immediately if already initialized
function initialize ( ) {
   var i ;

   if ( initialized == 1 ) {
      return ;
   }

   initialized = 1 ;

   for ( i = 0 ; i < beg_form.length ; i++ ) {
      beg_form[i] = 0 ;
   } 

   beg_form[ _AA ] = AA ;
   beg_form[ _AA_ ] = AA ;
   beg_form[ _AE ] = AE ;
   beg_form[ _AE_ ] = AE ;
   beg_form[ _OO ] = OO ;
   beg_form[ __OO ] = OO ;
   beg_form[ S_OO ] = OO ;
   beg_form[ _OE ] = OE ;
   beg_form[ __OE ] = OE ;
   beg_form[ S_OE ] = OE ;
   beg_form[ _UU ] = UU ;
   beg_form[ __UU ] = UU ;
   beg_form[ S_UU ] = UU ;
   beg_form[ _UE ] = UE ;
   beg_form[ __UE ] = UE ;
   beg_form[ S_UE ] = UE ;

   beg_form[ _BEE ] = BEE ;
   beg_form[ _BEE_ ] = BEE_ ;
   beg_form[ _CHEE ] = CHEE ;
   beg_form[ _CHEE_ ] = CHEE_ ;
   beg_form[ _DEE ] = DEE ;
   beg_form[ _EHE_ ] = EHE_ ;
   beg_form[ _II ] = II ;
   beg_form[ _I  ] = I ;
   beg_form[ _II_ ] = II_ ;
   beg_form[ _I_ ] = I_ ;
   beg_form[ _EE ] = EE ;
   beg_form[ _E  ] = E ;
   beg_form[ _E_ ] = E_ ;
   beg_form[ _EE_ ] = EE_ ;
   beg_form[ _GEE ] = GEE ;
   beg_form[ _GEE_ ] = GEE_ ;
   beg_form[ _FEE ] = FEE ;
   beg_form[ _FEE_ ] = FEE_ ;
   beg_form[ _GHEE ] = GHEE ;
   beg_form[ _GHEE_ ] = GHEE_ ;
   beg_form[ _HEE ] = HEE ;
   beg_form[ _HEE_ ] = HEE_ ;
   beg_form[ _KEE ] = KEE ;
   beg_form[ _KEE_ ] = KEE_ ;
   beg_form[ _JEE ] = JEE ;
   beg_form[ _JEE_ ] = JEE_ ;
   beg_form[ _NGEE ] = NGEE ;
   beg_form[ _NGEE_ ] = NGEE_ ;
   beg_form[ _PEE ] = PEE ;
   beg_form[ _PEE_ ] = PEE_ ;
   beg_form[ _TEE ] = TEE ;
   beg_form[ _TEE_ ] = TEE_ ;
   beg_form[ _NEE ] = NEE ;
   beg_form[ _NEE_ ] = NEE_ ;
   beg_form[ _MEE ] = MEE ;
   beg_form[ _MEE_ ] = MEE_ ;
   beg_form[ _LEE ] = LEE ;
   beg_form[ _LEE_ ] = LEE_ ;
   beg_form[ _QEE ] = QEE ;
   beg_form[ _QEE_ ] = QEE_ ;
   beg_form[ _REE ] = REE ;
   beg_form[ _SEE ] = SEE ;
   beg_form[ _SEE_ ] = SEE_ ;
   beg_form[ _SHEE ] = SHEE ;
   beg_form[ _SHEE_ ] = SHEE_ ;
   beg_form[ _SZEE ] = SZEE ;
   beg_form[ _VEE ] = VEE ;
   beg_form[ _YEE ] = YEE ;
   beg_form[ _YEE_] = YEE_ ;
   beg_form[ _ZEE ] = ZEE ;

   beg_form[ _LA ] = LA ;

   for ( i = 0 ; i < in_beg_form.length ; i++ ) {
      in_beg_form[i] = 0 ;
   } 

   in_beg_form[ AA ] = _AA_ ;
   in_beg_form[ _AA ] = _AA_ ;
   in_beg_form[ __AA ] = _AA_ ;
   in_beg_form[ AE ] = _AE_ ;
   in_beg_form[ _AE ] = _AE_ ;
   in_beg_form[ __AE ] = _AE_ ;
   in_beg_form[ _OO ] = S_OO ;
   in_beg_form[ __OO ] = S_OO ;
   in_beg_form[ _OE ] = S_OE ;
   in_beg_form[ __OE ] = S_OE ;
   in_beg_form[ _UU ] = S_UU ;
   in_beg_form[ __UU ] = S_UU ;
   in_beg_form[ _UE ] = S_UE ;
   in_beg_form[ __UE ] = S_UE ;

   in_beg_form[ _BEE ] = BEE ;
   in_beg_form[ _BEE_ ] = BEE_ ;
   in_beg_form[ _CHEE ] = CHEE ;
   in_beg_form[ _CHEE_ ] = CHEE_ ;
   in_beg_form[ _DEE ] = DEE ;
   in_beg_form[ _EHE_ ] = EHE_ ;
   in_beg_form[ _II ] = II ;
   in_beg_form[ _I  ] = I ;
   in_beg_form[ _II_ ] = II_ ;
   in_beg_form[ _I_ ] = I_ ;
   in_beg_form[ _EE ] = EE ;
   in_beg_form[ _E  ] = E ;
   in_beg_form[ _E_ ] = E_ ;
   in_beg_form[ _EE_ ] = EE_ ;
   in_beg_form[ _GEE ] = GEE ;
   in_beg_form[ _GEE_ ] = GEE_ ;
   in_beg_form[ _FEE ] = FEE ;
   in_beg_form[ _FEE_ ] = FEE_ ;
   in_beg_form[ _GHEE ] = GHEE ;
   in_beg_form[ _GHEE_ ] = GHEE_ ;
   in_beg_form[ _HEE ] = HEE ;
   in_beg_form[ _HEE_ ] = HEE_ ;
   in_beg_form[ _KEE ] = KEE ;
   in_beg_form[ _KEE_ ] = KEE_ ;
   in_beg_form[ _JEE ] = JEE ;
   in_beg_form[ _JEE_ ] = JEE_ ;
   in_beg_form[ _NGEE ] = NGEE ;
   in_beg_form[ _NGEE_ ] = NGEE_ ;
   in_beg_form[ _PEE ] = PEE ;
   in_beg_form[ _PEE_ ] = PEE_ ;
   in_beg_form[ _TEE ] = TEE ;
   in_beg_form[ _TEE_ ] = TEE_ ;
   in_beg_form[ _NEE ] = NEE ;
   in_beg_form[ _NEE_ ] = NEE_ ;
   in_beg_form[ _MEE ] = MEE ;
   in_beg_form[ _MEE_ ] = MEE_ ;
   in_beg_form[ _LEE ] = LEE ;
   in_beg_form[ _LEE_ ] = LEE_ ;
   in_beg_form[ _QEE ] = QEE ;
   in_beg_form[ _QEE_ ] = QEE_ ;
   in_beg_form[ _REE ] = REE ;
   in_beg_form[ _SEE ] = SEE ;
   in_beg_form[ _SEE_ ] = SEE_ ;
   in_beg_form[ _SHEE ] = SHEE ;
   in_beg_form[ _SHEE_ ] = SHEE_ ;
   in_beg_form[ _SZEE ] = SZEE ;
   in_beg_form[ _VEE ] = VEE ;
   in_beg_form[ _YEE ] = YEE ;
   in_beg_form[ _YEE_] = YEE_ ;
   in_beg_form[ _ZEE ] = ZEE ;

   in_beg_form[ _LA ] = LA ;

   for ( i = 0 ; i < med_form.length ; i++ ) {
      med_form[i] = 0 ;
   } 

   med_form[ BEE ] = BEE_ ;
   med_form[ _BEE ] = _BEE_ ;
   med_form[ CHEE ] = CHEE_ ;
   med_form[ _CHEE ] = _CHEE_ ;
   med_form[ II ] = II_ ;
   med_form[ I  ] = I_ ;
   med_form[ _II ] = _II_ ;
   med_form[ _I ] = _I_ ;
   med_form[ EE ] = EE_ ;
   med_form[ E ] = E_ ;
   //med_form[ E_  ] = _EE ;
   med_form[ _E ] = _E_ ;
   med_form[ _EE ] = _EE_ ;
   med_form[ GEE ] = GEE_ ;
   med_form[ _GEE ] = _GEE_ ;
   med_form[ FEE ] = FEE_ ;
   med_form[ _FEE ] = _FEE_ ;
   med_form[ GHEE ] = GHEE_ ;
   med_form[ _GHEE ] = _GHEE_ ;
   med_form[ HEE ] = HEE_ ;
   med_form[ _HEE ] = _HEE_ ;
   med_form[ KEE ] = KEE_ ;
   med_form[ _KEE ] = _KEE_ ;
   med_form[ JEE ] = JEE_ ;
   med_form[ _JEE ] = _JEE_ ;
   med_form[ NGEE ] = NGEE_ ;
   med_form[ _NGEE ] = _NGEE_ ;
   med_form[ PEE ] = PEE_ ;
   med_form[ _PEE ] = _PEE_ ;
   med_form[ TEE ] = TEE_ ;
   med_form[ _TEE ] = _TEE_ ;
   med_form[ NEE ] = NEE_ ;
   med_form[ _NEE ] = _NEE_ ;
   med_form[ MEE ] = MEE_ ;
   med_form[ _MEE ] = _MEE_ ;
   med_form[ LEE ] = LEE_ ;
   med_form[ _LEE ] = _LEE_ ;
   med_form[ QEE ] = QEE_ ;
   med_form[ _QEE ] = _QEE_ ;
   med_form[ SEE ] = SEE_ ;
   med_form[ _SEE ] = _SEE_ ;
   med_form[ SHEE ] = SHEE_ ;
   med_form[ _SHEE ] = _SHEE_ ;
   med_form[ YEE ] = YEE_ ;
   med_form[ _YEE] = _YEE_ ;

   for ( i = 0 ; i < rev_med_form.length ; i++ ) {
      rev_med_form[i] = 0 ;
   } 

   rev_med_form[ AA ] = _AA ;
   rev_med_form[ _AA_ ] = _AA ;
   rev_med_form[ AE ] = _AE ;
   rev_med_form[ _AE_ ] = _AE ;
   rev_med_form[ OO ] = _OO ;
   rev_med_form[ S_OO ] = _OO ;
   rev_med_form[ OE ] = _OE ;
   rev_med_form[ S_OE ] = _OE ;
   rev_med_form[ UU ] = _UU ;
   rev_med_form[ S_UU ] = _UU ;
   rev_med_form[ UE ] = _UE ;
   rev_med_form[ S_UE ] = _UE ;

   rev_med_form[ BEE ] = _BEE ;
   rev_med_form[ BEE_ ] = _BEE_ ;
   rev_med_form[ CHEE ] = _CHEE ;
   rev_med_form[ CHEE_ ] = _CHEE_ ;
   rev_med_form[ DEE ] = _DEE ;
   rev_med_form[ EHE_ ] = _EHE_ ;
   rev_med_form[ II ] = _II ;
   rev_med_form[ I  ] = _I ;
   rev_med_form[ II_ ] = _II_ ;
   rev_med_form[ I_ ] = _I_ ;
   rev_med_form[ EE ] = _EE ;
   rev_med_form[ E ] = _E ;
   //rev_med_form[ E_  ] = _EE ;
   rev_med_form[ E_ ] = _E_ ;
   rev_med_form[ EE_ ] = _EE_ ;
   rev_med_form[ GEE ] = _GEE ;
   rev_med_form[ GEE_ ] = _GEE_ ;
   rev_med_form[ FEE ] = _FEE ;
   rev_med_form[ FEE_ ] = _FEE_ ;
   rev_med_form[ GHEE ] = _GHEE ;
   rev_med_form[ GHEE_ ] = _GHEE_ ;
   rev_med_form[ HEE ] = _HEE ;
   rev_med_form[ HEE_ ] = _HEE_ ;
   rev_med_form[ KEE ] = _KEE ;
   rev_med_form[ KEE_ ] = _KEE_ ;
   rev_med_form[ JEE ] = _JEE ;
   rev_med_form[ JEE_ ] = _JEE_ ;
   rev_med_form[ NGEE ] = _NGEE ;
   rev_med_form[ NGEE_ ] = _NGEE_ ;
   rev_med_form[ PEE ] = _PEE ;
   rev_med_form[ PEE_ ] = _PEE_ ;
   rev_med_form[ TEE ] = _TEE ;
   rev_med_form[ TEE_ ] = _TEE_ ;
   rev_med_form[ NEE ] = _NEE ;
   rev_med_form[ NEE_ ] = _NEE_ ;
   rev_med_form[ MEE ] = _MEE ;
   rev_med_form[ MEE_ ] = _MEE_ ;
   rev_med_form[ LEE ] = _LEE ;
   rev_med_form[ LEE_ ] = _LEE_ ;
   rev_med_form[ QEE ] = _QEE ;
   rev_med_form[ QEE_ ] = _QEE_ ;
   rev_med_form[ REE ] = _REE ;
   rev_med_form[ SEE ] = _SEE ;
   rev_med_form[ SEE_ ] = _SEE_ ;
   rev_med_form[ SHEE ] = _SHEE ;
   rev_med_form[ SHEE_ ] = _SHEE_ ;
   rev_med_form[ SZEE ] = _SZEE ;
   rev_med_form[ VEE ] = _VEE ;
   rev_med_form[ YEE ] = _YEE ;
   rev_med_form[ YEE_ ] = _YEE_ ;
   rev_med_form[ ZEE ] = _ZEE ;

   rev_med_form[ LA ] = _LA ;

   for ( i = 0 ; i < end_form.length ; i++ ) {
      end_form[i] = 0 ;
   } 

   end_form[ BEE_ ] = BEE ;
   end_form[ _BEE_ ] = _BEE ;
   end_form[ CHEE_ ] = CHEE ;
   end_form[ _CHEE_ ] = _CHEE ;
   end_form[ II_ ] = II ;
   end_form[ I_  ] = I ;
   end_form[ _II_ ] = _II ;
   end_form[ _I_ ] = _I ;
   end_form[ EE_ ] = EE ;
   end_form[ E_  ] = E ;
   end_form[ _E_ ] = _E ;
   end_form[ _EE_ ] = _EE ;
   end_form[ GEE_ ] = GEE ;
   end_form[ _GEE_ ] = _GEE ;
   end_form[ FEE_ ] = FEE ;
   end_form[ _FEE_ ] = _FEE ;
   end_form[ GHEE_ ] = GHEE ;
   end_form[ _GHEE_ ] = _GHEE ;
   end_form[ HEE_ ] = HEE ;
   end_form[ _HEE_ ] = _HEE ;
   end_form[ KEE_ ] = KEE ;
   end_form[ _KEE_ ] = _KEE ;
   end_form[ JEE_ ] = JEE ;
   end_form[ _JEE_ ] = _JEE ;
   end_form[ NGEE_ ] = NGEE ;
   end_form[ _NGEE_ ] = _NGEE ;
   end_form[ PEE_ ] = PEE ;
   end_form[ _PEE_ ] = _PEE ;
   end_form[ TEE_ ] = TEE ;
   end_form[ _TEE_ ] = _TEE ;
   end_form[ NEE_ ] = NEE ;
   end_form[ _NEE_ ] = _NEE ;
   end_form[ MEE_ ] = MEE ;
   end_form[ _MEE_ ] = _MEE ;
   end_form[ LEE_ ] = LEE ;
   end_form[ _LEE_ ] = _LEE ;
   end_form[ QEE_ ] = QEE ;
   end_form[ _QEE_ ] = _QEE ;
   end_form[ SEE_ ] = SEE ;
   end_form[ _SEE_ ] = _SEE ;
   end_form[ SHEE_ ] = SHEE ;
   end_form[ _SHEE_ ] = _SHEE ;
   end_form[ YEE_] = YEE ;
   end_form[ _YEE_] = _YEE ;
}
   
function getContextString ( prev, cur, next )
{
   var str, str1, str2 ;
   var code, code1, code2 ;
   var idx, idx1, idx2 ;

   // TODO: don't check this every time, move it to "onLoad"
   if ( initialized != 1 ) {
      initialize () ;
   }

   if ( cur == -1 ) { // backspace or delete pressed
      if ( prev == -1 ) { // nothing in front
	 if ( next == -1 ) { // nothing in the back
	    return "" ;
	 } else { 
            if ( next < 128 ) {
               return String.fromCharCode ( next ) ;
            }

	    idx2 = getIndex ( next ) ;
	    if ( beg_form[idx2] != 0 ) {
	       code2 = getUniCode ( beg_form[idx2] ) ;
	    } else {
	       code2 = next ;
	    }
	    return String.fromCharCode ( code2 ) ;
	 }
      } else if ( next == -1 ) {
	 idx = getIndex ( prev ) ;
	 if ( end_form[idx] != 0 ) {
	    code = getUniCode ( end_form[idx] ) ;
	 } else {
	    code = prev ;
	 }
	 return String.fromCharCode ( code ) ;
      } else {
	 if ( prev < 128 ) {
	    if ( next < 128 ) {
	       return String.fromCharCode ( prev, next ) ;
	    } else {
	       idx2 = getIndex ( next ) ;
	       if ( beg_form[idx2] != 0 ) {
		  code2 = getUniCode ( beg_form[idx2] ) ;
	       } else {
		  code2 = next ;
	       }
	       return String.fromCharCode ( prev, code2 ) ;
	    }
	 } else if ( next < 128 ) {
	    idx = getIndex ( prev ) ;
	    if ( end_form[idx] != 0 ) {
	        code = getUniCode ( end_form[idx] ) ;
	    } else {
	       code = prev ;
	    }
	    return String.fromCharCode ( code, next ) ;
	 }

	 idx = getIndex ( prev ) ;
	 idx2 = getIndex ( next ) ;
	 code = prev ;

         if ( idx == LEE || idx == LEE_ ) {
	    if ( idx2 == AA || idx2 == _AA || idx2 == _AA_ || idx2 == __AA ) {
	       str2 = String.fromCharCode ( getUniCode ( LA ) ) ;
	       return str2 ; 
	    }
         } else if ( idx == _LEE || idx == _LEE_ ) {
	    if ( idx2 == AA || idx2 == _AA || idx2 == _AA_ || idx2 == __AA ) {
	       str2 = String.fromCharCode ( getUniCode ( _LA ) ) ;
	       return str2 ;
	    }
         }

	 if ( beg_tab[idx] == WD_BEG ) {
	    if ( beg_form[idx2] != 0 ) {
	       code2 = getUniCode ( beg_form[idx2] ) ;
	    } else {
	       code2 = next ;
	    }
	 } else if ( beg_tab[idx] == IN_BEG ) {
	    if ( in_beg_form[idx2] != 0 ) {
	       code2 = getUniCode ( in_beg_form[idx2] ) ;
	    } else {
	       code2 = next ;
	    }
	 } else {
	    if ( med_form[idx] != 0 ) {
	       code = getUniCode( med_form[idx] ) ;
	    } else {
	       code = prev ;
	    }

	    if ( rev_med_form[idx2] != 0 ) {
	       code2 = getUniCode ( rev_med_form[idx2] ) ;
	    } else {
	       code2 = next ;
	    }
	 }
      }
      return String.fromCharCode ( code, code2 ) ;
   }

   if ( prev == -1 ) {
      if ( next == -1 ) {
	 idx1 = map_index ( cur, -1 ) ;
	 code = getUniCode ( idx1 ) ;
	 if ( end_form[idx1] != 0 ) {
	    code = getUniCode ( end_form[idx1] ) ;
	 }
         str = String.fromCharCode ( code ) ;
      } else {
         if ( next < 128 ) {
	    str = getContextString ( -1, cur, -1 ) + String.fromCharCode(next) ;
	    return str ;
         }

	 idx1 = map_index ( cur, prev ) ;
         idx2 = getIndex ( next ) ;  // next charcode index
	 code1 = getUniCode ( idx1 ) ;

         if ( is_alien ( idx1 ) || is_wd_beginner(idx1) ) {
	    if ( beg_form[idx2] != 0 ) {
	       code2 = getUniCode ( beg_form[idx2] ) ;
	    } else {
	       code2 = next ; 
	    }
         } else if ( is_in_beginner ( idx1 ) ) {
	    if ( in_beg_form[idx2] != 0 ) {
	       code2 = getUniCode ( in_beg_form[idx2] ) ;
	    } else {
	       code2 = next ; 
	    }
	 } else {
            if ( idx1 == LEE || idx1 == LEE_ ) {
	       if ( idx2 == AA || idx2 == _AA || idx2 == _AA_ || idx2 == __AA ) {
	          str2 = String.fromCharCode ( getUniCode ( LA ) ) ;
	          return str2 ; 
	       }
            } else if ( idx1 == _LEE || idx1 == _LEE_ ) {
	       if ( idx2 == AA || idx2 == _AA || idx2 == _AA_ || idx2 == __AA ) {
	          str2 = String.fromCharCode ( getUniCode ( _LA ) ) ;
	          return str2 ;
	       }
            }

	    if ( rev_med_form[idx2] != 0 ) { // update the next letter if necessary
	       code2 = getUniCode ( rev_med_form[idx2] ) ;
	    } else {
	       code2 = next ;
	    }
         }

	 str = String.fromCharCode ( code1, code2 ) ; 
      }
   } else if ( next == -1 ) {

      if ( prev < 128 ) {
	 str = String.fromCharCode(prev) + getContextString ( -1, cur, -1 ) ;
	 return str ;
      }

      idx = getIndex ( prev ) ;
      code = getUniCode ( map_index ( cur, idx ) ) ; // ucode for cur

      idx1 = getIndex ( code ) ;  // current code index

      if ( idx == LEE || idx == LEE_ ) {
	 if ( idx1 == AA || idx1 == _AA || idx1 == _AA_ || idx1 == __AA ) {
	    return String.fromCharCode ( getUniCode ( LA ) ) ;
	 }
      } else if ( idx == _LEE || idx == _LEE_ ) {
	 if ( idx1 == AA || idx1 == _AA || idx1 == _AA_ || idx1 == __AA ) {
	    return String.fromCharCode ( getUniCode ( _LA ) ) ;
	 }
      }

      if ( is_alien (idx1) == true ) { // if cur is not regular char
	 if ( end_form[ idx ] != 0 ) { // check for end form
	    code1 = getUniCode ( end_form[idx] ) ;

	    str = String.fromCharCode ( code1, getUniCode(idx1) ) ;
	 } else {
	    str = String.fromCharCode ( prev, code ) ;
	 }
      } else {
	 if ( med_form[idx] != 0 ) {  // see if to use medial form
	    code1 = getUniCode ( med_form[idx] ) ;
	 } else {
	    code1 = prev ;
	 }

	 if ( end_form[idx1] != 0 ) {
	    code = getUniCode ( end_form[idx1] ) ;
	 }

         str = String.fromCharCode ( code1, code ) ;
      }
   } else {
      idx = getIndex ( prev ) ;  // previous charcode index
      code = getUniCode ( map_index ( cur, idx ) ) ; // ucode for cur

      idx1 = getIndex ( code ) ;  // current code index
      idx2 = getIndex ( next ) ;  // next charcode index

      /*
      if ( next == String("\r").charCodeAt(0) ) {
	 str = getContextString ( prev, cur, -1 ) + String.fromCharCode(next) ;
	 return str ;
      }
      */

      if ( next < 128 ) {
	 if ( prev < 128 ) {
	    str=String.fromCharCode(prev)+getContextString(-1,cur,-1)+String.fromCharCode(next);
	 } else {
	    str= getContextString(prev,cur, -1) + String.fromCharCode(next) ;
	 }
	 return str ;
      }

      if ( is_alien ( idx1 ) ) {
	 if ( end_form[ idx ] != 0 ) { // check for end form
	    code1 = getUniCode ( end_form[idx] ) ;

	    str1 = String.fromCharCode ( code1, getUniCode(idx1) ) ;
	 } else {
	    str1 = String.fromCharCode ( prev, code ) ;
	 }

	 if ( beg_form[idx2] != 0 ) {
	    str2 = String.fromCharCode ( getUniCode ( beg_form[idx2] ) ) ;
	 } else {
	    str2 = String.fromCharCode(next) ; 
	 }
	 
	 str = str1.concat ( str2 ) ;
      } else if ( is_wd_beginner ( idx1 ) ) {
	 if ( beg_form[idx2] != 0 ) {
	    str2 = String.fromCharCode ( getUniCode ( beg_form[idx2] ) ) ;
	 } else {
	    str2 = String.fromCharCode(next) ; 
	 }

         if ( idx == LEE || idx == LEE_ ) {
	    if ( idx1 == AA || idx1 == _AA || idx1 == _AA_ || idx1 == __AA ) {
	       str1 = String.fromCharCode ( getUniCode ( LA ) ) ;
	       return str1.concat ( str2 ) ;
	    }
         } else if ( idx == _LEE || idx == _LEE_ ) {
	    if ( idx1 == AA || idx1 == _AA || idx1 == _AA_ || idx1 == __AA ) {
	       str1 = String.fromCharCode ( getUniCode ( _LA ) ) ;
	       return str1.concat ( str2 ) ;
	    }
         }

	 if ( med_form[idx] != 0 ) {  // see if to use medial form
	    code1 = getUniCode ( med_form[idx] ) ;
	 } else {
	    code1 = prev ;
	 }

	 str1 = String.fromCharCode ( code1, code ) ; 

	 str = str1.concat ( str2 ) ;
      } else if ( is_in_beginner(idx1) ) {
	 if ( in_beg_form[idx2] != 0 ) {
	    str2 = String.fromCharCode ( getUniCode ( in_beg_form[idx2] ) ) ;
	 } else {
	    str2 = String.fromCharCode ( next ) ;
	 }

	 if ( med_form[idx] != 0 ) {  // see if to use medial form
	    code1 = getUniCode ( med_form[idx] ) ;
	 } else {
	    code1 = prev ;
	 }

	 str1 = String.fromCharCode ( code1, code ) ; 

	 str = str1.concat ( str2 ) ;
      } else {
	 if ( med_form[idx] != 0 ) {  // see if to use medial form
	    code1 = getUniCode ( med_form[idx] ) ;
	 } else {
	    code1 = prev ;
	 }

         if ( idx1 == LEE || idx1 == LEE_ ) {
	    if ( idx2 == AA || idx2 == _AA || idx2 == _AA_ || idx2 == __AA ) {
	       str1 = String.fromCharCode ( code1 ) ;
	       str2 = String.fromCharCode ( getUniCode ( LA ) ) ;
	       return str1.concat ( str2 ) ;
	    }
         } else if ( idx1 == _LEE || idx1 == _LEE_ ) {
	    if ( idx2 == AA || idx2 == _AA || idx2 == _AA_ || idx2 == __AA ) {
	       str1 = String.fromCharCode ( code1 ) ;
	       str2 = String.fromCharCode ( getUniCode ( _LA ) ) ;
	       return str1.concat ( str2 ) ;
	    }
         }

	 if ( rev_med_form[idx2] != 0 ) { // update the next letter if necessary
	    code2 = getUniCode ( rev_med_form[idx2] ) ;
	 } else {
	    code2 = getUniCode ( idx2 ) ;
	 }

	 str = String.fromCharCode ( code1, code, code2 ) ; 
      }
   }

   return str ;
}

function is_alien ( code ) 
{
   if ( code == SPACE || code == DOT || code == EXCLAMATION || code == U_QUESTION ||
	 code == U_SEMICOLON || code == U_COMMA || code == MINUS || code == ONE ||
	 code == TWO || code == THREE || code == FOUR || code == FIVE ||
         code == SIX || code == SEVEN || code == EIGHT || code == NINE ||
         code == ZERO || code == ASTERISC || code == PERCENT || code == DOLLAR ||
         code == POUND || code == AT || code == WEDGE || code == AND ||
         code == LPAREN || code == RPAREN || code == PLUS || code == EQUAL ||
         code == TILDE || code == UNDERSCORE || code == COLON || code == LFEED ||
         code == DQUOTE || code == SQUOTE || code == RBRACK || code == LBRACK ||
         code == LBRACE || code == RBRACE || code == LTHAN || code == GTHAN ||
         code == FSLASH || code == PIPE || code == PRIM ) {
      return true ;
   } 

   return false ;
}

function is_wd_beginner ( idx ) // should next character be in beginning form
{
   if ( idx == AA || idx == _AA_ || idx == _AA || idx == __AA ||
	 idx == AE || idx == _AE_ || idx == _AE || idx == __AE ||
         idx == LA || idx == _LA ) {
      return true ;
   }

   return false ;
}

function is_in_beginner ( idx )//should next character be in in-word beginning form
{
   return beg_tab[idx] == IN_BEG ;
}


function getUniCode ( charCode ) 
{
   var ucode ;

   ucode = char_code[charCode] ;

   return ucode ;
}

function getIndex ( uniChar )
{
   var i ;

   for ( i = AA ; i <= LFEED ; i++ ) {
      if ( char_code[i] == uniChar ) {
	 return i ;
      } 
   }
}

function map_index ( input, prev )
{
   var wd_beg, in_beg ;

   var str = String.fromCharCode ( input ) ;
   cur = str.charAt(0) ; 

   wd_beg = beg_tab [prev] ;

   if ( wd_beg != WD_BEG ) {
      in_beg = beg_tab[prev] ;
   }

   if ( wd_beg == WD_BEG || prev == -1 ) {
      switch ( cur )
      {
         case 'a' :
            return EHE_ ;
         case 'A' :
            return EHE_ ;
         case 'b' :
         case 'B' :
            return BEE_ ;
         case 'c' :
         case 'C' :
            return GHEE_ ;
         case 'd' :
            return DEE ;
         case 'D' :
            return SZEE ;
         case 'e' :
            return EE_ ;
         case 'E' :
            return EE_ ;
         case 'f' :
            return _AA_ ;
         case 'F' :
            return FEE_ ;
         case 'g' :
            return _AE_ ;
         case 'G' :
            return GEE_ ;
         case 'h' :
            return I ;
         case 'H' :
            return HEE_ ;
         case 'i' :
         case 'I' :
            return NGEE_ ;
         case 'j' :
            return QEE_ ;
         case 'J' :
            return JEE_ ;
         case 'k' :
            return KEE_ ;
         case 'K' :
            return _OE ;
         case 'l' :
            return LEE_ ;
         case 'L' :
            return LA ;
         case 'm' :
         case 'M' :
            return MEE_ ;
         case 'n' :
         case 'N' :
            return NEE_ ;
         case 'o' :
         case 'O' : // capital 'Oh'
            return _OO ;
         case 'p' : 
         case 'P' : 
            return PEE_ ;
         case 'q' :
         case 'Q' :
            return CHEE_ ;
         case 'r' :
         case 'R' :
            return REE ;
         case 's' :
         case 'S' :
            return SEE_ ;
         case 't' :
            return TEE_ ;
         case 'u' :
         case 'U' :
            return _UU ;
         case 'v' :
         case 'V' :
            return _UE ;
         case 'w' :
         case 'W' :
            return VEE ;
         case 'x' :
         case 'X' :
            return SHEE_ ;
         case 'y' :
         case 'Y' :
            return YEE_ ;
         case 'z' :
         case 'Z' :
            return ZEE ;
         case '1' :
            return ONE ;
         case '2' :
            return TWO ;
         case '3' :
            return THREE ;
         case '4' :
            return FOUR ;
         case '5' :
            return FIVE ;
         case '6' :
            return SIX ;
         case '7' :
            return SEVEN ;
         case '8' :
            return EIGHT ;
         case '9' :
            return NINE ;
         case '0' :
            return ZERO ;
         case '!' :
            return EXCLAMATION ;
         case '*' :
            return ASTERISC ;
         case '%' :
            return PERCENT ;
         case '$' :
            return DOLLAR ;
         case '#' :
            return POUND ;
         case '@' :
            return AT ;
         case '^' :
            return WEDGE ;
         case '&' :
            return AND ;
         case '(' :
            return LPAREN ;
         case ')' :
            return RPAREN ;
         case '[' :
            return LBRACK ;
         case ']' :
            return RBRACK ;
         case '{' :
            return LBRACE ;
         case '}' :
            return RBRACE ;
         case '"' :
            return DQUOTE ;
         case '\'' :
            return SQUOTE ;
         case '<' :
            return LTHAN ;
         case '>' :
            return GTHAN ;
         case '|' :
            return PIPE ;
         case '`' :
            return PRIM ;
         case '+' :
            return PLUS ;
         case '-' :
            return MINUS ;
         case '=' :
            return EQUAL ;
         case '~' :
            return TILDE ;
         case '.' :
            return DOT ;
         case '_' :
            return UNDERSCORE ;
         case ' ' :
            return SPACE ;
         case '\n' :
         case '\r' :
            return LFEED ;
	 case '\t':
	    return SPACE ;
	 case ':' :
            return COLON ;
	 case ',' :
            return U_COMMA ;
	 case '/' :
            return II_ ;
            //return FSLASH ;
	 case '\\' :
            return BSLASH ;
	 case '?' :
            return U_QUESTION ;
	 case ';' :
            return U_SEMICOLON ;
         default:
            return SPACE ;
       }
   } else if ( in_beg == IN_BEG ) {
      switch ( cur )
      {
         case 'a' :
         case 'A' :
            return EHE_ ;
         case 'b' :
         case 'B' :
            return BEE_ ;
         case 'c' :
         case 'C' :
            return GHEE_ ;
         case 'd' :
            return DEE ;
         case 'D' :
            return SZEE ;
         case 'e' :
            return E_ ;
         case 'E' :
            return EE_ ;
         case 'f' :
            return _AA_ ;
         case 'F' :
            return FEE_ ;
         case 'g' :
            return _AE_ ;
         case 'G' :
            return GEE_ ;
         case 'h' :
            return I_ ;
         case 'H' :
            return HEE_ ;
         case 'i' :
            return NGEE_ ;
         case 'I' :
            return II_ ;
         case 'j' :
            return QEE_ ;
         case 'J' :
            return JEE_ ;
         case 'k' :
            return KEE_ ;
         case 'K' :
            return S_OE ;
         case 'l' :
            return LEE_ ;
         case 'L' :
            return LA ;
         case 'm' :
         case 'M' :
            return MEE_ ;
         case 'n' :
            return NEE_ ;
         case 'N' :
            return NGEE_ ;
         case 'o' :
         case 'O' : // capital 'oh'
            return S_OO ;
         case 'p' : 
         case 'P' : 
            return PEE_ ;
         case 'q' :
         case 'Q' :
            return CHEE_ ;
         case 'r' :
         case 'R' :
            return REE ;
         case 's' :
         case 'S' :
            return SEE_ ;
         case 't' :
         case 'T' :
            return TEE_ ;
         case 'u' :
         case 'U' :
            return S_UU ;
         case 'v' :
         case 'V' :
            return S_UE ;
         case 'w' :
         case 'W' :
            return VEE ;
         case 'x' :
         case 'X' :
            return SHEE_ ;
         case 'y' :
         case 'Y' :
            return YEE_ ;
         case 'z' :
         case 'Z' :
            return ZEE ;
         case '1' :
            return ONE ;
         case '2' :
            return TWO ;
         case '3' :
            return THREE ;
         case '4' :
            return FOUR ;
         case '5' :
            return FIVE ;
         case '6' :
            return SIX ;
         case '7' :
            return SEVEN ;
         case '8' :
            return EIGHT ;
         case '9' :
            return NINE ;
         case '0' :
            return ZERO ;
         case '!' :
            return EXCLAMATION ;
         case '*' :
            return ASTERISC ;
         case '%' :
            return PERCENT ;
         case '$' :
            return DOLLAR ;
         case '#' :
            return POUND ;
         case '@' :
            return AT ;
         case '^' :
            return WEDGE ;
         case '&' :
            return AND ;
         case '(' :
            return LPAREN ;
         case ')' :
            return RPAREN ;
         case '[' :
            return LBRACK ;
         case ']' :
            return RBRACK ;
         case '{' :
            return LBRACE ;
         case '}' :
            return RBRACE ;
         case '"' :
            return DQUOTE ;
         case '\'' :
            return SQUOTE ;
         case '<' :
            return LTHAN ;
         case '>' :
            return GTHAN ;
         case '|' :
            return PIPE ;
         case '`' :
            return PRIM ;
         case '+' :
            return PLUS ;
         case '-' :
            return MINUS ;
         case '=' :
            return EQUAL ;
         case '~' :
            return TILDE ;
         case '.' :
            return DOT ;
         case '_' :
            return UNDERSCORE ;
         case ' ' :
            return SPACE ;
         case '\n' :
         case '\r' :
            return LFEED ;
	 case '\t':
	    return SPACE ;
	 case ':':
	    return COLON ;
	 case ',' :
            return U_COMMA ;
	 case '/' :
            return II_ ;
            //return FSLASH ;
	 case '\\' :
            return BSLASH ;
	 case '?' :
            return U_QUESTION ;
	 case ';' :
            return U_SEMICOLON ;
         default:
            return SPACE ;
      }
   } else {
      switch ( cur )
      {
         case 'a' :
         case 'A' :
            return _EHE_ ;
         case 'b' :
         case 'B' :
            return _BEE_ ;
         case 'c' :
         case 'C' :
            return _GHEE_ ;
         case 'd' :
            return _DEE ;
         case 'D' :
            return _SZEE ;
         case 'e' :
            return _E_ ;
         case 'E' :
            return _EE_ ;
         case 'f' :
            return _AA ;
         case 'F' :
            return _FEE_ ;
         case 'g' :
            return _AE ;
         case 'G' :
            return _GEE_ ;
         case 'h' :
            return _I_ ;
         case 'H' :
            return _HEE_ ;
         case 'i' :
            return _NGEE_ ;
         case 'I' :
            return _II_ ;
         case 'j' :
            return _QEE_ ;
         case 'J' :
            return _JEE_ ;
         case 'k' :
            return _KEE_ ;
         case 'K' :
            return _OE ;
         case 'l' :
            return _LEE_ ;
         case 'L' :
            return _LA ;
         case 'm' :
         case 'M' :
            return _MEE_ ;
         case 'n' :
            return _NEE_ ;
         case 'N' :
            return _NGEE_ ;
         case 'o' :
         case 'O' : // capital 'Oh'
            return _OO ;
         case 'p' : 
         case 'P' :
            return _PEE_ ;
         case 'q' :
         case 'Q' :
            return _CHEE_ ;
         case 'r' :
         case 'R' :
            return _REE ;
         case 's' :
         case 'S' :
            return _SEE_ ;
         case 't' :
         case 'T' :
            return _TEE_ ;
         case 'u' :
         case 'U' :
            return _UU ;
         case 'v' :
         case 'V' :
            return _UE ;
         case 'w' :
         case 'W' :
            return _VEE ;
         case 'x' :
         case 'X' :
            return _SHEE_ ;
         case 'y' :
         case 'Y' :
            return _YEE_ ;
         case 'z' :
         case 'Z' :
            return _ZEE ;
         case '1' :
            return ONE ;
         case '2' :
            return TWO ;
         case '3' :
            return THREE ;
         case '4' :
            return FOUR ;
         case '5' :
            return FIVE ;
         case '6' :
            return SIX ;
         case '7' :
            return SEVEN ;
         case '8' :
            return EIGHT ;
         case '9' :
            return NINE ;
         case '0' :
            return ZERO ;
         case '!' :
            return EXCLAMATION ;
         case '*' :
            return ASTERISC ;
         case '%' :
            return PERCENT ;
         case '$' :
            return DOLLAR ;
         case '#' :
            return POUND ;
         case '@' :
            return AT ;
         case '^' :
            return WEDGE ;
         case '&' :
            return AND ;
         case '(' :
            return LPAREN ;
         case ')' :
            return RPAREN ;
         case '[' :
            return LBRACK ;
         case ']' :
            return RBRACK ;
         case '{' :
            return LBRACE ;
         case '}' :
            return RBRACE ;
         case '"' :
            return DQUOTE ;
         case '\'' :
            return SQUOTE ;
         case '<' :
            return LTHAN ;
         case '>' :
            return GTHAN ;
         case '|' :
            return PIPE ;
         case '`' :
            return PRIM ;
         case '+' :
            return PLUS ;
         case '-' :
            return MINUS ;
         case '=' :
            return EQUAL ;
         case '~' :
            return TILDE ;
         case '.' :
            return DOT ;
         case '_' :
            return UNDERSCORE ;
         case ' ' :
            return SPACE ;
         case '\n' :
         case '\r' :
            return LFEED ;
	 case '\t':
	    return SPACE ;
	 case ':':
	    return COLON ;
	 case ',' :
            return U_COMMA ;
	 case '/' :
            return _II_ ;
            //return FSLASH ;
	 case '\\' :
            return BSLASH ;
	 case '?' :
            return U_QUESTION ;
	 case ';' :
            return U_SEMICOLON ;
         default:
            return SPACE ;
      }
   }
}




