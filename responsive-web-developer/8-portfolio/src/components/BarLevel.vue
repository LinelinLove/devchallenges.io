<template>
  <div class="font-montserrat font-medium">
    <div
      class="w-[415px] shadow-[0_0_30px_2px_rgba(0,0,0,0.1)] rounded-xl flex flex-col justify-start gap-y-6 m-4 p-6 bg-white"
      v-for="data in datas"
      :key="data"
    >
      <h1
        class="text-h4 leading-5 text-grey-primary font-bold uppercase"
        v-if="name == 'frontend'"
      >
        Front end
      </h1>
      <h1
        class="text-h4 leading-5 text-grey-primary font-bold uppercase"
        v-else-if="name == 'design'"
      >
        Design
      </h1>

      <div
        v-for="barlevel in data[name]"
        :key="barlevel"
        class="flex flex-col items-start gap-y-9 transform transition duration-200 hover:scale-105 cursor-pointer"
      >
        <div class="flex flex-row justify-between w-full">
          <h1 class="text-h5 leading-5 text-grey-primary font-semibold">
            {{ barlevel.name }}
          </h1>
          <div class="w-60 h-2.5 bg-bar rounded-xl">
            <div
              class="h-2.5 bg-p-blue-primary rounded-xl barlevel"
              :style="{ '--width': barlevel.level * 10 + '%' }"
            ></div>
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
  props: [
    "name",
  ],
  name: "BarLevel",
};
</script>


<style scoped>
.barlevel {
  width: var(--width);
}
</style>
      