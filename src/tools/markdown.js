import { Parser, HtmlRenderer } from "commonmark";
const [parser, renderer] = [new Parser(), new HtmlRenderer()];

export function routerfyMarkdown(element, router) {
  for (const el of element.querySelectorAll("a")) {
    if ((el.getAttribute("href") || "").startsWith("./#"))
      el.onclick = e => {
        e.preventDefault();
        router.push(el.getAttribute("href").replace("./#", ""));
      };
  }
}

export const parseDescriptions = list =>
  list.map(item => ({
    ...item,
    description:
      item.description && renderer.render(parser.parse(item.description))
  }));
