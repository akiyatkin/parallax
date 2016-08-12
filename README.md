
# Простой Parallax эффект
## Пример


```html
	<section id="divid" class="text-center" style="
		background: url('/vendor/akiyatkin/parallax/image.jpg') no-repeat center center fixed;
	    color:#fff;
	    background-size:cover;
	">
		<h1>Bootstrap Parallax</h1>

		<p class="lead">Add Some Motion</p>
	</section>

	<script>
		Parallax.init('divid',0.15);
	</script>
```