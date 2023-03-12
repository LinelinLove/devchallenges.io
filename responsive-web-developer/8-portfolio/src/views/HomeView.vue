<template>
  <div class="flex flex-row">
    <div>
      <Profile />
      <Experiences />
      <Hobbies />
    </div>

    <div class="flex flex-row">
      <BarLevel name="frontend"></BarLevel>
      <BarLevel name="design"></BarLevel>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from "@/components/Profile.vue";
import Experiences from "@/components/Experiences.vue";
import Hobbies from "@/components/Hobbies.vue";
import BarLevel from "@/components/BarLevel.vue";

export default {
  name: "HomeView",
  components: {
    Profile,
    Experiences,
    Hobbies,
    BarLevel,
  },
};
</script>
