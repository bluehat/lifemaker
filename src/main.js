import Vue from "vue";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Makers from "./pages/Makers.vue";
import VueRouter from "vue-router";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/makers/:user",
      name: "makers",
      component: Makers,
      props: true
    }
  ]
});

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#application");
