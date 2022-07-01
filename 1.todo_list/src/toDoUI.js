// inlining assets
export const getCreateAddButton = (src) => {
  const button = document.createElement("button");
  button.style.width = "13px";
  button.style.height = "13px";
  button.style.background = `url(${src})`;
  return button;
}

// resource assets
export const getCreateDeleteButton = (src) => {
  const button = document.createElement("button");
  const image = document.createElement("img");
  image.src = src;
  image.style.width = "13px";
  image.style.height = "13px";
  button.appendChild(image);
  return button;
}

// element 생성
export const getCreateElement = (tagName, text = "", id = "") => {
  const element = document.createElement(tagName);
  element.innerText = text;
  element.id = id;
  return element;
}