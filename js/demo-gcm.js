function sampleForm( value ){
    var form = document.createElement('form' );
    document.body.appendChild( form );
    var input = document.createElement('input');
    input.setAttribute( 'type' , 'hidden' );
    input.setAttribute( 'name' , 'name' );
    input.setAttribute( 'value' , value );
    form.appendChild( input );
    form.setAttribute( 'action' , '送信したいファイル' );
    form.setAttribute( 'method' , 'post or get' );
    form.submit();
}

function execPost(action, data) {
 // フォームの生成
 var form = document.createElement("form");
 form.setAttribute("action", action);
 form.setAttribute("method", "post");
 form.style.display = "none";
 document.body.appendChild(form);
 // パラメタの設定
 if (data !== undefined) {
  for (var paramName in data) {
   var input = document.createElement('input');
   input.setAttribute('type', 'hidden');
   input.setAttribute('name', paramName);
   input.setAttribute('value', data[paramName]);
   form.appendChild(input);
  }
 }
 // submit
 form.submit();
}

//$ curl -x http://192.168.0.15:3128 -L --header "Authorization: key=AIzaSyBLI0jtHooTeBusVBXWJYgDqDGTNp_L7Jk" --header Content-Type:"application/json" https://android.googleapis.com/gcm/send -d "{\"registration_ids\":[\"dHBA1XuzTCQ:APA91bE7b4PT9di5YvcVyH-3gO0LY2HwN8FtI3zd23Ulp_dlXuE54Ryvqw6Yl684tcXgasoJSHEod2up3UT63kItVdwrZHhYb4ayyAYwi3XWdWI_1_dqqCzBfnlGJgSEbz9fgL1pNPVj\"]}"
var proxyServer = "http://192.168.0.15:3128";
//-L --header "Authorization: key=AIzaSyBLI0jtHooTeBusVBXWJYgDqDGTNp_L7Jk" 
//   --header Content-Type:"application/json" https://android.googleapis.com/gcm/send
var formAction = "https://android.googleapis.com/gcm/send";
var registrationId = "dHBA1XuzTCQ:APA91bE7b4PT9di5YvcVyH-3gO0LY2HwN8FtI3zd23Ulp_dlXuE54Ryvqw6Yl684tcXgasoJSHEod2up3UT63kItVdwrZHhYb4ayyAYwi3XWdWI_1_dqqCzBfnlGJgSEbz9fgL1pNPVj";
//var postData = "{\"registration_ids\":[\"dHBA1XuzTCQ:APA91bE7b4PT9di5YvcVyH-3gO0LY2HwN8FtI3zd23Ulp_dlXuE54Ryvqw6Yl684tcXgasoJSHEod2up3UT63kItVdwrZHhYb4ayyAYwi3XWdWI_1_dqqCzBfnlGJgSEbz9fgL1pNPVj\"]}";

var settingAction = "https://android.googleapis.com/gcm/send/dHBA1XuzTCQ:APA91bE7b4PT9di5YvcVyH-3gO0LY2HwN8FtI3zd23Ulp_dlXuE54Ryvqw6Yl684tcXgasoJSHEod2up3UT63kItVdwrZHhYb4ayyAYwi3XWdWI_1_dqqCzBfnlGJgSEbz9fgL1pNPVj";

// curl
// -d POSTリクエストとしてフォームを送信する。パラメータPARAMは「"value=name"」の形式で指定する
// -L リダイレクトに対応する
// -x プロキシサーバとしてホストHOSTおよびポートPORTを利用する


//curl --header "Authorization: key=<YOUR_API_KEY>" --header
//"Content-Type: application/json" https://android.googleapis.com/gcm/send -d
//"{\"registration_ids\":[\"<YOUR_REGISTRATION_ID>\"]}"

/*	https://developers.google.com/cloud-messaging/http#auth
To send a message, the application server issues a POST request. For example:

https://gcm-http.googleapis.com/gcm/send
A message request is made of 2 parts: HTTP header and HTTP body.

The HTTP header must contain the following headers:

Authorization: key=YOUR_API_KEY
Content-Type: application/json for JSON; application/x-www-form-urlencoded;charset=UTF-8 for plain text. If Content-Type is omitted, the format is assumed to be plain text.
*/
/*
Content-Type:application/json
Authorization:key=AIzaSyZ-1u...0GBYzPu7Udno5aA

{
  "to" : "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1...",
  "data" : {
    ...
  },
}
*/


function formSubmit() {
	var form = document.createElement('form');
	form.setAttribute('action', settingAction);
	form.setAttribute('method', 'POST');
	form.style.display = 'none';
	document.body.appendChild(form);

	// set parameters
	var input = document.createElement('input');
	input.setAttribute('type', 'hidden');
	input.setAttribute('name', 'this');
	input.setAttribute('value', 'value?');
	form.appendChild(input);
	
	// submit
	form.submit();
}


function postRequest() {
	var requestUrl = 'https://android.googleapis.com/gcm/send';
	var sendMessage = new String('{"to":"dHBA1XuzTCQ:APA91bE7b4PT9di5YvcVyH-3gO0LY2HwN8FtI3zd23Ulp_dlXuE54Ryvqw6Yl684tcXgasoJSHEod2up3UT63kItVdwrZHhYb4ayyAYwi3XWdWI_1_dqqCzBfnlGJgSEbz9fgL1pNPVj"}');
	//,	"notification" : {	"header":"Authorization: key=AIzaSyBLI0jtHooTeBusVBXWJYgDqDGTNp_L7Jk",	"body":"message (web-push.github.io)","title":"Push Message Title", "icon" :""}');

	var xhr = new XMLHttpRequest();
	//var fd  = new FormData();

	// データを FormData オブジェクトに投入します
	//for(name in data) {
	//	fd.append(name, data[name]);
	//}

	// データが正常に送信された場合に行うことを定義します
	xhr.addEventListener('load', function(event) {
		alert('Yeah! Data sent and response loaded.');
	});

	// エラーが発生した場合に行うことを定義します
	xhr.addEventListener('error', function(event) {
		alert('Something goes wrong. please try again.');
	});

	// リクエストをセットアップします
	xhr.open('POST', requestUrl, true);
	//void open(
	//DOMString method,
	//DOMString url,
	//optional boolean async,
	//optional DOMString user,
	//optional DOMString password
	//);
	xhr.setRequestHeader('Content-Type', 'text/plain')
	xhr.setRequestHeader('Authorization', 'AIzaSyBLI0jtHooTeBusVBXWJYgDqDGTNp_L7Jk');
	xhr.setRequestHeader('Access-Control-Allow-Origin','*');
	//xhr.setRequestHeader('Origin', '*');
	//xhr.withCredentials = true;
	// FormData オブジェクト送信。HTTP ヘッダは自動設定
	//console.log(FD);
	xhr.send(sendMessage);
	console.log(xhr);
}

/* message pattern
  {
    "to" : "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1...",
    "notification" : {
      "body" : "great match!",
      "title" : "",
      "icon" : ""
    }
  }

"permissions": [
  "http://www.google.com/",
  "https://www.google.com/"
]


{ "notification": {
    "title": "Portugal vs. Denmark",
    "text": "5 to 1"
  },
  "to" : "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1..."
}

{ "data": {
    "score": "5x1",
    "time": "15:10"
  },
  "to" : "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1..."
}

{ "collapse_key": "score_update",
  "time_to_live": 108,
  "delay_while_idle": true,
  "data": {
    "score": "4x8",
    "time": "15:16.2342"
  },
  "to" : "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1..."
}

*/

