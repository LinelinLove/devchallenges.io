<template>
  <div class="font-montserrat font-medium">
    <div
      class="h-[692px] w-fit mt-4 shadow-[0_0_30px_2px_rgba(0,0,0,0.1)] rounded-xl flex flex-col justify-start gap-y-8 p-6 bg-white 
      dark:bg-black
      lg:w-[413px] lg:m-4"
      >

      <img
        :src="'./img/' + profile.image"
        :alt="profile.alt"
        class="w-[366px] rounded-xl self-center select-none"
      />

      <div>
        <h1 class="font-semibold text-h2 leading-8 text-grey-primary 
        dark:text-white">
          {{ profile.name }}
        </h1>
        <h2 class="leading-5 text-h4 text-grey-light">
          {{ profile.job }}
        </h2>
      </div>

      <ul class="text-grey-primary text-h4 leading-5
      dark:text-grey-light">
        <li class="flex flex-row gap-x-5">
          <span class="material-icons-round select-none">mail</span>
          <p>{{ profile.mail }}</p>
        </li>
        <li class="flex flex-row gap-x-5">
          <span class="material-icons-round select-none">phone</span>

          <p>{{ profile.tel }}</p>
        </li>
      </ul>

      <p class="text-grey-light text-h4 leading-5 pr-4">
        {{ profile.description }}
      </p>
    </div>
  </div>
</template>
  
<script>
export default {
  computed: {
    profile() {
      return this.$store.state.datas.data.profile;
    },
  },
  name: "Profile",
};
</script>
  
<style scoped>
</style>
  