var fso = new ActiveXObject("Scripting.FileSystemObject");
var fgeturl = new ActiveXObject("Scripting.FileSystemObject");
var sysUrl = fgeturl.GetSpecialFolder(1);

var PLAYBACK_WORD     = "";
var INFO_WORD         = "";
var RECORD_WORD       = "";
var SETPICPATROL_WORD = "";
var SETLOCALPARAM_WORD = "";
var DVRCFG_WORD = "";
var ALARM1_WORD = "";
var ALARM2_WORD = "";
var ALARM3_WORD = "";
var ALARM4_WORD = "";
var LOGINALT_WORD = "";
var PTZ_POINT_WORD = "";
var NAVIGATOR_WORD = "";
var NAVIGATOR_WORD2 = "";
var SCREEN_WORD = "";
var SCREEN_WORD2 = "";
var NETSDKINIT_WORD = "";
var ERROR_7000 = "";
var ERROR_7001 = "";
var ERROR_6004 = "";
var ERROR_40 = "";
var GETDVRCHANNUM_ERROR = "";
var GETDVRALARMOUTPORT_ERROR = "";
var LOGOUT_ERROR = "";
var GETDVRHARDDISKCOUNT_ERROR = "";
var ISPICPATROL_WORD = "";
var UPLINE_WORD = "";

var BRIGHT_WORD = "";
var HUE_WORD = "";
var CONTRAST_WORD = "";
var SATURATION_WORD = "";
var ZOOM_WORD = "";
var FOCUS_WORD = "";
var IRIS_WORD = "";
var LIGHT_WORD = "";
var BRUSH_WORD = "";

var LOGIN_WORD = "";
var LOGOUT_WORD = "";
var SETVIDEOEFFECT_WORD = "";
var PTZCONTROL_WORD = "";
var PICPATROL_WORD = "";
var QUIET_WORD = "";
var VOICE_WORD = "";
var DEFAULT_WORD = "";
var SETPRESET_WORD = "";
var GOTOPRESET_WORD = "";
var PTZPRESET_WORD = "";
var CRUISE_WORD = "";
var AUTOCRUISE_WORD = "";
var CRUISEROUTE_WORD = "";
var STOPCRUISE_WORD = "";

function ParamSet(PLAYBACK_WORD,INFO_WORD,RECORD_WORD,SETPICPATROL_WORD,SETLOCALPARAM_WORD,
				DVRCFG_WORD,ALARM1_WORD,ALARM2_WORD,ALARM3_WORD,ALARM4_WORD,LOGINALT_WORD,
				PTZ_POINT_WORD,NAVIGATOR_WORD,NAVIGATOR_WORD2,SCREEN_WORD,SCREEN_WORD2,NETSDKINIT_WORD,ERROR_7000,
				ERROR_7001,ERROR_6004,ERROR_40,GETDVRCHANNUM_ERROR,GETDVRALARMOUTPORT_ERROR,
				LOGOUT_ERROR,GETDVRHARDDISKCOUNT_ERROR,ISPICPATROL_WORD,UPLINE_WORD,BRIGHT_WORD,
				HUE_WORD,CONTRAST_WORD,SATURATION_WORD,ZOOM_WORD,FOCUS_WORD,IRIS_WORD,LIGHT_WORD,
				BRUSH_WORD,LOGIN_WORD,LOGOUT_WORD,SETVIDEOEFFECT_WORD,PTZCONTROL_WORD,
				PICPATROL_WORD,QUIET_WORD,VOICE_WORD,DEFAULT_WORD,SETPRESET_WORD,GOTOPRESET_WORD,PTZPRESET_WORD,
				CRUISE_WORD,AUTOCRUISE_WORD,CRUISEROUTE_WORD,STOPCRUISE_WORD){
	this.PLAYBACK_WORD	= PLAYBACK_WORD;
	this.INFO_WORD = INFO_WORD;
	this.RECORD_WORD = RECORD_WORD;
	this.SETPICPATROL_WORD = SETPICPATROL_WORD;
	this.SETLOCALPARAM_WORD = SETLOCALPARAM_WORD;
	this.DVRCFG_WORD = DVRCFG_WORD;
	this.ALARM1_WORD = ALARM1_WORD;
	this.ALARM2_WORD = ALARM2_WORD;
	this.ALARM3_WORD = ALARM3_WORD;
	this.ALARM4_WORD = ALARM4_WORD;
	this.LOGINALT_WORD = LOGINALT_WORD;
	this.PTZ_POINT_WORD = PTZ_POINT_WORD;
	this.NAVIGATOR_WORD = NAVIGATOR_WORD;
	this.NAVIGATOR_WORD2 = NAVIGATOR_WORD2;
	this.SCREEN_WORD = SCREEN_WORD;
	this.SCREEN_WORD2 = SCREEN_WORD2;
	this.NETSDKINIT_WORD = NETSDKINIT_WORD;
	this.ERROR_7000 = ERROR_7000;
	this.ERROR_7001 = ERROR_7001;
	this.ERROR_6004 = ERROR_6004;
	this.ERROR_40 = ERROR_40;
	this.GETDVRCHANNUM_ERROR = GETDVRCHANNUM_ERROR;
	this.GETDVRALARMOUTPORT_ERROR = GETDVRALARMOUTPORT_ERROR;
	this.LOGOUT_ERROR = LOGOUT_ERROR;
	this.GETDVRHARDDISKCOUNT_ERROR = GETDVRHARDDISKCOUNT_ERROR;
	this.ISPICPATROL_WORD = ISPICPATROL_WORD;
	this.UPLINE_WORD = UPLINE_WORD;
	
	this.BRIGHT_WORD = BRIGHT_WORD;
	this.HUE_WORD = HUE_WORD;
	this.CONTRAST_WORD = CONTRAST_WORD;
	this.SATURATION_WORD = SATURATION_WORD;
	this.ZOOM_WORD = ZOOM_WORD;
	this.FOCUS_WORD = FOCUS_WORD;
	this.IRIS_WORD = IRIS_WORD;
	this.LIGHT_WORD = LIGHT_WORD;
	this.BRUSH_WORD = BRUSH_WORD;
	
	this.LOGIN_WORD = LOGIN_WORD;
	this.LOGOUT_WORD = LOGOUT_WORD;
	this.SETVIDEOEFFECT_WORD = SETVIDEOEFFECT_WORD;
	this.PTZCONTROL_WORD = PTZCONTROL_WORD;
	this.PICPATROL_WORD = PICPATROL_WORD;
	this.QUIET_WORD = QUIET_WORD;
	this.VOICE_WORD = VOICE_WORD;
	this.DEFAULT_WORD = DEFAULT_WORD;
	this.SETPRESET_WORD = SETPRESET_WORD;
	this.GOTOPRESET_WORD = GOTOPRESET_WORD;
	this.PTZPRESET_WORD = PTZPRESET_WORD;
	this.CRUISE_WORD = CRUISE_WORD;
	this.AUTOCRUISE_WORD = AUTOCRUISE_WORD;
	this.CRUISEROUTE_WORD = CRUISEROUTE_WORD;
	this.STOPCRUISE_WORD = STOPCRUISE_WORD;
}

function whichLan(){
	var fsotemp = new ActiveXObject("Scripting.FileSystemObject");
	var file ;
	var lan = 1;
    if(fsotemp.FileExists(sysUrl+"\\LocalCfg.ini")){
        file = fsotemp.OpenTextFile((sysUrl+"\\LocalCfg.ini"), 1);
	}else{
		return false;
	}
    	while( (lan = file.ReadLine()).indexOf("LanguageFile")==-1);
			lan = parseInt(lan.split("=")[1]);
		file.Close();
		return lan;
}

function readLanFile(lan){
			var file;
			
			switch(lan){
				
				case 0 :  // cn
					if(fso.FileExists(sysUrl+"\\DvsWebLan_CN.ini")){
						file = fso.OpenTextFile((sysUrl+"\\DvsWebLan_CN.ini"), 1);
					}else{
						return false;
					}
					break;
				
				case 1 : // en
					if(fso.FileExists(sysUrl+"\\DvsWebLan_EN.ini")){
        		file = fso.OpenTextFile((sysUrl+"\\DvsWebLan_EN.ini"), 1);
					}else{
        			return false;
					}
					break;
				
				case 2 : // ITA
					if(fso.FileExists(sysUrl+"\\DvsWebLan_IT.ini")){
        		file = fso.OpenTextFile((sysUrl+"\\DvsWebLan_IT.ini"), 1);
					}else{
        			return false;
					}
					break;
			}
			PLAYBACK_WORD     = file.ReadLine().split("=")[1];
			INFO_WORD         = file.ReadLine().split("=")[1];
			RECORD_WORD       = file.ReadLine().split("=")[1];
			SETPICPATROL_WORD = file.ReadLine().split("=")[1];
			SETLOCALPARAM_WORD = file.ReadLine().split("=")[1];
			DVRCFG_WORD = file.ReadLine().split("=")[1];
			ALARM1_WORD = file.ReadLine().split("=")[1];
			ALARM2_WORD = file.ReadLine().split("=")[1];
			ALARM3_WORD = file.ReadLine().split("=")[1];
			ALARM4_WORD = file.ReadLine().split("=")[1];
			LOGINALT_WORD = file.ReadLine().split("=")[1];
			PTZ_POINT_WORD = file.ReadLine().split("=")[1];
			NAVIGATOR_WORD = file.ReadLine().split("=")[1];
			NAVIGATOR_WORD2 = file.ReadLine().split("=")[1];
			SCREEN_WORD = file.ReadLine().split("=")[1];
			SCREEN_WORD2 = file.ReadLine().split("=")[1];
			NETSDKINIT_WORD = file.ReadLine().split("=")[1];
			ERROR_7000 = file.ReadLine().split("=")[1];
			ERROR_7001 = file.ReadLine().split("=")[1];
			ERROR_6004 = file.ReadLine().split("=")[1];
			ERROR_40 = file.ReadLine().split("=")[1];
			GETDVRCHANNUM_ERROR = file.ReadLine().split("=")[1];
			GETDVRALARMOUTPORT_ERROR = file.ReadLine().split("=")[1];
			LOGOUT_ERROR = file.ReadLine().split("=")[1];
			GETDVRHARDDISKCOUNT_ERROR = file.ReadLine().split("=")[1];
			ISPICPATROL_WORD = file.ReadLine().split("=")[1];
			UPLINE_WORD = file.ReadLine().split("=")[1];
			
			BRIGHT_WORD = file.ReadLine().split("=")[1];
			HUE_WORD = file.ReadLine().split("=")[1];
			CONTRAST_WORD = file.ReadLine().split("=")[1];
			SATURATION_WORD = file.ReadLine().split("=")[1];
			ZOOM_WORD = file.ReadLine().split("=")[1];
			FOCUS_WORD = file.ReadLine().split("=")[1];
			IRIS_WORD = file.ReadLine().split("=")[1];
			LIGHT_WORD = file.ReadLine().split("=")[1];
			BRUSH_WORD = file.ReadLine().split("=")[1];
			
			LOGIN_WORD = file.ReadLine().split("=")[1];
			LOGOUT_WORD = file.ReadLine().split("=")[1];
			SETVIDEOEFFECT_WORD = file.ReadLine().split("=")[1];
			PTZCONTROL_WORD = file.ReadLine().split("=")[1];
			PICPATROL_WORD = file.ReadLine().split("=")[1];
			QUIET_WORD = file.ReadLine().split("=")[1];
			VOICE_WORD = file.ReadLine().split("=")[1];
			DEFAULT_WORD = file.ReadLine().split("=")[1];
			SETPRESET_WORD = file.ReadLine().split("=")[1];
			GOTOPRESET_WORD = file.ReadLine().split("=")[1];
		  PTZPRESET_WORD = file.ReadLine().split("=")[1];
			CRUISE_WORD = file.ReadLine().split("=")[1];
			AUTOCRUISE_WORD = file.ReadLine().split("=")[1];
		  CRUISEROUTE_WORD = file.ReadLine().split("=")[1];
		  STOPCRUISE_WORD = file.ReadLine().split("=")[1];
		  
			file.Close();
			
        	return (new ParamSet(PLAYBACK_WORD,INFO_WORD,RECORD_WORD,SETPICPATROL_WORD,SETLOCALPARAM_WORD,
				DVRCFG_WORD,ALARM1_WORD,ALARM2_WORD,ALARM3_WORD,ALARM4_WORD,LOGINALT_WORD,
				PTZ_POINT_WORD,NAVIGATOR_WORD,NAVIGATOR_WORD2,SCREEN_WORD,SCREEN_WORD2,NETSDKINIT_WORD,ERROR_7000,
				ERROR_7001,ERROR_6004,ERROR_40,GETDVRCHANNUM_ERROR,GETDVRALARMOUTPORT_ERROR,
				LOGOUT_ERROR,GETDVRHARDDISKCOUNT_ERROR,ISPICPATROL_WORD,UPLINE_WORD,BRIGHT_WORD,
				HUE_WORD,CONTRAST_WORD,SATURATION_WORD,ZOOM_WORD,FOCUS_WORD,IRIS_WORD,LIGHT_WORD,
				BRUSH_WORD,LOGIN_WORD,LOGOUT_WORD,SETVIDEOEFFECT_WORD,PTZCONTROL_WORD,
				PICPATROL_WORD,QUIET_WORD,VOICE_WORD,DEFAULT_WORD,SETPRESET_WORD,GOTOPRESET_WORD,PTZPRESET_WORD,
				CRUISE_WORD,AUTOCRUISE_WORD,CRUISEROUTE_WORD,STOPCRUISE_WORD) );
}
