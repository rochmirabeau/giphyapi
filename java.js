console.log("hello world!")

var APIKey = "JjSxlr6ZotKXaAxJEz7s6hTHPdvIDsS3"
var search = "ali g"
var starterButtons = [
	"Akuma",
	"Ryu",
	"Chun Li",
	"Street Fighter"
	]
var btn = document.createElement("button");
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + APIKey + "&limit=5"
// queryURL.done(function(data) { console.log("success got data", data); });

//populate buttonArea with buttons
$(document).ready(function(){
for (let i = 0; i < starterButtons.length; i++){
	$('#buttonArea').prepend('<button id="button' + i + '" + class="button">' + starterButtons[i] + '</button>')
	
	console.log("populated" + i)
	}

	
$(".button").click(function() {
	console.log("button clicked")
})


 $("#button0").on("click" , function() {
  	console.log(queryURL)          
   	$.ajax({
   	url: queryURL, 
   		
   })
   	.done(function(response) {
   	var results = response.data
   
   	console.log(response, results)}
   	)
	})

  }) 
