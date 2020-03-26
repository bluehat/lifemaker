export function routerfyMarkdown(element, router) {
  for (const el of element.querySelectorAll("a")) {
    if ((el.getAttribute("href") || "").startsWith("./#"))
      el.onclick = e => {
        e.preventDefault();
        router.push(el.getAttribute("href").replace("./#", ""));
      };
  }
}
