console.log("hello world!")

var APIKey = "JjSxlr6ZotKXaAxJEz7s6hTHPdvIDsS3"
var search = ""
var starterButtons = [
	"Akuma",
	"Ryu",
	"Chun Li",
	"Street Fighter"
	]
var btn = document.createElement("button");
var embeds = []
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + APIKey + "&limit=5"
// queryURL.done(function(data) { console.log("success got data", data); });

//populate buttonArea with buttons
$(document).ready(function(){
for (let i = 0; i < starterButtons.length; i++){
	$('#buttonArea').prepend('<button id="button' + i + '" + class="button">' + starterButtons[i] + '</button>')
	
	console.log("populated" + i)
	}

	
$(".button").click(function() {
	search = this.textContent
	queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + APIKey + "&limit=5"
	console.log(search, queryURL)	
	console.log(this.textContent)
	//ajax call
   	$.ajax({                    	
   	url: queryURL, 
   		
   })
   	.done(function(response) {
   	var results = response.data
   
   	console.log(results[0].images.fixed_height.url)
	embeds.push(results.map((result) => result.images.fixed_height.url))


	//place images into image div
	for (let i = 0; i<embeds[0].length; i++){
	var img = $('<img />').attr({
	
 	"id": "pic" + i,
 	"src": embeds[0][i]})
	$('#pictureArea').append(img)
 	console.log(img)
	}

   }) //button click	


















})

   }) 
