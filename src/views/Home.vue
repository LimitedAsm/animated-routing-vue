<template>
  <div class="container">
    <nav class="links">
      <router-link to="firstLink" class="link">First link</router-link>
      <router-link to="secondLink" class="link">Second link</router-link>
      <router-link to="thirdLink" class="link">Third link</router-link>
      <router-link to="fourthLink" class="link">Fourth link</router-link>
    </nav>

    <div
      class="layout"
      :style="{
        'margin-left': marginLeft,
        'margin-top': marginTop,
      }"
    >
      <div class="first-page page">First page</div>
      <div class="second-page page">Second page</div>
      <div class="third-page page">Third page</div>
      <div class="fourth-page page">Fourth page</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    marginLeft: {
      default: "0",
      type: String,
    },
    marginTop: {
      default: "0",
      type: String,
    },
  },
};
</script>

<style scoped>
.container {
  overflow: hidden;
  position: absolute;
  width: 100vw;
  height: 100vh;
}
.layout {
  background-image: url(../assets/bg.jpg);
  background-repeat: repeat;
  width: 200vw;
  height: 200vh;
  transition: margin 1s ease;
  position: relative;
}
.links {
  display: flex;
  flex-direction: column;
  z-index: 99;
  position: fixed;
}
.link {
  color: black;
  margin: 20px;
}
.page {
  position: absolute;
  font-size: 80px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.first-page {
  left: 0;
  top: 0;
}
.second-page {
  left: 100vw;
  top: 0;
}
.third-page {
  left: 0;
  top: 100vh;
}
.fourth-page {
  left: 100vw;
  top: 100vh;
}
</style>
