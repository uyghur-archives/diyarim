function regConfig(ocx_v){
		var AxFlag;
		var file;
		try{
			var fso = new ActiveXObject("Scripting.FileSystemObject");
			var fgeturl = new ActiveXObject("Scripting.FileSystemObject");
		}catch(e){
			return false;	
		}
		var sysUrl = fgeturl.GetSpecialFolder(1);
		if(fso.FileExists(sysUrl+"\\dvrCon.ini")){
			file = fso.OpenTextFile((sysUrl+"\\dvrCon.ini"), 1);
			file.ReadLine();
			file.ReadLine();
			AxFlag = file.ReadLine().split("=")[1];
			file.Close();
			
			file = fso.OpenTextFile((sysUrl+"\\dvrCon.ini"), 2,false);
			file.WriteLine("[dvrCon]");
			file.WriteLine("OCXV="+ocx_v);
			file.WriteLine("activeX=2");
  		file.Close();
		}else{
			AxFlag = 1;
		}
		if(AxFlag!=1){
			return true;
		}
			
		try{
		var WshShell=new ActiveXObject("WScript.Shell");
		WshShell.RegWrite("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\Zones\\3\\2201","0","REG_DWORD"); //ActiveX 控件提示
		WshShell.RegWrite("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\Zones\\3\\1004","0","REG_DWORD"); //下载未签名的 ActiveX 控件
		WshShell.RegWrite("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\Zones\\3\\1201","0","REG_DWORD"); //对没有标记为安全的 ActiveX 控件进行初始化和脚本运行
		WshShell.RegWrite("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\Zones\\3\\1809","3","REG_DWORD"); //弹出窗口阻止程序
		WshShell.RegWrite("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\Zones\\3\\2102","0","REG_DWORD"); //脚本初始化窗口大小
		WshShell.RegWrite("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\Zones\\3\\1208","0","REG_DWORD"); //对从未使用过的 ActiveX 进行初始化（IE7.0）
		WshShell.RegWrite("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\Zones\\3\\1001","0","REG_DWORD"); //下载已签名的 ActiveX 控件
		//WshShell.RegWrite("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\Zones\\3\\1405","0","REG_DWORD"); //对标记为可安全执行脚本的 ActiveX 控件执行脚本
		//WshShell.RegWrite("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\Zones\\3\\1200","0","REG_DWORD"); //运行 ActiveX 控件和插件
		return true;
	}catch(e){
		return false;
	}
}

function clearDll(){
	var file;
	try{
		var fso = new ActiveXObject("Scripting.FileSystemObject");
		var fgeturl = new ActiveXObject("Scripting.FileSystemObject");
	}catch(e){
		return false;
	}
	var sysUrl = fgeturl.GetSpecialFolder(1);
	
	if(fso.FileExists(sysUrl+"\\dvrCon.ini")){
			file = fso.OpenTextFile((sysUrl+"\\dvrCon.ini"), 1);
			file.ReadLine();
			file.ReadLine();
			AxFlag = file.ReadLine().split("=")[1];
			file.Close();
	}else{
			AxFlag = 1;
	}
	 if(AxFlag!=1){
		  return true;
	}
	
	if(fso.FileExists(sysUrl+"\\netsdk.dll")){
		file = fso.GetFile(sysUrl+"\\netsdk.dll");
		file.Delete();
	}

	if(fso.FileExists(sysUrl+"\\netplay_h264.dll")){
		file = fso.GetFile(sysUrl+"\\netplay_h264.dll");
		file.Delete();
	}
	
	if(fso.FileExists(sysUrl+"\\hi_h264dec_w.dll")){
		file = fso.GetFile(sysUrl+"\\hi_h264dec_w.dll");
		file.Delete();
	}
	
	if(fso.FileExists(sysUrl+"\\dl_h264_decoder.dll")){
		file = fso.GetFile(sysUrl+"\\dl_h264_decoder.dll");
		file.Delete();
	}
	
	if(fso.FileExists(sysUrl+"\\dl_h264dec.dll")){
		file = fso.GetFile(sysUrl+"\\dl_h264dec.dll");
		file.Delete();
	}
	
	if(fso.FileExists(sysUrl+"\\soundout_h264.dll")){
		file = fso.GetFile(sysUrl+"\\soundout_h264.dll");
		file.Delete();
	}
	
	if(fso.FileExists(sysUrl+"\\talk_h264.dll")){
		file = fso.GetFile(sysUrl+"\\talk_h264.dll");
		file.Delete();
	}
	
	if(fso.FileExists(sysUrl+"\\language.dll")){
		file = fso.GetFile(sysUrl+"\\language.dll");
		file.Delete();
	}
	
	if(fso.FileExists(sysUrl+"\\dvrcfg_h264.dll")){
		file = fso.GetFile(sysUrl+"\\dvrcfg_h264.dll");
		file.Delete();
	}
	
	if(fso.FileExists(sysUrl+"\\Console.dll")){
		file = fso.GetFile(sysUrl+"\\Console.dll");
		file.Delete();
	}
	
	if(fso.FileExists(sysUrl+"\\CRemoteSysConfig.dll")){
		file = fso.GetFile(sysUrl+"\\CRemoteSysConfig.dll");
		file.Delete();
	}
	
	//alert('stop dll');
	return true;
}

function clearOcx(ocx_v){
	var ocxV;
	var file;
	try{
		var fso = new ActiveXObject("Scripting.FileSystemObject");
		var fgeturl = new ActiveXObject("Scripting.FileSystemObject");
	}catch(e){
		return false;
	}
	var sysUrl = fgeturl.GetSpecialFolder(1);
	if(fso.FileExists(sysUrl+"\\dvrCon.ini")){
		file = fso.OpenTextFile((sysUrl+"\\dvrCon.ini"), 1);
		file.ReadLine();
		ocxV = file.ReadLine().split("=")[1];
		if(ocxV==ocx_v)
		{
			file.Close();
			return true;
		}
	}
		if(fso.FileExists(sysUrl+"\\d404monitor.ocx")){
		file = fso.GetFile(sysUrl+"\\d404monitor.ocx");
		file.Delete();
		}
		
		if(fso.FileExists(sysUrl+"\\d404realplay.ocx")){
		file = fso.GetFile(sysUrl+"\\d404realplay.ocx");
		file.Delete();
		}
		
		//alert('stop ocx');
		return true;
}

function changeImg(obj1,obj2,str){
	if(obj1.src.indexOf("_nor")!=-1){
		obj1.src = obj1.src.replace("_nor","_hover");
	if(obj2)
		obj2.className = obj2.className.replace("_nor","_hover");
	}else{
		obj1.src = obj1.src.replace("_hover","_nor");
	if(obj2)
		obj2.className = obj2.className.replace("_hover","_nor");
	}
	if(str)
	  	obj1.alt = str;
}

function changeClass(obj2){
	if(obj2.className.indexOf("_nor")!=-1){
		obj2.className = obj2.className.replace("_nor","_hover");
	}else{
		obj2.className = obj2.className.replace("_hover","_nor");
	}
}