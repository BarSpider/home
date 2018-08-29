
var pages = ["home","menu","member","access","contact"];
var bookmark = 0;

// URLのアンカー（#以降の部分）を取得
var urlHash = location.hash;
 
// URLにアンカーが存在する場合
switch(urlHash){
    case "#0":
        break;
    case "#1":
        changepage("menu");
        break;
    case "#2":
        changepage("member");
        break;
    case "#3":
        changepage("access");
        break;
    case "#4":
        changepage("contact");
        break;
    default:
        break;
              }

//画面遷移
function changepage(pagename){
    //document.getElementById(pages[bookmark]).className="pure-u-1-5 off";
    
    //document.getElementById(pagename).className="pure-u-1-5 on";
    $(".scrollin").removeClass("scrollin");
    
    document.getElementById("dis"+pages[bookmark]).style.display="none";
    
    document.getElementById("dis"+pagename).style.display="inline";
    
    for(var i=0;i<5;i++){
        if(pages[i]==pagename)bookmark=i;
    }
    
}

$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});


/*
function initMap() {
    // 地図の中心を決める
    var latlng = new google.maps.LatLng(35.3888083,139.4300205);

    // 地図を表示するためのオプションを設定する
    var opt = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // 地図を表示する。
    var map = new google.maps.Map(document.getElementById('map'), opt);

 
    var marker = new google.maps.Marker({
        name:"かまぼこハウス",
        position: latlng,
        map: map,
    });

}*/