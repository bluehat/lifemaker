<template>
  <div id="header">
    <div class="inner">
      <h1>
        <router-link :to="{name: 'home'}">lifemaker</router-link>
      </h1>
      <h2>Makers saving lives</h2>
      <a id="github" href="https://github.com/bluehat/lifemaker">View on GitHub</a>
      <div class="navigation">
        <router-link :to="{name: 'manufacturing'}">Parts to make</router-link>
        <router-link :to="{name: 'destinations'}">Places to send them</router-link>
        <router-link :to="{name: 'safety'}">Safety</router-link>
        <router-link :to="{name: 'home'}">About</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
#header {
  background-image: linear-gradient(to top, rgb(55, 55, 55), rgb(33, 33, 33));

  color: white;
}

#header .inner {
  position: relative;
  padding-top: 2.75em;
  padding-bottom: 2.75em;
}

a#github {
  position: absolute;
  right: 0;
  top: 0;
  color: white;
  font-weight: bold;
  background: url("../assets/blacktocat.png") #0090ff no-repeat 95% 50%;
  padding: 0.8em 3em 0.8em 0.7em;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.navigation {
  position: absolute;
  bottom: 0;
  padding-bottom: 0.5em;
}

.navigation a {
  color: white;
  font-weight: bold;
  font-size: 18px;
  padding-right: 0.5em;
}

.navigation a.router-link-exact-active {
  text-decoration: underline;
}

.navigation a:not(:first-child) {
  padding-left: 0.5em;
  border-left: solid 2px #bbb;
}

#header h1 a {
  color: white;
}
#header h1 a:hover {
  text-decoration: none;
}
</style>
