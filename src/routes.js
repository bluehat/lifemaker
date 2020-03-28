import Home from "./pages/Home.vue";
import Makers from "./pages/Makers.vue";
import Manufacturing from "./pages/Manufacturing.vue";
import Readme from "./pages/Readme.vue";
import Features from "./pages/Features.vue"
import Other_resources from "./pages/Other_resources.vue"
import Safety from "./pages/Safety.vue"

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
  },
  {
    path: "/readme",
    name: "readme",
    component: Readme
  },
  {
    path: "/other_resources",
    name: "other_resources",
    component: Other_resources
  },
  {
    path: "/features",
    name: "features",
    component: Features
  },
  {
    path: "/safety",
    name: "safety",
    component: Safety
  }
];
