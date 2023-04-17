<template>
  <div class="font-montserrat font-medium">
    <div
      class="w-[862px] shadow-[0_0_30px_2px_rgba(0,0,0,0.1)] rounded-xl flex flex-col justify-start gap-y-8 m-4 p-6 bg-white"
      v-for="data in datas"
      :key="data"
    >
      <h1
        class="text-h4 leading-5 text-grey-primary font-bold uppercase"
        if="name == 'tools'"
      >
        Tools
      </h1>

      <div class="flex flex-row gap-x-9">
        <span
          v-for="barlevel in data[name]"
          :key="barlevel"
          class="transform transition duration-200 hover:scale-110 cursor-pointer text-h5 leading-5 text-grey-primary font-semibold"
        >
          {{ barlevel.name }}
        </span>
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
  name: "BarLevelWide",
};
</script>
  
  
  <style scoped>
.barlevel {
  width: var(--width);
}
</style>
        