/**
 *  : sample data for Demo
 *
 * Copyright (c) 2016
 */

//extract context by string
function getFstContextByStr(htmlstring, idstr) {
	var allString = htmlstring;
	var array = allString.split(">");
	var chkid = false;
	var idContext = new String('');
	for (var i=0; i < array.length; i++) {
		var cstr = array[i];
		if (chkid == true) {
			if(cstr.substr(0,1) != '<') {
				idContext = cstr;
				break;
			}
		}
		if (cstr.indexOf(idstr) > 0) {
			chkid = true;
		}
	}
	// delete after'<'
	var ret = idContext.split("<");
	return ret[0];
}



 