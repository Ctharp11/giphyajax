var topics = ["dog", "cat", "rabit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"];

var giphyAPI = "dc6zaTOxFJmzC";

 
var limit = 10;

//limit rating to g or pg
var rating = "";

function buttons () {


$(".animal-button").empty();

for (var i = 0; i < topics.length; i++) {
	var b = $("<button>"); 
	b.addClass("buttons");
	b.attr("data-animal", topics[i]);
	b.text(topics[i]);

	$(".animal-button").append(b);


}

}


$("#add-animal").on("click", function (){
	event.preventDefault();
	userSearch = $("#animal-input").val().trim();
	topics.push(userSearch);
$(".buttons").on();
buttons();
})

buttons();

$(".buttons").on("click", function () {

$("#animals").empty();


var userSearch = $(this).attr("data-animal");

var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        userSearch + "&api_key=dc6zaTOxFJmzC&limit=10";

$.ajax({
	url: queryURL,
	method: "GET"
})

.done(function(response) {

	console.log(queryURL);
	console.log(response);

var results = response.data;

for (var i = 0; i < results.length; i++) {

	if (results[i].rating !== "r" && results[i].rating !== "pg-13") {


		var p = $('<p class="paragraph">');

		var gifDiv = $('<div class="div">');

		var rating = results[i].rating;

		var image = $("<img>");

		image.attr("src", results[i].images.fixed_height.url);
		image.attr("alt", "image");
		p.text("Rating: " + rating);

		gifDiv.append(image);
		gifDiv.append(p);


		$("#animals").append(gifDiv);

	}
}


})

});


