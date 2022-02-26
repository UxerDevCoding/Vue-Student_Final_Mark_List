<template>
  <div class="about">
    <h1>This is an about page</h1>
    <MockRouter />
  </div>
</template>

<script>
import MockRouter from "../components/MockRouter.vue";

export default {
  name: "About",
  components: {
    MockRouter,
  },
};
</script>
