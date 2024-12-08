<template>
	<NuxtLink :to="`/works/` + document?.uid" class="sticky top-[15vh]">
		<section class="relative w-full h-[70vh] lg:aspect-video">
			<h2 class="absolute top-5 left-5 font-boiling text-3xl lg:text-7xl lg:top-14 lg:left-14">{{ document?.data?.title }}</h2>
			<img :src="document?.data.picture.url" alt="" class="w-full h-full object-cover rounded-xl"/>
		</section>
	</NuxtLink>
</template>

<script setup lang="ts">
defineProps({
	document: Object,
});
</script>