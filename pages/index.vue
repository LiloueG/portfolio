<template>
    <div>
        <template>
            <main>
                <section ref="lazySection" class="relative h-screen bg-image px-5">
                    <header class="w-full flex justify-end lg:justify-normal">
                        <ul class="text-base flex flex-col gap-5 text-right py-10 lg:grid lg:grid-cols-3 lg:justify-between lg:w-full lg:text-7xl xl:text-8xl lg:py-0">
                            <li class="lg:text-left"><nuxt-link to="#infos">INFOS</nuxt-link></li>
                            <li class="hidden lg:flex flex-col justify-center text-center">
                                <p class="text-2xl">AVAILABLE FOR PROJECTS</p>
                                <span class="text-base">Liloue Guyot</span>
                            </li>
                            <li><nuxt-link to="/works">WORKS</nuxt-link></li>
                        </ul>
                    </header>

                    <div class="w-full text-center lg:hidden">
                        <p>AVAILABLE FOR PROJECTS</p>
                    </div>

                    <section class="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] w-full flex flex-col px-5 gap-20">
                        <div class="w-full flex justify-center">
                            <h1>
                                <img src="../public/logo.svg" alt="" class="lg:w-72 w-24 h-24">
                            </h1>
                        </div>

                        <div class="w-full text-center flex flex-col gap-2">
                            <p class="text-sm lg:text-2xl">WORKING ON PROJECTS FOR</p>
                            <div class="font-boiling flex justify-center items-center gap-3 text-lg lg:text-3xl lg:gap-5">
                                <p>DIGITAL</p>
                                <p>VISUAL CREATION</p>
                                <p>DESIGN</p>
                            </div>
                        </div>
                    </section>

                    <nuxtLink :to="`/works/` + latestWork?.uid" class="absolute bottom-20 right-5 w-40 h-24 bg-cover bg-center rounded-md shadow-lg lg:w-80 lg:h-44 lg:rounded-xl" :style="{ backgroundImage: `url(${latestWork?.data?.picture?.url})` }">
                        <div class="flex flex-col justify-between w-full h-full p-3 bg-backgroud-100/40 lg:rounded-xl">
                            <h2 class="font-boiling lg:text-2xl">{{ latestWork?.data?.title }}</h2>
                            <p class="text-right text-xs lg:text-base">LATEST WORK</p>
                        </div>
                    </nuxtLink>
                </section>
                <!-- Les autres sections restent inchangées -->
            </main>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const prismic = usePrismic();

// Référence pour la section à lazy loader
const lazySection = ref<HTMLElement | null>(null);

// IntersectionObserver pour le lazy loading
onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && lazySection.value) {
                lazySection.value.style.backgroundImage = "url('/img/hero.webp')";
                observer.disconnect(); // Arrêter l'observation une fois l'image chargée
            }
        });
    });

    if (lazySection.value) {
        observer.observe(lazySection.value);
    }
});

// Récupérer et trier les projets
const documents = await prismic.client.getAllByType('project');
const sortedDocuments = documents.sort((a, b) => {
    const dateA = a.data.release ? new Date(a.data.release).getTime() : 0;
    const dateB = b.data.release ? new Date(b.data.release).getTime() : 0;
    return dateB - dateA;
});
const latestThreeProjects = sortedDocuments.slice(0, 3);

const latestWork = documents.reduce((latest, current) => {
    return current?.data?.release && latest?.data?.release && new Date(current.data.release) > new Date(latest.data.release)
        ? current
        : latest;
});
</script>

<style scoped>
.bg-image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.color-span span {
    @apply font-boiling text-typo-200;
}
</style>
