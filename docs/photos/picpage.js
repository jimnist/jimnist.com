// nav.js
//
// functions for navigating normal "slide show" pages
//
<!--
function initializePicPage() {
	if (typeof(document.JN) == 'undefined') 
		document.JN = new Object();
	
	// assume internet explorer
	document.JN.ie = true;			
	if (navigator.appName.indexOf("Microsoft") == -1) 
		document.JN.ie = false;
	
	document.JN.cnt = 0;
	document.JN.idx = 0;
	document.JN.imageArray = new Array();
	document.JN.imageNameArray = new Array();
	document.JN.captionArray = new Array();	
}

function loadPicPageImage(imagename, caption) {
	document.JN.imageArray[document.JN.cnt] = new Image();
	document.JN.imageArray[document.JN.cnt].src = imagename;
	document.JN.imageNameArray[document.JN.cnt] = imagename;
		
	document.JN.captionArray[document.JN.cnt] = caption;
	
	document.JN.cnt++;
}

function prevPic(){
	if (document.JN.idx == 0) 
		document.JN.idx = document.JN.cnt - 1;
	else 
		document.JN.idx--;
		
	refreshPic();
}

function nextPic(){
	if (document.JN.idx == document.JN.cnt - 1)
		document.JN.idx = 0;
	else
		document.JN.idx++;
		
	refreshPic();
}

function refreshPic() {
	document.images["pic"].src = document.JN.imageArray[document.JN.idx].src;
	
	if (document.JN.ie) {
		document.anchors[0].innerText = document.JN.captionArray[document.JN.idx];
		document.anchors[1].innerText = (document.JN.idx + 1) + " of " + (document.JN.cnt);		
		document.anchors[2].innerText = document.JN.imageNameArray[document.JN.idx];
	} else {
		document.anchors[0].text = document.JN.captionArray[document.JN.idx];
		document.anchors[1].text = document.JN.captionArray[document.JN.idx];		
		document.anchors[2].text = document.JN.imageNameArray[document.JN.idx];
	}
}
-->