<template>
  <div class="font-montserrat font-medium">
    <div
      class="h-[692px] w-[413px] border border-grey rounded-xl flex flex-col justify-start gap-y-8 m-4 p-6 bg-white"
      v-for="data in datas"
      :key="data"
    >

      <img
        :src="'./img/' + data.profile.image"
        :alt="data.profile.alt"
        class="w-[366px] border border-grey rounded-xl self-center select-none"
      />

      <div>
        <h1 class="font-semibold text-h2 leading-8 text-grey-primary">
          {{ data.profile.name }}
        </h1>
        <h2 class="leading-5 text-h4 text-grey-light">
          {{ data.profile.job }}
        </h2>
      </div>

      <ul class="text-grey-primary text-h4 leading-5">
        <li class="flex flex-row gap-x-5">
          <span class="material-icons-round select-none">mail</span>
          <p>{{ data.profile.mail }}</p>
        </li>
        <li class="flex flex-row gap-x-5">
          <span class="material-icons-round select-none">phone</span>

          <p>{{ data.profile.tel }}</p>
        </li>
      </ul>

      <p class="text-grey-light text-h4 leading-5 pr-4">
        {{ data.profile.description }}
      </p>
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
  name: "Profile",
};
</script>
  
<style scoped>
</style>
  