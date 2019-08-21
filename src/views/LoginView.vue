<template>
  <div>
    <Login />
    <video autoplay="" loop name="media">
      <source
        src="http://localhost:8080/media/loginVideo.d59ef1d3.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<script>
import Login from "../components/Home/Login";

export default {
  name: "LoginView",
  components: { Login }
};
</script>

<style scoped>
video {
  z-index: 1;
}
</style>
