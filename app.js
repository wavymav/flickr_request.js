$(document).ready(function() {
	// Selects all button elements
	// Use the click event method to fire off events events
	$('button').click(function() {
		// Removes the css .selected for all button elements when clicked
		$('button').removeClass('selected');
		// Then adds the css .sleceted to the button element that was clicked
		$(this).addClass('selected');
	});
});
