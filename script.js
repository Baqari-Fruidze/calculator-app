const slider = document.querySelector(".slider");
const h3 = document.querySelector("h3");
console.log(h3);
let sliderValue;
slider.addEventListener("change", () => {
  sliderValue = Number(slider.value);
  if (sliderValue === 3) {
    h3.style.display = "none";
  } else {
    h3.style.display = "block";
  }
});
