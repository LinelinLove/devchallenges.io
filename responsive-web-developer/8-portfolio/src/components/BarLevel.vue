<template>
  <div class="font-montserrat font-medium">
    <div
      class="w-[415px] shadow-[0_0_30px_2px_rgba(0,0,0,0.1)] rounded-xl flex flex-col justify-start gap-y-6 m-4 p-6 bg-white"
      v-for="data in datas"
      :key="data"
    >
      <h2
        class="text-h4 leading-5 text-grey-primary font-bold uppercase"
        v-if="name == 'frontend'"
      >
        Front end
      </h2>
      <h2
        class="text-h4 leading-5 text-grey-primary font-bold uppercase"
        v-else-if="name == 'backend'"
      >
        Back-end
      </h2>

      <!-- <div class="flex flex-col gap-y-2.5">
        <span
          v-for="barlevel in data[name]"
          :key="barlevel"
          class="transform transition duration-200 hover:scale-110 cursor-pointer text-h5 leading-5 text-grey-primary font-semibold w-fit"
        >
          {{ barlevel.name }}
        </span>
      </div> -->

      <div
        v-for="barlevel in data[name]"
        :key="barlevel"
        class="flex flex-col items-start gap-y-9 cursor-pointer"
      >
        <div
          class="flex flex-row transform transition duration-200 hover:scale-110 justify-between w-full"
        >
          <h3
            class="text-h5 leading-5 text-grey-primary font-semibold"
          >
            {{ barlevel.name }}
          </h3>

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
  props: ["name"],
  name: "BarLevel",
};
</script>


<style scoped>
.barlevel {
  width: var(--width);
}
</style>
      