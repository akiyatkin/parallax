 (function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	  window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
	  window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame)
	  window.requestAnimationFrame = function(callback) {
	    var currTime = new Date().getTime();
	    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	    var id = window.setTimeout(function() { callback(currTime + timeToCall); },
	      timeToCall);
	    lastTime = currTime + timeToCall;
	    return id;
	  };

	if (!window.cancelAnimationFrame)
	  window.cancelAnimationFrame = function(id) {
	    clearTimeout(id);
	  };
}());

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

		var lastPosition = -1;
		function frameLoop() {
			if (lastPosition == window.pageYOffset) {   // Avoid overcalculations
				window.requestAnimationFrame(frameLoop);
				return false;
			} else {
				lastPosition = window.pageYOffset;
			}

			callback();
			window.requestAnimationFrame(frameLoop);
		}
		frameLoop();
		//$(document).scroll( callback );
		//callback();
	},

}
