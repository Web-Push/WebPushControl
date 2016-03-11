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

var proxyServer = "http://192.168.0.15:3128";
//-L --header "Authorization: key=AIzaSyBLI0jtHooTeBusVBXWJYgDqDGTNp_L7Jk" 
//   --header Content-Type:"application/json" https://android.googleapis.com/gcm/send
var formAction = "https://android.googleapis.com/gcm/send";
//var postData = "{\"registration_ids\":[\"dHBA1XuzTCQ:APA91bE7b4PT9di5YvcVyH-3gO0LY2HwN8FtI3zd23Ulp_dlXuE54Ryvqw6Yl684tcXgasoJSHEod2up3UT63kItVdwrZHhYb4ayyAYwi3XWdWI_1_dqqCzBfnlGJgSEbz9fgL1pNPVj\"]}";


// curl
// -d POSTリクエストとしてフォームを送信する。パラメータPARAMは「"value=name"」の形式で指定する
// -L リダイレクトに対応する
// -x プロキシサーバとしてホストHOSTおよびポートPORTを利用する

function postRequest() {
	var form = document.createElement('form');
	form.setAttribute('action', formAction);
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

