
var isMobile;
var browser = {
  versions: function() {
      var u = navigator.userAgent,
          app = navigator.appVersion;
      return { //移动终端浏览器版本信息
          trident: u.indexOf('Trident') > -1, //IE内核
          presto: u.indexOf('Presto') > -1, //opera内核
          webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
          iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
          iPad: u.indexOf('iPad') > -1, //是否iPad
          webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
          weixin: u.indexOf('MicroMessenger') > -1, //是否微信   
          qq: u.match(/\sQQ/i) !== null//u.indexOf("MQQBrowser")>-1  //是否QQ 
      };
  }(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

window.addEventListener('load', function () {
  
  isMobile=browser.versions.mobile;
  console.log("isMobile"+isMobile);
  if(typeof(webExtensionWallet) === "undefined"&&!isMobile){
    //MyHero
    $("#firstCallButton").hide();
    $("#secondCallButton").hide();
    $("#thirdCallButton").hide();
    $("#fourthCallButton").hide();
    $("#fifthCallButton").hide();
    $("#firstMyHeroCallButton").hide();
    $("#secondMyHeroCallButton").hide();
    $("#thirdMyHeroCallButton").hide();
    $("#fourthMyHeroCallButton").hide();
    $("#fifthMyHeroCallButton").hide();
    $("#content_show").hide();
  } else {
    // App.start();
    console.log("start");
    $("#firstCallButton").show();
    $("#secondCallButton").show();
    $("#thirdCallButton").show();
    $("#fourthCallButton").show();
    $("#fifthCallButton").show();
    $("#firstMyHeroCallButton").show();
    $("#secondMyHeroCallButton").show();
    $("#thirdMyHeroCallButton").show();
    $("#fourthMyHeroCallButton").show();
    $("#fifthMyHeroCallButton").show();
    $("#content_show").show();
  }
});