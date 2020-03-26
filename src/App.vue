<template>
  <div id="app">
    <Header></Header>
    <router-view class="inner content"></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: { Header }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
