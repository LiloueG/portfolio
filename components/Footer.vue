<template>
	<footer class="bg-backgroud-200 px-10">
		<div class="text-xl lg:text-3xl min-h-screen max-w-[1200px] mx-auto grid gap-28 md:grid-cols-2 ">
			<div class="flex flex-col justify-end gap-5 md:justify-center lg:gap-8">
				<h3 class="font-boiling text-3xl md:text-4xl lg:text-6xl">CONTACT</h3>
				<ul class="flex flex-col gap-5 pl-5 lg:gap-8 lg:pl-10">
					<li><NuxtLink to="mailto:liloue.guyot25@gmail.com" class="flex gap-5"><IconsEmail class="w-6 h-6 lg:w-10 lg:h-10"/>liloue.guyot25@gmail.com</NuxtLink></li>
					<li><NuxtLink to="tel:0651414799" class="flex gap-5"><IconsTel class="w-6 h-6 lg:w-10 lg:h-10"/>06.51.41.47.99</NuxtLink></li>
				</ul>
			</div>
			<div class="flex flex-col gap-5 md:justify-center lg:gap-8">
				<h3 class="font-boiling text-3xl md:text-4xl lg:text-6xl">SOCIAL MEDIA</h3>
				<ul class="flex flex-col gap-5 pl-5 lg:gap-8 lg:pl-10">
					<li><NuxtLink to="https://www.linkedin.com/in/liloue-guyot-681987292/" class="flex gap-5"><IconsLinkedin class="w-6 h-6 lg:w-10 lg:h-10"/>Liloue GUYOT</NuxtLink></li>
					<li><NuxtLink to="https://www.instagram.com/evaneoww/" class="flex gap-5"><IconsInstagram class="w-6 h-6 lg:w-10 lg:h-10"/>evaneoww</NuxtLink></li>
					<li><NuxtLink to="https://github.com/LiloueG" class="flex gap-5"><IconsGithub class="w-6 h-6 lg:w-10 lg:h-10"/> LiloueG</NuxtLink></li>
				</ul>
			</div>
		</div>
		<div class="text-center py-10">
			<h3>Mention légale</h3>
			<p>Ce portfolio a été réalisé par Liloue Guyot dans le cadre d'un projet de Semestre 3</p>
		</div>
	</footer>
</template>