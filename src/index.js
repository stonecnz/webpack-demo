import myName from "./myName";

function component() {
  const element = document.createElement("div");

  element.innerHTML = myName("Caleb");
  return element;
}

document.body.appendChild(component());
