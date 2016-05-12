$(document).ready(function() {
	
	var quote = [
	"We are what we repeatedly do. Excellence, therefore, is not an act but a habit.",
	"Take calculated risks. That is quite different from being rash.",
	"If you do not hope, you will not find what is beyond your hopes.",
	"Dream big and dare to fail.",
	"When you get into a tight place and everything goes against you, till it seems you could not hang on a minute longer, never give up then, for that is just the place and time that the tide will turn.",
	"Seek the lofty by reading, hearing and seeing great work at some moment every day.",
	"The only way of finding the limits of the possible is by going beyond them into the impossible.",
	"Without inspiration the best powers of the mind remain dormant. There is a fuel in us which needs to be ignited with sparks.",
	"Nature and wisdom never are at strife.",
	"The wise man should be prepared for everything that does not lie within his control.",
	"Silence does not always mark wisdom."
	];
	
	var quotee = [
	"Aristotle",
	"George S. Patton",
	"St. Clement of Alexandra",
	"Norman Vaughan",
	"Harriet Beecher Stowe",
	"Thornton Wilder",
	"Arthur C. Clarke",
	"Johann Gottfried Von Herder",
	"Plutarch",
	"Pythagoras",
	"Samuel Taylor Coleridge"
	];

	$('button').click(function(){
    var randomQuote = Math.floor(Math.random() * quote.length);
    $('div').empty().append("<p>" +quote[randomQuote] + "</br>" + "</br>" + quotee[randomQuote] + "</p>");
		})

	
});