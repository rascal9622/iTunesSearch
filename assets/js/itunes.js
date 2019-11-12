function searchiTunes(){
	target = document.getElementById("word");
	word = target.value;
	search({term: word,limit: 30});		//検索語,取得曲数
}

//取得する
var search = function getInfo (options) {
  var params = {
    lang: 'ja_jp',
    entry: 'music',
    media: 'music',
    country: 'JP',
  };

  // 検索ワード
  if (options && options.term) {
    params.term = options.term;
  }

  // 取得件数
  if (options && options.limit) {
    params.limit = options.limit;
  }
  
  $.ajax({
    url: 'https://itunes.apple.com/search',
    method: 'GET',
    data: params,
    dataType: 'jsonp',
    
    //成功
    success: function(json) {
      showData(json);
    },

    //失敗
    error: function() {
      $(function(){
        //$("#error").text("＊ エラーが発生しました ＊");
      });
    },
  });
};

// 表示する
function showData(json) {
	
  	// データが取得できたら
  	if (json.results.length != 0) {

  		target = document.getElementById("result");
  		html  = '<center>';
        
    	for (var i = 0, len = json.results.length; i < len; i++) {
      	var result = json.results[i];

      	html +=   '<br><a href="' + result.trackViewUrl + '&amp;at=アフィリエイト・トークン" rel="nofollow" target="_blank">';
        html +=     '<img src="' + result.artworkUrl100 + '" class="itunes-embed-image" />';
        html +=   '</a><br>';
        html +=   '<a href="' + result.trackViewUrl + '&amp;at=アフィリエイト・トークン" rel="nofollow" target="_blank">' + result.trackName + '</a><br>';
        html +=   '<class="itunes-embed-artist">' + result.artistName + '<br>';    
        html +=   '<audio src="' + result.previewUrl + '" controls="" ></audio><br><br>'; 
    	}

    	html += '</center>';
  	}

  target.innerHTML = html;
}
