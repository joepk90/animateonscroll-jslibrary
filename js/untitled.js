document.addEventListener('DOMContentLoaded', function () {

	console.log("test");

	// on ready - run element style update function

	// on scroll - run element style update function
	var runOnScroll = function(element) {
		
		var data0 = element.getAttribute("data-0")

		console.log(data0);

		//updateElements();
	};

	var elements = document.getElementsByClassName("animateOnScroll");
	elements = Array.prototype.slice.call(elements);

	window.addEventListener("scroll", function() {
		elements.forEach( function(element) {
			runOnScroll(element);
		});
	});
	/* elements.forEach(function(element) {
	  window.addEventListener("scroll", runOnScroll(element));
	}); */

	function elementState(top, left, bottom, right) {
	    this.top = top;
	    this.left = left;
	    this.bottom = bottom;
	    this.right = right;
	}

	var initialState = new elementState();
	var endState = new elementState();
	var currentState = new elementState();

	var updateElements = function() {

	// for each div element 

	// use prototype to store variables and method for calculating position

	// update position

	// object - starting style, ending style
	// top, left, bottom, right, background color, color

	}
	




/* var div = document.getElementById("div");


 	div.scrollTo(500, 500);
 	div.scrollTop = div.scrollHeight;
*/

});