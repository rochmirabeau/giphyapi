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
var count = 0
var embeds = []
// var stills = []
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + APIKey + "&limit=5"
// queryURL.done(function(data) { console.log("success got data", data); });

//populate buttonArea with buttons
$(document).ready(function(){
for (let i = 0; i < starterButtons.length; i++){
	$('#buttonArea').prepend('<button id="button' + i + '" + class="button">' + starterButtons[i] + '</button>')
	
	console.log("populated" + i)
	}

//userInput adds button to array
$("#submit").click(function(e) {
//	e.preventDefault()
//	var count = 0
	console.log($("#userInput").val().trim());
	$('#buttonArea').prepend('<button id="userButton' + count + '" + class="button">' + $("#userInput").val().trim() + '</button>')
	console.log("userButton" + count + " is " + $("#userInput").val().trim())
	count++ 
})//end userInput adds button to array

// on click, empty the picture area div, change search to the button pressed, update queryURL, make ajax call, log results, update embeds	
$(".button").click(function(e) {
//	e.preventDefault()
	$("#pictureArea").empty()
	search = this.textContent
	queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + APIKey + "&limit=10"
	console.log(search, queryURL)	
	console.log(this.textContent)
	//ajax call
   	$.ajax({                    	
   	url: queryURL, 
   		
   })
   	.done(function(response) {
   	var results = response.data
   
   	console.log(results[0].images.fixed_height.url)
	embeds[0] = results.map((result) => result.images.fixed_height.url)
//	stills.push(results.map((result) => result.images.fixed_height_still.url))	

	//place images into image div
	for (let i = 0; i<embeds[0].length; i++){
	var img = $('<img />').attr({
	
 	"id": "pic" + i,
	"class": "image playing",
 	"src": embeds[0][i]})
	$('#pictureArea').append(img)
 	console.log(img)
	}

// image click

$(".image").click(function() {

	//switch img src between embed and still
	console.log(this.getAttribute("src"));
	  var src = $(this).attr("src");
  if($(this).hasClass('playing')){
     //stop
     $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
     $(this).removeClass('playing');
  } else {
    //play
    $(this).addClass('playing');
    $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
  }


 } ) //end image click



   }) //end button click	


})

   }) 
