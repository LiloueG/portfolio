<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
    getSliceComponentProps<Content.ImageTextSlice>([
        "slice",
        "index",
        "slices",
        "context",
    ])
);
</script>

<template>
    <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation" class="my-20 md:my-36 lg:my-48">
        <section class="grid grid-cols-1 items-center gap-5 md:gap-10 lg:gap-14 md:grid-cols-2">
            <div class="flex flex-col gap-2 md:gap-3 lg:gap-5" :class="{ 'md:order-1': slice.variation === 'right' }">
                <PrismicRichText :field="slice.primary.title" class="text-2xl lg:text-4xl" />
                <PrismicRichText :field="slice.primary.content" class="md:text-xl"/>
            </div>

            <PrismicImage :field="slice.primary.picture"/>
        </section>
    </section>
</template>
