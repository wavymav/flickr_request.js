$(document).ready(function() {
	// Selects all button elements
	// Use the click() event method to fire off events events
	$('button').click(function() {
		// Removes the css .selected for all button elements when clicked
		$('button').removeClass('selected');
		// Then adds the css .sleceted to the button element that was clicked
		$(this).addClass('selected');
		// getJSON() method takes 3 parameters
		// 1) url
		// Note: '?jsoncallback=?' is used to make JSONP requests as workaround for server security
		var flickerApiUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
		// 2) data request
				// Gets the inner text value of the button that was clicked
				animal = $(this).text(),
				// Specifying what kind of what properties and values I'm looking for
				flickerData = {
					// The tags property is a Flickr query string parameter
					// Allow flickr server to find a photo that matches the value of the aniamls var
					tags: animal,
					// The format is another Flickr query string parameter
					// Allow to request my prefered data format ex(JSON or XML)
					format: 'json'
				};
		// 3) callback function()
			// takes the returned parsed json data
		$.getJSON(flickerApiUrl, flickerData, function(data) {

		});
	});
});
