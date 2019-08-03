<template>
  <div class="loginArea">
    Email <input v-model="email" type="text" name="email" /><br />
    Password <input v-model="password" type="password" name="password" />
    <span class="loginBtn" @click="goLogin()">로그인</span>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
export default {
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    /** 로그인 요청 */
    goLogin: async function() {
      const reqObj = {
        email: this.email,
        password: this.password
      };

      let loginRes = await this.$reservationLib.loginAuth(reqObj);
      if (loginRes) {
        localStorage.setItem("username", loginRes.username);
        localStorage.setItem("token", loginRes.token);
        axios.defaults.headers.common["authorization"] = `Bearer ${
          loginRes.token
        }`;
        router.push("/main");
      }
    }
  }
};
</script>

<style></style>
