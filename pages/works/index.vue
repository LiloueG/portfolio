<template>
  <section
    id="works"
    class="min-h-screen px-5 flex flex-col justify-center gap-20 lg:gap-40"
  >
    <h1 class="font-boiling text-center text-3xl md:text-6xl lg:text-9xl">
      WORKS
    </h1>
    <div class="circle top-0 left-0 translate-x-[-50%]"></div>
    <div class="circle bottom-0 right-0"></div>
  </section>
  <div class="min-h-screen max-w-[1440px] mx-auto grid grid-cols-1 px-5 gap-5 lg:gap-10 lg:grid-cols-2 ">
    <div v-for="document in projects" :key="document.uid" :document="document">
      <NuxtLink :to="`/works/` + document?.uid">
        <section class="relative w-full aspect-video">
          <h2
            class="absolute top-5 left-5 font-boiling text-3xl lg:text-5xl lg:top-14 lg:left-14"
          >
            {{ document?.data?.title }}
          </h2>
          <img
            :src="document?.data.picture.url"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
        </section>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts" >
const prismic = usePrismic();

const projects = ref()

const getSortedProjectsByRelease = async () => {
  try {
    // Récupère tous les documents de type 'project'
    const documents = await prismic.client.getAllByType("project");

    // Trie les documents par le champ 'release' (supposé être une date)
    const sortedDocuments = documents.sort((a, b) => {
      const dateA = a.data.release ? new Date(a.data.release) : new Date(0);
      const dateB = b.data.release ? new Date(b.data.release) : new Date(0);
      return dateB.getTime() - dateA.getTime();
    });

    projects.value = sortedDocuments;
  } catch (error) {
    console.error("Erreur lors de la récupération des projets :", error);
    projects.value = [];
  }
};

console.log(await getSortedProjectsByRelease());
</script>
