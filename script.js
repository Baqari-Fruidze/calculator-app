const slider = document.querySelector(".slider");
const body = document.body;
slider.addEventListener("change", () => {
  sliderValue = Number(slider.value);
  if (sliderValue === 1) {
    document.body.classList.add("dark");
  }
  if (sliderValue === 2) {
    document.body.classList.remove("dark");
    document.body.classList.remove("purple");
  }
  if (sliderValue === 3) {
    document.body.classList.add("purple");
  }
});

const nums = Array.from(document.querySelectorAll(".num"));
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".mult");
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");
const reset = document.querySelector("reset");
const Delete = document.querySelector(".delete");
const container = document.querySelector(".main-container ");
const display = document.querySelector(".display");
const secondaryDisplay = document.querySelector(".secondary-dis");

let firstHalf;
let secondHalf;

container.addEventListener("click", (event) => {
  if (event.target.textContent.length > 5) return;
  if (event.target.textContent === "Del") {
    display.textContent = display.textContent.slice(
      0,
      display.textContent.length - 1
    );
    return;
  }
  display.textContent = display.textContent + event.target.textContent;
  if (event.target.textContent === "+") {
    firstHalf = display.textContent.slice(0, display.textContent.length - 1);
    secondaryDisplay.textContent = display.textContent;
    display.textContent = "";
  }
  if (event.target.textContent === "=") {
    secondHalf = display.textContent.slice(0, display.textContent.length - 1);
    if (secondaryDisplay.textContent.includes("+")) {
      display.textContent = Number(firstHalf) + Number(secondHalf);
    }
    if (secondaryDisplay.textContent.includes("-")) {
      display.textContent = Number(firstHalf) - Number(secondHalf);
    }
    if (secondaryDisplay.textContent.includes("*")) {
      display.textContent = Number(firstHalf) * Number(secondHalf);
    }
    if (secondaryDisplay.textContent.includes("/")) {
      display.textContent = Number(firstHalf) / Number(secondHalf);
    }
  }
  if (event.target.textContent === "-") {
    firstHalf = display.textContent.slice(0, display.textContent.length - 1);
    secondaryDisplay.textContent = display.textContent;
    display.textContent = "";
  }
  if (event.target.textContent === "*") {
    firstHalf = display.textContent.slice(0, display.textContent.length - 1);
    secondaryDisplay.textContent = display.textContent;
    display.textContent = "";
  }
  if (event.target.textContent === "/") {
    firstHalf = display.textContent.slice(0, display.textContent.length - 1);
    secondaryDisplay.textContent = display.textContent;
    display.textContent = "";
  }
  if (event.target.textContent === "reset") {
    firstHalf = 0;
    secondHalf = 0;
    secondaryDisplay.textContent = "";
    display.textContent = "";
  }
  if (display.textContent.length > 13) {
    alert("are you sure? it is too much");
  }
});
