var list= "#";
var ta= document.activeElement;
if (ta.tagName.toLowerCase() == 'textarea') {
	var startPos = ta.selectionStart;
	var endPos = ta.selectionEnd;
	var listtext= ta.value.substr(startPos, endPos-startPos);
	var len= listtext.length;
	listtext= listtext.replace( /^([#*]*)\s*(?=\S)/gm, "$1"+list+" ");
	var newlen= listtext.length;
	if (newlen>len) {
		ta.value= ta.value.substr(0,startPos)  + listtext + ta.value.substr(endPos);
		var evt = document.createEvent("HTMLEvents");
		evt.initEvent('input', true, true );
		ta.dispatchEvent(evt);
		ta.setSelectionRange(startPos, endPos+newlen-len);
	}
}
void(0);