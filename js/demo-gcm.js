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

// XMLHttpRequest を使用すると、通信を行うときに、preflight処理を行うことがあります。
// 今回のPOST仕様で追加するヘッダの内容の場合には、preflight通信を行いますが、このとき、Demo環境では、HTTP:405エラーです。
// 想定原因は、POST先が、preflightに非対応の可能性、および、Demoのドメインがクロスドメインアクセス仕様ではないこと、です。
// そのため、Demo環境で動作するには、標準のXMLHttpRequestでの実装は、行わないこととします。
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
	//TODO:データ設定。endpointのURL別に送信データオブジェクトを作成する必要があります。（未実装：現状、すべてurlGCM宛）
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
	xhr.setRequestHeader('Content-Type', 'text/plain');	// application/json
	xhr.setRequestHeader('Access-Control-Allow-Origin','http://web-push.github.io/WebPushControl/');	// この指定により、サーバ動作時には自動的にOriginのURLを設定（local以外）
	xhr.setRequestHeader('Access-Control-Allow-Headers','Content-Type;charset=UTF-8');
	xhr.setRequestHeader('Access-Control-Allow-Methods','GET,OPTIONS');
	xhr.setRequestHeader('Access-Control-Request-Methods','POST');
	xhr.withCredentials = true;
	// 送信処理
	xhr.send(sendData);
}

var methodName = 'testNema';
var arguments = 'dHBA1XuzTCQ:APA91bE7b4PT9di5YvcVyH-3gO0LY2HwN8FtI3zd23Ulp_dlXuE54Ryvqw6Yl684tcXgasoJSHEod2up3UT63kItVdwrZHhYb4ayyAYwi3XWdWI_1_dqqCzBfnlGJgSEbz9fgL1pNPVj';
// sample
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


// windows.postMessage()を利用したPOST処理
function postMessage() {
	var contentStr = 'Content-Type:application/json ';
	var authorStr = 'Authorization:key=AIzaSyBLI0jtHooTeBusVBXWJYgDqDGTNp_L7Jk ';
	var sendData = authorStr + contentStr + '"registration_ids":["dHBA1XuzTCQ:APA91bE7b4PT9di5YvcVyH-3gO0LY2HwN8FtI3zd23Ulp_dlXuE54Ryvqw6Yl684tcXgasoJSHEod2up3UT63kItVdwrZHhYb4ayyAYwi3XWdWI_1_dqqCzBfnlGJgSEbz9fgL1pNPVj"]}';

	//var win = window.open();
	window.addEventListener("message", receiveMessage, false);
	function receiveMessage(event) {
		console.log("Receive message.");
		return;
	}

	window.postMessage(sendData, urlGCM);
}



function execSubmit(cellList) {
	var contentStr = 'Content-Type:application/json ';
	var authorStr = 'Authorization:key=AIzaSyBLI0jtHooTeBusVBXWJYgDqDGTNp_L7Jk ';
	
	
	// 表示中のサイトに影響しないDocument作成
	//var newDoc = document.createDocument(null, 'html', null);
	// フォームの生成
	var form = document.createElement('form');
	form.style.display = 'none';
	form.setAttribute('action', urlGCM);
	form.setAttribute('method', 'POST');

	// header
	var header = document.createElement('head');
	// <head authorization="..." content-type=">
	//<meta http-equiv="xxx" content="yyy">
	var meta1 = document.createElement('meta');
	meta1.setAttribute('http-equiv', 'Authorization')
	meta1.setAttribute('content', 'key=AIzaSyBLI0jtHooTeBusVBXWJYgDqDGTNp_L7Jk');
	header.appendChild(meta1);
	//header.setAttribute('Content-Type', 'text/html;charset=UTF-8');	// text/plain
	//header.setAttribute('Content-Type', 'application/json;charset=UTF-8');	// text/plain
	var meta2 = document.createElement('meta');
	meta2.setAttribute('http-equiv', 'Content-Type');
	meta2.setAttribute('content', 'application/json;charset=UTF-8');
	header.appendChild(meta2);
	form.appendChild(header);

	var sendData = authorStr + contentStr + '"registration_ids":["dHBA1XuzTCQ:APA91bE7b4PT9di5YvcVyH-3gO0LY2HwN8FtI3zd23Ulp_dlXuE54Ryvqw6Yl684tcXgasoJSHEod2up3UT63kItVdwrZHhYb4ayyAYwi3XWdWI_1_dqqCzBfnlGJgSEbz9fgL1pNPVj"]}';

/*
	// application/json "to" others="registration_ids"
	var sendData = '{"registration_ids":[';
	//TODO:データ設定。endpointのURL別に送信データオブジェクトを作成する必要があります。（未実装：現状、すべてurlGCM宛）
	$.each(cellList, function(i, elem) {
		var all=elem;
		// when endpoint == urlGCM 
		var rId = all.split("/").pop();
		if (i > 0) { sendData = sendData + ',';}
		sendData = sendData + '"' + rId + '"';
	});
	sendData = sendData + ']}';
*/

	// body
	if (cellList.length != 0) {
		var body = document.createElement('body');
		//body.setAttribute('type', 'hidden');
		//body.setAttribute('Content-Type', 'application/json;charset=UTF-8');
		//body.setAttribute('Authorization', 'key=AIzaSyBLI0jtHooTeBusVBXWJYgDqDGTNp_L7Jk');
		body.setAttribute('value', sendData);	// error401=content
		form.appendChild(body);
		console.log(form);
		// submit
		form.submit();
	}
}


/* message pattern
device message	
{	// jsonのときは、to
  "to": "aUniqueKey",
  "data": {
    "hello": "This is a GCM Device Group Message!",
   }
}

  {
    "to" : "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1...",
    "notification" : {
      "body" : "great match!",
      "title" : "",
      "icon" : ""
    }
  }

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


https://gcm-http.googleapis.com/gcm/send
  Content-Type:application/json
  Authorization:key=AIzaSyZ-1u...0GBYzPu7Udno5aA
  {
    "to": "/topics/foo-bar",
    "data": {
      "message": "This is a GCM Topic Message!",
     }
  }
*/



function messagePush(dataList) {

	fetch('https://android.googleapis.com/gcm/send', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'key=AIzaSyBLI0jtHooTeBusVBXWJYgDqDGTNp_L7Jk' // ここは 'key=${projectId}' こんな感じで↑から値を引っ張ってきたかったけどうまくいかなかったから直値で妥協
		},
		body: JSON.stringify({
			//time_to_live: 10,
			registration_ids: dataList
                }),
		credentials: 'cors'
	}).then(function(response) {
		console.log(response);
	}).catch(function(error) {
		console.error(error);
	});
}


