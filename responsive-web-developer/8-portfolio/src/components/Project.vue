<template>
  <div class="font-montserrat font-medium w-[862px] m-4">
    <div v-for="data in datas" :key="data">
      <div
        class="border border-grey rounded-xl flex flex-col justify-start gap-y-6 p-6 bg-white mb-4"
      >
        <h1 class="text-h4 leading-5 text-grey-primary font-bold">
          Projects ({{ data.projects.length }})
        </h1>
      </div>

      <div
        v-for="project in data.projects"
        :key="project"
        class="flex flex-col items-start gap-y-9 mb-8 transform transition duration-200 hover:scale-95 cursor-pointer rounded-xl border border-grey bg-white pt-6 pb-6"
      >
        <div class="flex flex-row justify-between gap-x-8">
          <img
            :src="'./img/projects/' + project.image"
            :alt="project.alt"
            class="rounded-xl w-[322px]"
          />

          <div class="flex flex-col justify-between">
            <div>
              <div class="flex flex-row gap-x-2.5">
                <span v-for="tag in project.tag" :key="tag">#{{ tag }}</span>
              </div>
              <h1 class="text-h5 leading-5 text-grey-primary font-semibold">
                {{ project.name }}
              </h1>
              <p>
                {{ project.description }}
              </p>
            </div>
            <div class="flex flex-row gap-x-2.5">
              <button
                class="py-3 px-10 bg-p-blue-primary text-white border border-p-blue-primary rounded-xl"
              >
                Demo
              </button>
              <button
                class="py-3 px-10 bg-white text-p-blue-primary border border-p-blue-primary rounded-xl"
              >
                Code
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
        