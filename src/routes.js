import Manufacturing from "./pages/Manufacturing.vue";
import Md from "./pages/Md.vue";
import Part from "./pages/Part.vue";
import Destination from "./pages/Destination.vue";
import Destinations from "./pages/Destinations.vue";
import Devices from "./pages/Devices.vue";
import Device from "./pages/Device.vue";

const markdownPage = (markdown, path) => ({
  path: path || `/${markdown}`,
  name: markdown,
  component: Md,
  props: { page: markdown }
});

export default [
  markdownPage("home", "/"),
  markdownPage("readme"),
  markdownPage("other_resources"),
  markdownPage("safety"),
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
    path: "/devices/:deviceKey",
    name: "device",
    component: Device,
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
  },
  {
    path: "/devices",
    name: "devices",
    component: Devices
  }
];
