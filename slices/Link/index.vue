<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
    getSliceComponentProps<Content.LinkSlice>([
        "slice",
        "index",
        "slices",
        "context",
    ])
);
</script>

<template>
    <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
        <div class="flex justify-center">
            <PrismicLink :field="slice.primary.link" class="bg-typo-200 px-7 py-3 rounded-full transition-all duration-300 hover:bg-backgroud-300" />
        </div>
    </section>
</template>
