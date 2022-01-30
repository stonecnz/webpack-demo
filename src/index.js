import myName from "./myName";
import "./style.css";
import runningMan from "./Stick man running.gif";
import Data from "./data.xml";
import Notes from "./data.csv";
import toml from "./data.toml";
import yaml from "./data.yaml";
import json from "./data.json5";

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

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
