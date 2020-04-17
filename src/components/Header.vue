<template>
  <div id="header">
    <div class="inner">
      <h1>
        <router-link :to="{name: 'home'}">lifemaker</router-link>
      </h1>
      <div class="navigation">
        <router-link :to="{name: 'manufacturing'}">Make Supplies</router-link>
        <router-link :to="{name: 'devices'}">Get Supplies</router-link>
        <router-link :to="{name: 'readme'}">Code</router-link>
        <router-link :to="{name: 'safety'}"><strong>Safety</strong></router-link>
        <router-link :to="{name: 'about'}">About</router-link>
      </div>
    </div>
  </div>
</template>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-162148341-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-162148341-1');
  </script>
<script>
export default {
  name: "Header"
};
</script>

<style>
#header {
  background-color: #001f2d;
  color: #f5f8fa;
}

#header .inner {
  position: relative;
  padding-top: 2.75em;
  padding-bottom: 2.75em;
}

.navigation {
  position: absolute;
  bottom: 0;
  right: 0;
  padding-bottom: 0.5em;
}

.navigation a {
  color: #f5f8fa;
  font-weight: bold;
  font-size: 18px;
  padding-right: 0.5em;
}

.navigation a.router-link-exact-active {
  text-decoration: underline;
  color: #f5f8fa;
}

.navigation a:not(:first-child) {
  padding-left: 1.5em;
}

#header h1 a {
  color: #f5f8fa;
}
#header h1 a:hover {
  text-decoration: none;
}
#header strong{
  color: #00aeef;
}
</style>
