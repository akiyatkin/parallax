import { CallFrame } from "/vendor/akiyatkin/waitshow/CallFrame.js"

//background: url('/images/avto.jpg') no-repeat center center fixed;
//background-size:cover;

let Parallax = {
	init: (el, spread = 200, src = false) => {
		if (src) {
			el.style.backgroundImage = 'url("' + src + '")'
			el.style.backgroundPosition = 'top center'
			el.style.backgroundSize = 'cover'
			el.style.backgroundRepeat = 'no-reapeat'
			el.style.willChange = "background-position-y"
			el.style.backgroundAttachment = 'fixed'	
		}

		let stop = () => {
			window.removeEventListener('scroll', frameLoop)
			window.removeEventListener('resize', frameLoop)
		}
		let callback = () => {
			if (!el.closest('body')) return stop()
			let r = el.getBoundingClientRect()
			let H = window.innerHeight //Высота окна браузера
			let t = r.top //Отступ от верхнего края браузера до вернего края блока
			let b = r.bottom  //Отступ от верхнего края браузера до нижнего края блока
			let h = r.height
			let v = !!Math.max(0, t > 0 ? H - t : (b < H ? b : H))
			if (!v) return
			let ready = -t / h //Сколько пройдено в %
			let offset = -Math.round(spread * ready)
			el.style.backgroundPositionY = offset + 'px';
		}

		let frameLoop = () => CallFrame(callback, 1)
			
		window.addEventListener('scroll', frameLoop)
		window.addEventListener('resize', frameLoop)
		frameLoop();

	}

}

export { Parallax }