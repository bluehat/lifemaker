import Manufacturing from "./pages/Manufacturing.vue";
import Md from "./pages/Md.vue";
import Part from "./pages/Part.vue";
import Destination from "./pages/Destination.vue";
import Destinations from "./pages/Destinations.vue";

const staticPages = [
  {
    path: "/",
    name: "home",
    component: Md,
    props: { page: "home" }
  },
  {
    path: "/readme",
    name: "readme",
    component: Md,
    props: { page: "readme" }
  },
  {
    path: "/other_resources",
    name: "other_resources",
    component: Md,
    props: { page: "other_resources" }
  },
  {
    path: "/safety",
    name: "safety",
    component: Md,
    props: { page: "safety" }
  }
];

export default [
  ...staticPages,
  {
    path: "/manufacturing",
    name: "manufacturing",
    component: Manufacturing
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
