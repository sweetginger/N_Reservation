<template>
  <div>
    <Login />
    <video autoplay loop name="media">
      <source src="../assets/loginVideo.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
import Login from "../components/Home/Login";

export default {
  name: "LoginView",
  components: { Login },
  props: {
    headerOn: {
      type: Boolean,
      default: false
    }
  },
  created: function() {
    this.$emit("setHeaderOn", false);
  }
};
</script>

<style scoped>
video {
  z-index: 1;
}
</style>
