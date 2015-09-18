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
		// takes the returned parsed json data to display photos
		/* callback function(data) {
			var thumbnailTemplate = '<ul>';
			$.each(data.items, function(index, photo){
				thumbnailTemplate += '<li class="grid-25 tablet-grid-50">' +
																'<a href="' + photo.link +'" class="image">' +
																	'<img src="' + photo.media.m + '">' +
																'</a>' +
															'</li>';
			});
			thumbnailTemplate += '</ul>';
		}*/

		$.getJSON(flickerApiUrl, flickerData, function(data) {
			// storing the ul element
			var thumbnailTemplate = '<ul>';
			// .each() will iterate throughitem in the returned json data [] and apply the callback function to each item
			// Data is the is the returned JSON {}
			// I need to access the items property of the data {}, it holds all of the photo data in a []
			$.each(data.items, function(index, photo){
				// Stores the values for each photo in this thumbnail template
				thumbnailTemplate += '<li class="grid-25 tablet-grid-50">' +
																'<a href="' + photo.link +'" class="image">' +
																	'<img src="' + photo.media.m + '">' +
																'</a>' +
															'</li>';
			});
			thumbnailTemplate += '</ul>';
			$('#photos').html(thumbnailTemplate);
		});
	});
});
