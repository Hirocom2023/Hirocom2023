$.scrollify({
    section : ".box",//1ページスクロールさせたいエリアクラス名
    scrollbars:"false",//スクロールバー表示・非表示設定
    interstitialSection : "#header,#footer",//ヘッダーフッターを認識し、1ページスクロールさせず表示されるように設定
    easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
      scrollSpeed: 500, // スクロール時の速度
    
    //以下、ページネーション設定
    before:function(i,panels) {
      var ref = panels[i].attr("data-section-name");
        $(".pagination .active").removeClass("active");
        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
      },
      afterRender:function() {
        var pagination = "<ul class=\"pagination\">";
        var activeClass = "";
        $(".box").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
          activeClass = "";
          if(i===$.scrollify.currentIndex()) {
            activeClass = "active";
          }
          pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
        });
        pagination += "</ul>";
  
        $("#box1").append(pagination);//はじめのエリアにページネーションを表示
        $(".pagination a").on("click",$.scrollify.move);
    }
    
});

// カーソルに関するプログラム

// カーソル用のdivタグをマウスに追従させる
document.addEventListener('mousemove', function (e) {
  cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

// リンクにホバーした時にクラス追加、離れたらクラス削除
var link = document.querySelectorAll('a');
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('cursor--hover');
    });
    link[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('cursor--hover');   
    });
}

// カーソルに関するプログラムここまで