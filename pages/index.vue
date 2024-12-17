<template>
    <div>
        <template>
            <main>
                <section class="relative h-screen bg-image px-5">
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
                                <img src="../public/logo.svg" alt="" class="lg:w-72">
                            </h1>
                        </div>

                        <div class="w-full text-center flex flex-col gap-2">
                            <p class="text-sm lg:text-2xl">WORKING ON PROJECTS FOR</p>
                            <div class="font-boiling flex justify-center items-center gap-3 text-lg lg:text-3xl lg:gap-5">
                                <h3>DIGITAL</h3>
                                <h3>VISUAL CREATION</h3>
                                <h3>DESIGN</h3>
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

                <section id="about" class="color-span min-h-screen relative flex justify-center items-center text-center">
                    <div class="circle top-0 left-0 translate-x-[-50%]"></div>
                    <div class="circle bottom-0 right-0"></div>

                    <div class="max-w-[700px] px-5 flex flex-col gap-10 py-5 lg:max-w-[1440px] lg:gap-16">
                        <p class="text-3xl lg:text-7xl">Hi, I'm <span>Liloue</span></p>
                        <p class="text-2xl lg:text-6xl">I'm a <span>graphic designer</span> specializing in <span>website mockups</span>. I also work on <span>illustration</span> and am training in <span>community management</span>.</p>
                    </div>
                </section>

                <section id="expertises" class="min-h-screen bg-backgroud-200 px-5 flex flex-col justify-center gap-20 lg:gap-40">
                    <div class="flex justify-center">
                        <h2 class="font-boiling max-w-[700px] text-center text-3xl md:text-5xl lg:text-8xl lg:max-w-[1440px]">MAKING SOME DESIGN SINCE 2023</h2>
                    </div>
                    <div class="flex flex-col gap-5 max-w-[700px] lg:gap-10">
                        <h2 class="font-boiling text-xl md:text-3xl lg:text-5xl">EXPERTISES</h2>
                        <ul class="grid grid-cols-2 gap-5 text-sm px-5 md:grid-cols-3 md:text-base lg:gap-10">
                            <li class="flex gap-2 items-center"><icons-figma class="w-7 h-7"/><p>Figma</p></li>
                            <li class="flex gap-2 items-center"><icons-painter class="w-7 h-7"/><p>Infinite Painter</p></li>
                            <li class="flex gap-2 items-center"><icons-illustrator class="w-7 h-7"/><p>Illustrator</p></li>
                            <li class="flex gap-2 items-center"><icons-canva class="w-7 h-7"/><p>Canva</p></li>
                            <li class="flex gap-2 items-center"><icons-photoshop class="w-7 h-7"/><p>Photoshop</p></li>
                        </ul>
                    </div>
                </section>

                <section id="work" class="px-5">
                    <div class="relative min-h-screen flex flex-col justify-center">
                        <div class="circle top-0 left-0 translate-x-[-50%]"></div>
                        <div class="circle bottom-0 right-0"></div>

                        <h2 class="font-boiling text-center text-3xl md:text-6xl lg:text-9xl">RECENT WORKS</h2>
                    </div>

                    <div class="min-h-screen max-w-[1440px] pb-96 mx-auto  flex flex-col gap-44">
                        <CardProject v-for="document in latestThreeProjects" :key="document.uid" :document="document"/>
                    </div>
                </section>

                <Footer id="infos"/>
            </main>
        </template>
    </div>
</template>

<script setup lang="ts">
const prismic = usePrismic();

// Récupérer tous les projets
const documents = await prismic.client.getAllByType('project');

// Trier les projets par le champ 'release' en ordre décroissant
const sortedDocuments = documents.sort((a, b) => {
  const dateA = a.data.release ? new Date(a.data.release).getTime() : 0;
  const dateB = b.data.release ? new Date(b.data.release).getTime() : 0;
  return dateB - dateA;
});

// Limiter aux 3 derniers projets
const latestThreeProjects = sortedDocuments.slice(0, 3);

console.log(latestThreeProjects); // Affiche les 3 derniers projets



const latestWork = documents.reduce((latest, current) => {
  return current?.data?.release && latest?.data?.release && new Date(current.data.release) > new Date(latest.data.release) ? current : latest;
});
</script>

<style scoped>
.bg-image {
    background-image: url('/img/hero.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.color-span span {
    @apply font-boiling text-typo-200;
}
</style>