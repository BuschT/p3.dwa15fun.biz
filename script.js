$( document ).ready(function() {
    showScores("basketball/nba");
    $( "#sport_select" ).val("basketball/nba");
    $( "#sport_select" ).change(function(obj) {
	  showScores($(this).val());
	});
});


function showScores(sport){
	$.ajax({
  		url: "http://api.espn.com/v1/sports/"+sport+"/news/headlines?apikey=9qf8zc8pq9n48f5td2z69nwt",
  		context: document.body
	}).done(function(obj) {
		$("#content").empty();
		for (var x=0; x<obj.headlines.length; x++){
			if (obj.headlines[x].images.length > 0){
				$("#content").append("<div class='headline'><a href='"+obj.headlines[x].links.web.href+"'><img class='headline-img' src='"+obj.headlines[x].images[0].url+"'</img><div class='headline-text'>"+obj.headlines[x].headline+"</a></div><div class='headline-description'>"+obj.headlines[x].description+"</a></div><br /></headline>");
			} else {
				$("#content").append("<div class='headline'><a href='"+obj.headlines[x].links.web.href+"'><img class='headline-img' src='http://go.com/sites/default/files/espn.png'</img><div class='headline-text'>"+obj.headlines[x].headline+"</a></div><div class='headline-description'>"+obj.headlines[x].description+"</a></div></div><br /></headline>");
			}
		}
	});
}


