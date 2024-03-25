const slider = document.querySelector(".slider");
const body = document.body;
slider.addEventListener("change", () => {
  sliderValue = Number(slider.value);
  if (sliderValue === 3) {
    document.body.classList.add("dark");
  }
  if (sliderValue === 2) {
    document.body.classList.remove("dark");
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
const display = document.querySelector(".display");
const container = document.querySelector(".main-container ");

let firstHalf;
let secondHalf;

container.addEventListener("click", (event) => {
  if (event.target.textContent.length > 5) return;
  display.textContent = display.textContent + event.target.textContent;
  if (event.target.textContent === "+") {
    firstHalf = display.textContent.slice(0, display.textContent.length - 1);
    // display.textContent = "";
    // display.textContent = display.textContent + event.target.textContent;
  }
});
