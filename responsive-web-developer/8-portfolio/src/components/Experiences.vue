<template>
  <div class="font-montserrat font-medium">
    <div
      class="w-fit shadow-[0_0_30px_2px_rgba(0,0,0,0.1)] rounded-xl flex flex-col justify-start gap-y-9 p-6 bg-white dark:bg-black lg:w-[413px] lg:m-4"
      v-for="data in datas"
      :key="data"
    >
      <h1 class="text-h2 leading-8 text-grey-primary font-semibold mb-3">
        Experiences
      </h1>

      <div
        v-for="exp in data.experiences"
        :key="exp"
        class="flex flex-row items-start gap-x-4 transform transition duration-200 hover:scale-95 cursor-pointer"
      >
        <div class="w-1/2 select-none">
          <!-- <img
        :src="'./img/experiences/' + exp.image"
        :alt="exp.alt"
        /> -->

          <img
            :src="'./img/experiences/' + getImageSource(exp.image)"
            :alt="exp.alt"
          />
        </div>

        <div class="">
          <h1 class="text-p leading-4 text-grey-light mb-3">
            {{ exp.date }}
          </h1>
          <h2 class="leading-5 text-h5 font-semibold mb-8">{{ exp.job }}</h2>
          <p class="text-grey-light text-h5 leading-5 pr-4 font-medium">
            {{ exp.description }}
          </p>
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
      // darkMode: true,
    };
  },
  mounted() {
    this.$store.commit('toggleDarkMode');
  },
  methods: {
    getImageSource(experience) {
      // console.log(this.$root.darkMode);
      return this.$store.state.darkMode ? experience.dark : experience.light;
    },
    //     getImageSource(experience) {
    //   if (Array.isArray(experience.image)) {
    //     return this.darkMode
    //       ? experience[0]
    //       : experience[1];
    //   } else {
    //     return (this.darkMode ? experience.dark : experience.light);
    //   }
    // },
    name: "Experiences",
  },
};
</script>
  
<style scoped>
</style>
  