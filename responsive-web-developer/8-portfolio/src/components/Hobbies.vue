<template>
  <div class="font-montserrat font-medium">
    <div
      class="w-fit shadow-[0_0_30px_2px_rgba(0,0,0,0.1)] rounded-xl flex flex-col justify-start gap-y-6 p-6 bg-white
      dark:bg-black
      lg:w-[413px] lg:m-4"
      v-for="data in datas"
      :key="data"
    >
      <h1 class="text-h2 leading-8 text-grey-primary font-semibold">Hobbies</h1>

      <div
        v-for="hobby in data.hobbies"
        :key="hobby"
        class="flex flex-col items-start gap-y-9 transform transition duration-200 hover:scale-95 cursor-pointer"
      >
        <div class="select-none">
          <img
            :src="'./img/hobbies/' + hobby.image"
            :alt="hobby.alt"
            class="rounded-xl"
          />
        </div>

        <div class="">
          <h1 class="text-h4 leading-5 text-grey-dark font-semibold mb-2.5">
            {{ hobby.name }}
          </h1>
          <p class="text-grey-light text-h5 leading-5 pr-4">
            {{ hobby.description }}
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
    };
  },
  name: "Experiences",
};
</script>
    
  <style scoped>
</style>
    