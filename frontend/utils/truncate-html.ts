export const truncate = (
  content: string,
  maxLength = 255,
  append = "…"
): string => {
  if (!document) {
    return "";
  }
  const container = document.createElement("div");
  container.innerHTML = content;

  let limitReached = false;
  let counted = 0;

  const nodeHandler = (node: any) => {
    if (limitReached) {
      node.remove();
      return;
    }

    const childNodes = Array.from(node.childNodes);
    if (childNodes.length) {
      childNodes.forEach((childNode) => nodeHandler(childNode));
    } else {
      counted += node.textContent.length;
      if (counted >= maxLength) {
        limitReached = true;
        if (counted > maxLength) {
          // eslint-disable-next-line no-param-reassign
          node.textContent = node.textContent.slice(0, -(counted - maxLength));
        }
        // eslint-disable-next-line no-param-reassign
        node.textContent += append;
      }
    }
  };

  nodeHandler(container);

  return container.innerHTML;
};
