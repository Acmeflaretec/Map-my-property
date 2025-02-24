export const formatDescription = (desc: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(desc, "text/html");

  doc.querySelectorAll("iframe").forEach((iframe) => {
    iframe.removeAttribute("style");
    iframe.removeAttribute("width");
    iframe.removeAttribute("height");
    iframe.setAttribute("class", "embed-responsive-item");
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("allowFullScreen", "true");
  });

  return { __html: doc.body.innerHTML };
};
