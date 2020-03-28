import Manufacturing from "./pages/Manufacturing.vue";
import Part from "./pages/Part.vue";
import Destination from "./pages/Destination.vue";
import Destinations from "./pages/Destinations.vue";
import Devices from "./pages/Devices.vue";
import Device from "./pages/Device.vue";
import { markdownPages } from "./md/pages";

export default [
  ...markdownPages,
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
