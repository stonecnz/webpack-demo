import myName from "./myName";
import "./style.css";
import runningMan from "./Stick man running.gif";

function component() {
  const element = document.createElement("div");

  // adding image
  const runningManGif = new Image();
  runningManGif.src = runningMan;

  // Lodash, now imported by this script
  element.innerHTML = myName("Caleb");
  element.classList.add("name");

  return element;
}

document.body.appendChild(component());
