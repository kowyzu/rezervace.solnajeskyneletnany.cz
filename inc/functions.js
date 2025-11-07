	
	//fce otevre novy vokno jestlize normal je false tak se nezobrazi zadne listy ani menu ani status bar, jenom scrollbary
	function cWin(url, name, w, h, resizable, menubar, toolbar) {
		var menub = (menubar == true) ? "yes" : "no";
		var toolb = (toolbar == true) ? "yes" : "no"; 
		var resiz = (resizable == true) ? "yes" : "no";
		
		//window.open(url,name,'status=no,width='+w+',height='+h+',resizable=no,menubar=no,scrollbars=yes,toolbar=no');
		sReturnedValue = window.open(url,name,'status=no,width='+w+',height='+h+',resizable='+resiz+',menubar='+menub+',scrollbars=yes,toolbar='+toolb);
	}
	
	//zobrazi confirm box
	function ask(str) {
		if (window.confirm(str)) { return true; }
		return false;
	}
	
	//funkce reloadne na zadane URL
	function reload(url) {
		window.location = url;
	}
	
	//funkce zjisti typ prohlizece a vrati: mozilla|explorer|opera
	function browser() {	
		//mozilla firebird 0.6.1	Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.5a) Gecko/20030728 Mozilla Firebird/0.6.1
		//eplorer 6.0.2600				Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1) 
		//opera 7.11							Opera/7.11 (Windows NT 5.1; U) [en] 
		
		if (navigator.userAgent.indexOf("Opera") > -1) { browser = "opera"; }
		else if (navigator.userAgent.indexOf("MSIE") > -1) { browser = "explorer"; }
		else if (navigator.userAgent.indexOf("Mozilla") > -1 || navigator.userAgent.indexOf("Gecko") > -1) { browser = "mozilla"; }
		
		if (navigator.userAgent.indexOf("Win") > -1) { platform = "win"; }
		else if (navigator.userAgent.indexOf("Mac") > -1) { platform = "mac"; }
		
		return browser;
	}
	 function ccWin() {
					sReturnedValue = window.open('/_MMP/fl_<?=$lang;?>.html','flash','status=no,width=800,height=600,resizable=no,menubar=no,scrollbars=no,toolbar=no');
				}
	
