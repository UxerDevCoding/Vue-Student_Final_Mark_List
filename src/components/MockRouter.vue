<template>
  <div class="mock_router">
    <button
      id="btn_add_mark"
      @click="testing"
      class="btn btn-primary rounded-0"
    >
      Add Mark
    </button>
  </div>
</template>

<script>
export default {
  name: "MockRouter",
  data() {
    return {
      isCorrect: false,
    };
  },
  methods: {
    testing() {
      if (this.isCorrect) {
        this.$router.push("/home");
      }
      if (!this.isCorrect) {
        this.$router.push("/");
      }
    },
  },
};
</script>
