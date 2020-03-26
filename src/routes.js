import Home from "./pages/Home.vue";
import Makers from "./pages/Makers.vue";
import Manufacturing from "./pages/Manufacturing.vue";

export default [
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
  },
  {
    path: "/manufacturing",
    name: "manufacturing",
    component: Manufacturing
  }
];
