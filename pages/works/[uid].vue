<template>
	<SliceZone wrapper="main" :slices="document?.data.slices ?? []" :components="components" class="max-w-[1440px] mx-auto px-5 py-10 md:py-14 lg:py-24"/>
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