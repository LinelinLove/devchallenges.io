<template>
  <div class="font-montserrat font-medium">
    <div
      class="w-full shadow-[0_0_30px_2px_rgba(0,0,0,0.1)] rounded-xl flex flex-col justify-start gap-y-8 p-6 bg-white 
      dark:bg-black
      lg:w-[862px] lg:m-4"
      v-for="data in datas"
      :key="data"
    >
      <h1
        class="text-h4 leading-5 text-grey-primary font-bold uppercase"
        if="name == 'tools'"
      >
        Tools
      </h1>

      <div class="flex flex-col gap-y-5 lg:gap-x-9">
        <div
          v-for="barlevel in data[name]"
          :key="barlevel"
          class="text-h5 leading-5 text-grey-primary font-semibold flex flex-row justify-between w-full items-center gap-x-4"
        >
          <p
            class="transform transition duration-200 hover:scale-110 cursor-pointer"
          >
            {{ barlevel.name }}
          </p>
          <div class="w-32 lg:w-60 h-2.5 bg-white rounded-xl
          dark:bg-black"></div>
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
  name: "BarLevelWide",
};
</script>
  
  
  <style scoped>
.barlevel {
  width: var(--width);
}
</style>
        