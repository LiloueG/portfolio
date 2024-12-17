<template>
	<div class="relative min-h-screen flex flex-col justify-center">
		<SliceZone wrapper="main" :slices="document?.data.slices ?? []" :components="components" class="max-w-[1440px] mx-auto px-20 py-10 md:py-14 lg:py-24"/>
		<div class="circle top-0 left-0 translate-x-[-50%]"></div>
        <div class="circle bottom-0 right-0"></div>
	</div>
	<Footer/>
</template>

<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: document } = useAsyncData(`[works-uid-${route.params.uid}]`, () =>
	prismic.client.getByUID("project", route.params.uid as string),
);

useHead({
	title: document.value?.data.title || '',
});
</script>