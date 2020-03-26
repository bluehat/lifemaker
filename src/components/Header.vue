<template>
  <div id="header">
    <div class="inner">
      <h1>lifemaker</h1>
      <h2>Makers saving lives</h2>
      <a id="github" href="https://github.com/bluehat/lifemaker">View on GitHub</a>
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
</style>
