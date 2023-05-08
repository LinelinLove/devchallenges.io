<template>
  <!-- main div -->
  <div class="flex flex-col 
  lg:w-fit lg:mx-auto"
  :class="{ dark: $store.state.darkMode }">

    <div>

      <button
      class="bg-white dark:bg-black text-grey-primary dark:text-grey-light px-3 px-3 py-2 rounded-md shadow-[0_0_30px_2px_rgba(0,0,0,0.1)]
      lg:ml-4"
      @click="$store.commit('toggleDarkMode')"
      >
      <span class="material-icons-outlined">
        {{ $store.state.darkMode ? "light_mode" : "dark_mode" }}
      </span>
    </button>
  </div>

    <div class="flex flex-col mx-auto w-fit lg:flex-row">
      <!-- 1st colomn -->
      <div class="flex flex-col gap-y-4 lg:gap-y-0">
        <Profile />
        <Experiences />
        <Hobbies />
      </div>

      <!-- 2nd column -->
      <div class="flex flex-col gap-y-4">
        <div class="flex flex-col gap-y-0 lg:flex-row lg:gap-y-6">
          <BarLevel name="frontend"></BarLevel>
          <BarLevel name="backend"></BarLevel>
        </div>

        <div>
          <BarLevelWide name="tools"></BarLevelWide>
        </div>

        <Project />
      </div>

    </div>
    <footer>
      <p
        class="text-p font-montserrat pb-6 leading-4 whitespace-nowrap place-self-center mt-[90px] text-center"
      >
        created by
        <span class="underline underline-offset-2 font-bold">
          <a href="https://github.com/LinelinLove"> Chrisline LIN </a>
        </span>
        - devChallenges.io
      </p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from "@/components/Profile.vue";
import Experiences from "@/components/Experiences.vue";
import Hobbies from "@/components/Hobbies.vue";
import BarLevel from "@/components/BarLevel.vue";
import BarLevelWide from "@/components/BarLevelWide.vue";
import Project from "@/components/Project.vue";
import { mapMutations } from 'vuex';
export default {
  name: "HomeView",
  components: {
    Profile,
    Experiences,
    Hobbies,
    BarLevel,
    BarLevelWide,
    Project,
  },

  data() {
    return {
      darkMode: false,
    };
  },
  mounted() {
    this.$store.commit("toggleDarkMode");
  },
  methods: {
...mapMutations(['toggleDarkMode']),
  },

};
</script>

<style>
.dark {
  background-color: #333;
  color: #fff;
}

/* .dark .tag-active {
  background-color: #228bc4;
  color: white;
} */
</style>