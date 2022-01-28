import myName from "./myName";
import "./style.css";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = myName("Caleb");
  element.classList.add("name");

  return element;
}

document.body.appendChild(component());
