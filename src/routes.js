import Home from "./pages/Home.vue";
import Makers from "./pages/Makers.vue";
import Manufacturing from "./pages/Manufacturing.vue";
import Readme from "./pages/Readme.vue";
import Other_resources from "./pages/Other_resources.vue";
import Part from "./pages/Part.vue";
import Destination from "./pages/Destination.vue";
import Destinations from "./pages/Destinations.vue";

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
    path: "/parts/:partKey",
    name: "part",
    component: Part,
    props: true
  },
  {
    path: "/destinations/:destinationKey",
    name: "destination",
    component: Destination,
    props: true
  },
  {
    path: "/destinations",
    name: "destinations",
    component: Destinations
  }
];
