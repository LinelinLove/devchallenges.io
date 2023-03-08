<template>
  <div
    class="h-[692px] w-[413px] border border-grey rounded-xl flex flex-col justify-start gap-y-8 m-4 p-6">
    <img
      src="..\assets\profile.jpg"
      alt=""
      class="w-[366px] border border-grey rounded-xl self-center"
    />

    <div>
      <h1>Chrisline Lin</h1>
      <h2>Front-end developer</h2>
    </div>

    <ul>
      <li class="flex flex-row gap-x-5">
        <span class="material-icons-round">mail</span>
        <p>billy@example.com</p>
      </li>
      <li class="flex flex-row gap-x-5">
        <span class="material-icons-round">phone</span>

        <p>(+603) 546 624 342</p>
      </li>
    </ul>

    <p>
      Self-motivated developer, who is willing to learn and create outstanding
      UI applications.
    </p>
  </div>
</template>
  
<script>
export default {
  name: "Profile",
};
</script>
  
<style scoped>
</style>
  