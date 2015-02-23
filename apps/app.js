$(document).ready(function(){

	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();	
		getRequest(searchTerm);	
	});
});

function getRequest(searchTerm){
	var params = {
		part: 'snippet',
		key: 'AIzaSyD-QMDcKk4yPkg-UxAS5ydce9sftmB8gIc',
		q: searchTerm
	};
	url = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, params, function(data){
		showResults(data.items);
	});	
}
		
function showResults(result) {		
	for (var i = 0; i < result.length; i++) {
		$('#search-results').append('<a href="https://www.youtube.com/watch?v=' + result[i].id.videoId + '"><img src="' + result[i].snippet.thumbnails.medium.url + '"></a><br>');
		console.log(result[i].snippet.thumbnails.medium.url);
	}		
}		
	
