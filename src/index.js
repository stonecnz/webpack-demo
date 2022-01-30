import myName from "./myName";
import "./style.css";
import runningMan from "./Stick man running.gif";
import Data from "./data.xml";
import Notes from "./data.csv";

function component() {
  const element = document.createElement("div");

  // adding image
  const runningManGif = new Image();
  runningManGif.src = runningMan;

  // Lodash, now imported by this script
  element.innerHTML = myName("Caleb");
  element.classList.add("name");

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
