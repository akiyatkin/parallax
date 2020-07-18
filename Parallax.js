 


let Parallax = {
	init: function (el, speed) {
		var wHeight = window.innerHeight;
		
		// Save a reference to the element

		// Set up Scroll Handler
		var callback = function () {
			var scrollTop = document.scrollingElement.scrollTop;
			let rect = el.getBoundingClientRect()
			var offset = rect.top
			var height = rect.height
			

			// Check if above or below viewport
			if (offset + height <= scrollTop || offset >= scrollTop + wHeight) {
				console.log('Paralax asdf')
				return;
			}

		   var yBgPosition = Math.round((offset - scrollTop) * speed); 
			 // Apply the Y Background Position to Set the Parallax Effect
			el.style.backgroundPosition = 'center ' + yBgPosition + 'px';
			
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
	}

}

export { Parallax }