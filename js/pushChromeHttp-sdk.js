var pushObj = {
  PUSH_APPLICATION_CODE: 'XXXX-XXXX',
  init: function (applicationCode) {
    this.PUSH_APPLICATION_CODE = applicationCode;
    window.addEventListener("message", this.pwReceiveMessage, false);
  },
  pwReceiveMessage: function (event) {
    if (event.data == 'allowPushNotifications') {
      localStorage.setItem('pwAllowPushNotifications', true);
    }
  },
  isBrowserChrome: function () {
    return navigator.userAgent.toLowerCase().indexOf('chrome') > -1
  },
  subscribeAtStart: function () {
    if (this.isBrowserChrome()) {
      if (null == localStorage.getItem('pwAllowPushNotifications')) {
        this.showSubscriptionWindow();
      }
    }
  },
  isSubscribedForPushNotifications: function () {
    return true == localStorage.getItem('pwAllowPushNotifications');
  },
  showSubscriptionWindow: function () {
    if (this.isBrowserChrome()) {
      var windowWidth = screen.width / 2;
      var windowHeight = screen.height / 2;

      var windowLeft = screen.width / 2 - windowWidth / 2;
      var windowRight = screen.height / 2 - windowHeight / 2;

      var URL = 'https://' + this.PUSHWOOSH_APPLICATION_CODE + '.chrome.pushwoosh.com/';

      var pwSubscribeWindow = window.open(URL, '_blank', "width=" + windowWidth + ",height=" + windowHeight + ",resizable=yes,scrollbars=yes,status=yes,left=" + windowLeft + ',top=' + windowRight);
    }
  }
};