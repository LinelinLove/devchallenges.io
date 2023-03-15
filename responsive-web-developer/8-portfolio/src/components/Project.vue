<template>
  <div class="font-montserrat font-medium w-[862px] m-4">
    <div v-for="data in datas" :key="data">
      <div
        class="shadow-[0_0_30px_2px_rgba(0,0,0,0.1)] rounded-xl flex flex-col justify-start gap-y-6 p-6 bg-white mb-4"
      >
        <h1 class="text-h4 leading-5 text-grey-primary font-bold">
          Projects ({{ data.projects.length }})
        </h1>
      </div>

      <div
        v-for="project in data.projects"
        :key="project"
        class="flex flex-col items-start gap-y-9 mb-8 py-6 pl-4 pr-8 rounded-xl bg-white shadow-[0_0_30px_2px_rgba(0,0,0,0.1)]"
      >
        <div class="flex flex-row justify-between gap-x-8">
          <img
            :src="'./img/projects/' + project.image"
            :alt="project.alt"
            class="rounded-xl w-[322px] h-fit select-none"
          />

          <div class="flex flex-col justify-between">
            <div class="mb-2.5">
              <div class="flex flex-row gap-x-2.5 mb-6 leading-5">
                <span v-for="tag in project.tag" :key="tag" 
                class="transform transition duration-200 hover:scale-105 hover:font-semibold cursor-pointer">#{{ tag }}</span>
              </div>
              <h1
                class="text-h2 leading-8 text-grey-primary font-semibold mb-5"
              >
                {{ project.name }}
              </h1>
              <p>
                {{ project.description }}
              </p>
            </div>

            <div class="flex flex-row gap-x-2.5 select-none">
              <button
                class="py-2.5 px-10 bg-p-blue-primary text-white border border-p-blue-primary rounded-xl 
                hover:bg-p-blue hover:border-p-blue active:bg-p-blue-dark active:border-p-blue-dark
                transform transition duration-200 hover:scale-95"
              >
                <a :href="project.demo">Demo</a>
              </button>
              <button
                class="py-2.5 px-10 bg-white text-p-blue-primary border border-p-blue-primary rounded-xl 
                hover:bg-p-blue-light hover:text-white hover:border-p-blue-light active:bg-p-blue-dark active:border-p-blue-dark
                transform transition duration-200 hover:scale-95"
              >
                <a :href="project.code">Code</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
        
<script>
import json from "../assets/data.json";
export default {
  data() {
    return {
      datas: json,
    };
  },
  name: "Project",
};
</script>
  
  
<style scoped>
</style>
        