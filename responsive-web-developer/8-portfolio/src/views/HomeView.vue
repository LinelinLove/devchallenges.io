<template>
  <!-- main div -->
  <div class="flex flex-row mr-auto ml-auto w-fit">
    <!-- 1st colomn -->
    <div>
      <Profile />
      <Experiences />
      <Hobbies />
    </div>
    
    <!-- 2nd column -->
    <div class="flex flex-col">
      <div class="flex flex-row">
        <BarLevel name="frontend"></BarLevel>
        <BarLevel name="backend"></BarLevel>
      </div>
      <div>
        <BarLevelWide name="tools"></BarLevelWide>
      </div>
      <Project />
    </div>
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
};
</script>
