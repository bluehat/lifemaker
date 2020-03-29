import Md from "../pages/Md.vue";
import readme from "../../README.md";
import other_resources from "../md/other_resources.md";
import home from "../md/home.md";
import safety from "../md/safety.md";
import about from "../md/about.md"
const markdownBodies = { readme, other_resources, home, safety, about };

const markdownPage = (markdownName, path) => ({
  path: path || `/${markdownName}`,
  name: markdownName,
  component: Md,
  props: { page: markdownName },
  markdown: markdownBodies[markdownName]
});

export const markdownPages = [
  markdownPage("home", "/"),
  markdownPage("readme"),
  markdownPage("other_resources"),
  markdownPage("safety"),
  markdownPage("about"),
];

export function getMarkdownBody(markdownName) {
  return (markdownPages.filter(x => x.name === markdownName)[0] || {}).markdown;
}
