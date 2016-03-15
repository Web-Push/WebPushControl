//$ curl -x http://192.168.0.15:3128 -L --header "Authorization: key=AIzaSyBLI0jtHooTeBusVBXWJYgDqDGTNp_L7Jk" --header Content-Type:"application/json" https://android.googleapis.com/gcm/send -d "{\"registration_ids\":[\"dHBA1XuzTCQ:APA91bE7b4PT9di5YvcVyH-3gO0LY2HwN8FtI3zd23Ulp_dlXuE54Ryvqw6Yl684tcXgasoJSHEod2up3UT63kItVdwrZHhYb4ayyAYwi3XWdWI_1_dqqCzBfnlGJgSEbz9fgL1pNPVj\"]}"
var proxyServer = "http://192.168.0.15:3128";
//-L --header "Authorization: key=AIzaSyBLI0jtHooTeBusVBXWJYgDqDGTNp_L7Jk" 
//   --header Content-Type:"application/json" https://android.googleapis.com/gcm/send
var formAction = "https://android.googleapis.com/gcm/send";
var registrationId = 'dHBA1XuzTCQ:APA91bE7b4PT9di5YvcVyH-3gO0LY2HwN8FtI3zd23Ulp_dlXuE54Ryvqw6Yl684tcXgasoJSHEod2up3UT63kItVdwrZHhYb4ayyAYwi3XWdWI_1_dqqCzBfnlGJgSEbz9fgL1pNPVj';
var postData = '{\"registration_ids\":[\"dHBA1XuzTCQ:APA91bE7b4PT9di5YvcVyH-3gO0LY2HwN8FtI3zd23Ulp_dlXuE54Ryvqw6Yl684tcXgasoJSHEod2up3UT63kItVdwrZHhYb4ayyAYwi3XWdWI_1_dqqCzBfnlGJgSEbz9fgL1pNPVj\"]}';

// ポイント：-xを指定しないと、curl実施しても、Push windowを表示しない
// HTTPの場合、trickyな手段で、proxyを指定することができますが、HTTPSの場合は、難しいらしいです。つまり、curlの通りに、実現はできないかも。


// curl
// -d POSTリクエストとしてフォームを送信する。パラメータPARAMは「"value=name"」の形式で指定する
// -L リダイレクトに対応する
// -x プロキシサーバとしてホストHOSTおよびポートPORTを利用する


//curl --header "Authorization: key=<YOUR_API_KEY>" --header
//"Content-Type: application/json" https://android.googleapis.com/gcm/send
// -d "{\"registration_ids\":[\"<YOUR_REGISTRATION_ID>\"]}"

//curl --header "Authorization: key=AIzaSyBLI0jtHooTeBusVBXWJYgDqDGTNp_L7Jk" --header Content-Type:"application/json" https://android.googleapis.com/gcm/send -d "{\"registration_ids\":[\"d2URneWVTsE:APA91bFJgphoxDQ_xeLU0d84Xflp0tVz7qS4L4IZbqFUB9EcTvUMEnA6g9oyw-nrmJT21aJrObDjFSlVdKrl7EASsj3jwT6Vqj-tgzcEVAIdhU8UQJBCk_ZDbaklDhtjHfnxd6EMY5KK\"]}"

var settingAction = "https://android.googleapis.com/gcm/send/dHBA1XuzTCQ:APA91bE7b4PT9di5YvcVyH-3gO0LY2HwN8FtI3zd23Ulp_dlXuE54Ryvqw6Yl684tcXgasoJSHEod2up3UT63kItVdwrZHhYb4ayyAYwi3XWdWI_1_dqqCzBfnlGJgSEbz9fgL1pNPVj";
var urlGCM = 'https://android.googleapis.com/gcm/send';


function postRequest(cellList) {
	var urlGCM = 'https://android.googleapis.com/gcm/send';
	var registrationId = 'd2URneWVTsE:APA91bFJgphoxDQ_xeLU0d84Xflp0tVz7qS4L4IZbqFUB9EcTvUMEnA6g9oyw-nrmJT21aJrObDjFSlVdKrl7EASsj3jwT6Vqj-tgzcEVAIdhU8UQJBCk_ZDbaklDhtjHfnxd6EMY5KK';
	var sendMessage = new String('{"\registration_ids\":\"d2URneWVTsE:APA91bFJgphoxDQ_xeLU0d84Xflp0tVz7qS4L4IZbqFUB9EcTvUMEnA6g9oyw-nrmJT21aJrObDjFSlVdKrl7EASsj3jwT6Vqj-tgzcEVAIdhU8UQJBCk_ZDbaklDhtjHfnxd6EMY5KK\"}');
	//var sendMessage = new String('{"to":"dHBA1XuzTCQ:APA91bE7b4PT9di5YvcVyH-3gO0LY2HwN8FtI3zd23Ulp_dlXuE54Ryvqw6Yl684tcXgasoJSHEod2up3UT63kItVdwrZHhYb4ayyAYwi3XWdWI_1_dqqCzBfnlGJgSEbz9fgL1pNPVj"}');
	//,	"notification" : {	"header":"Authorization: key=AIzaSyBLI0jtHooTeBusVBXWJYgDqDGTNp_L7Jk",	"body":"message (web-push.github.io)","title":"Push Message Title", "icon" :""}');
	var postData = '{"registration_ids":["dHBA1XuzTCQ:APA91bE7b4PT9di5YvcVyH-3gO0LY2HwN8FtI3zd23Ulp_dlXuE54Ryvqw6Yl684tcXgasoJSHEod2up3UT63kItVdwrZHhYb4ayyAYwi3XWdWI_1_dqqCzBfnlGJgSEbz9fgL1pNPVj"]}';

	var body = '<?xml version="1.0"?><person><name>preflight</name></person>';
	
	var xhr = new XMLHttpRequest();
	var fd  = new FormData();

	// application/json "to"
	var sendData = '{"to":[';
	// データ設定。endpointのURL別に送信データオブジェクトを作成する必要があります。（未実装：現状、すべてurlGCM宛）
	$.each(cellList, function(i, elem) {
		console.log(elem);
		var all=elem;
		//var endpoint = all.split('/');
		// when endpoint == urlGCM 
		var rId = all.split("/").pop();
		if (i > 0) { sendData = sendData + ',';}
		sendData = sendData + '"' + rId + '"';
	});
	sendData = sendData + ']}';	// delete last ,

	//fd.append('registration_ids', 'dHBA1XuzTCQ:APA91bE7b4PT9di5YvcVyH-3gO0LY2HwN8FtI3zd23Ulp_dlXuE54Ryvqw6Yl684tcXgasoJSHEod2up3UT63kItVdwrZHhYb4ayyAYwi3XWdWI_1_dqqCzBfnlGJgSEbz9fgL1pNPVj');
	
	// データ正常送信時処理
	xhr.addEventListener('load', function(event) {
		alert('Yeah! Data sent and response loaded.');
	});

	// エラー発生時処理
	xhr.addEventListener('error', function(event) {
		alert('Something goes wrong. please try again.');
	});

	// for preflight request
    //xhr.open('POST', endpoint, true);
	//xhr.setRequestHeader('Authorization', 'AIzaSyBLI0jtHooTeBusVBXWJYgDqDGTNp_L7Jk');
	//xhr.setRequestHeader('Access-Control-Allow-Origin','*');	// この指定により、サーバ動作時には自動的にOriginのURLを設定（local以外）
	//xhr.setRequestHeader('Access-Control-Allow-Headers','Content-Type');
	//xhr.setRequestHeader('Access-Control-Request-Methods','POST');
	//xhr.setRequestHeader('Access-Control-Allow-Methods','OPTIONS');
	//xhr.setRequestHeader('Content-Type', 'application/json');	// text/plain
    //xhr.onreadystatechange = function(evt) {
	//	if (xhr.readyState == 4) {
	//		if (xhr.status == 200) {
	//			alert('status goes ready..');
	//		}
	//	}
	//};
	//xhr.send(null);

	// リクエスト準備
	xhr.open('POST', urlGCM, true);
	xhr.setRequestHeader('Authorization', 'key=AIzaSyBLI0jtHooTeBusVBXWJYgDqDGTNp_L7Jk');
	xhr.setRequestHeader('Access-Control-Allow-Origin','http://web-push.github.io/WebPushControl/');	// この指定により、サーバ動作時には自動的にOriginのURLを設定（local以外）
	xhr.setRequestHeader('Access-Control-Allow-Headers','Content-Type;charset=UTF-8');
	xhr.setRequestHeader('Access-Control-Request-Methods','POST');
	xhr.setRequestHeader('Access-Control-Allow-Methods','OPTIONS');
	xhr.setRequestHeader('Content-Type', 'application/json');	// text/plain
	//xhr.setRequestHeader('Content-Type', 'application/json');	// text/plain
	//xhr.setRequestHeader('Origin', '*');
	xhr.withCredentials = true;
	// 送信処理
	xhr.send(sendData);
}

/** テスト用仮
 * Call Push API method
 * @param {string} methodName
 * @param {Object} arguments
 */
 
var methodName = 'testNema';
var arguments = 'dHBA1XuzTCQ:APA91bE7b4PT9di5YvcVyH-3gO0LY2HwN8FtI3zd23Ulp_dlXuE54Ryvqw6Yl684tcXgasoJSHEod2up3UT63kItVdwrZHhYb4ayyAYwi3XWdWI_1_dqqCzBfnlGJgSEbz9fgL1pNPVj';
function doPushMethod() {
	try {
		var xhr = new XMLHttpRequest(),
		url = urlGCM,
		params = {
			"registration_ids": "dHBA1XuzTCQ:APA91bE7b4PT9di5YvcVyH-3gO0LY2HwN8FtI3zd23Ulp_dlXuE54Ryvqw6Yl684tcXgasoJSHEod2up3UT63kItVdwrZHhYb4ayyAYwi3XWdWI_1_dqqCzBfnlGJgSEbz9fgL1pNPVj"
		};
		xhr.open('POST', url, true);
		xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
		xhr.setRequestHeader('Authorization', 'key=AIzaSyBLI0jtHooTeBusVBXWJYgDqDGTNp_L7Jk');
		xhr.setRequestHeader('Access-Control-Allow-Origin','*');	// この指定により、サーバ動作時には自動的にOriginのURLを設定（local以外）
		xhr.setRequestHeader('Access-Control-Allow-Headers','Content-Type');
		xhr.setRequestHeader('Access-Control-Request-Methods','POST');
		xhr.setRequestHeader('Access-Control-Allow-Methods','OPTIONS');
		xhr.send(JSON.stringify(params));
		xhr.onload = function () {
			if (this.status == 200) {
				var response = JSON.parse(this.responseText);
				if (response.status_code == 200) {
					console.log('%s call to Pushwoosh has been successful', methodName);
				}
				else {
					console.log('Error occurred during the %s call to Pushwoosh: %s', response.status_message);
				}
			} else {
				console.log('Error occurred, status code: %s', this.status);
			}
		};
		xhr.onerror = function () {
			console.log('Push response status code to %s call in not 200', methodName)
		};
	} catch (e) {
		console.log('Exception while %s the device: %s', methodName, e);
	}
}
