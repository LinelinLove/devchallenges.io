<template>
  <!-- main div -->
  <div class="flex flex-row">
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
        <BarLevel name="design"></BarLevel>
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
import Project from "@/components/Project.vue";

export default {
  name: "HomeView",
  components: {
    Profile,
    Experiences,
    Hobbies,
    BarLevel,
    Project,
  },
};
</script>
