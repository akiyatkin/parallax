Parallax = {
	init: function (divid, speed) {
		var wHeight = $(window).height();
		
		// Save a reference to the element
		var $this = $('#' + divid);

		// Set up Scroll Handler
		var callback = function () {
			var scrollTop = $(window).scrollTop();
			var offset = $this.offset().top;
			var height = $this.outerHeight();

			// Check if above or below viewport
			if (offset + height <= scrollTop || offset >= scrollTop + wHeight) {
				return;
			}

		   var yBgPosition = Math.round((offset - scrollTop) * speed); 
			 // Apply the Y Background Position to Set the Parallax Effect
			$this.css('background-position', 'center ' + yBgPosition + 'px');
			
		}
		$(document).scroll( callback );
		callback();
	}
}
