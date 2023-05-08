<template>
  <div class="font-montserrat font-medium w-fit mb-4 lg:w-[862px] lg:m-4">
    <div v-for="data in datas" :key="data">
      <div
        class="shadow-[0_0_30px_2px_rgba(0,0,0,0.1)] rounded-xl flex flex-col justify-start gap-y-6 p-6 bg-white mb-8
        dark:bg-black"
      >
        <h1 class="text-h4 leading-5 text-grey-primary font-bold
        dark:text-white">
          PROJECTS ({{ data.projects.length }})
        </h1>

        <div
          class="flex gap-y-4 gap-x-4 items-start flex-wrap lg:flex-row lg:gap-x-4"
        >
          <button
            v-for="tag in getAllTags()"
            :key="tag.tag"
            class="select-none text-p text-p-blue-primary px-5 py-2.5 border rounded-xl border-p-blue-primary hover:bg-p-blue-light hover:text-white hover:border-p-blue-light active:bg-p-blue-dark active:border-p-blue-dark"
            @click="toggleTag(tag.tag)"
            :class="{
              active: selectedTag === tag.tag,
              'tag-active': selectedTag === tag.tag,
            }"
          >
            {{ "#" + tag.tag }} ({{ tag.count }})
          </button>
        </div>
      </div>

      <div
        v-for="(project, index) in filteredProjects.slice(0, visibleItemCount)"
        :key="index"
        class="flex flex-col items-start gap-y-9 mb-8 py-6 pl-4 pr-8 rounded-xl bg-white shadow-[0_0_30px_2px_rgba(0,0,0,0.1)]
        dark:bg-black"
      >
        <div
          class="flex flex-col justify-between gap-y-8 lg:flex-row lg:gap-x-8"
        >
          <img
            :src="'./img/projects/' + project.image"
            :alt="project.alt"
            class="rounded-xl w-[322px] h-fit select-none active:border-p-blue-dark transform transition duration-200 hover:scale-105"
          />

          <div class="flex flex-col justify-between">
            <div class="mb-2.5">
              <div
                class="flex flex-row gap-x-3 mb-6 leading-5 gap-y-2.5 flex-wrap"
              >
                <span
                  v-for="tag in project.tag"
                  :key="tag"
                  class="transform transition duration-200 hover:scale-105 hover:font-semibold cursor-pointer
                  dark:text-grey-light"
                  @click="toggleTag(tag)"
                  :class="{ active: selectedTag === tag }"
                >
                  #{{ tag }}
                </span>
              </div>
              <h1
                class="text-h2 leading-8 text-grey-primary font-semibold mb-5
                dark:text-white"
              >
                {{ project.name }}
              </h1>
              <p class="dark:text-grey-light">
                {{ project.description }}
              </p>
            </div>

            <div class="flex flex-row gap-x-2.5 select-none">
              <button
                class="py-2.5 px-10 bg-p-blue-primary text-white border border-p-blue-primary rounded-xl hover:bg-p-blue hover:border-p-blue active:bg-p-blue-dark active:border-p-blue-dark transform transition duration-200 hover:scale-95"
              >
                <a :href="project.demo">Demo</a>
              </button>
              <button
                class="py-2.5 px-10 bg-white text-p-blue-primary border border-p-blue-primary rounded-xl hover:bg-p-blue-light hover:text-white hover:border-p-blue-light active:bg-p-blue-dark active:border-p-blue-dark transform transition duration-200 hover:scale-95"
              >
                <a :href="project.code">Code</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-x-10 justify-center select-none">
        <button
          @click="increaseLimit"
          v-if="visibleItemCount < data.projects.length"
          class="py-2.5 px-8 bg-p-blue-primary text-white border border-p-blue-primary rounded-xl hover:bg-p-blue hover:border-p-blue active:bg-p-blue-dark active:border-p-blue-dark transform transition duration-200 hover:scale-95"
        >
          View more
        </button>
        <button
          @click="decreaseLimit"
          v-if="visibleItemCount > minItem"
          class="py-2.5 px-8 bg-p-blue-primary text-white border border-p-blue-primary rounded-xl hover:bg-p-blue hover:border-p-blue active:bg-p-blue-dark active:border-p-blue-dark transform transition duration-200 hover:scale-95"
        >
          View less
        </button>
      </div>
    </div>

    <!-- data -->
  </div>
</template>
        


<script>
import json from "../assets/data.json";

export default {
  data() {
    return {
      datas: json,
      visibleItemCount: 2,
      minItem: 2,
      showProjects: false,
      selectedTag: null, // Tags sélectionnés
      filteredProjects: [], // Liste des projets filtrés
    };
  },

  name: "Project",

  computed: {
    showMore() {
      return this.visibleItemCount < this.data.projects.length;
    },
    filteredProjects() {
      if (!this.selectedTag) {
        // Si aucun tag n'est sélectionné, afficher tous les projets
        return this.datas.data.projects;
      } else {
        // Filtrer les projets en fonction du tag sélectionné
        return this.datas.data.projects.filter((project) => {
          return project.tag.includes(this.selectedTag);
        });
      }
    },
  },
  methods: {
    increaseLimit() {
      this.visibleItemCount += 2;
    },
    decreaseLimit() {
      this.visibleItemCount -= 2;
    },
    filterProjects() {
      if (this.selectedTags.length === 0) {
        // Si aucun tag n'est sélectionné, afficher tous les projets
        this.filteredProjects = this.data.projects;
      } else {
        // Filtrer les projets selon les tags sélectionnés
        this.filteredProjects = this.data.projects.filter((project) =>
          project.tag.some((tag) => this.selectedTags.includes(tag))
        );
      }
    },
    toggleTag(tag) {
      if (this.selectedTag === tag) {
        // Désélectionner le tag actuel si on clique à nouveau dessus
        this.selectedTag = null;
      } else {
        // Sélectionner un nouveau tag
        this.selectedTag = tag;
      }
    },
    getAllTags() {
      const tags = new Set();
      const tagsWithCount = [];

      this.datas.data.projects.forEach((project) => {
        project.tag.forEach((tag) => {
          tags.add(tag);
        });
      });

      tags.forEach((tag) => {
        const count = this.datas.data.projects.filter((project) =>
          project.tag.includes(tag)
        ).length;
        tagsWithCount.push({ tag, count });
      });

      return tagsWithCount;
    },
  },
};
</script>
  
  
<style scoped>
.tag-active {
  background-color: #228bc4; /* Couleur de fond pour le bouton actif */
  color: white;
}
</style>