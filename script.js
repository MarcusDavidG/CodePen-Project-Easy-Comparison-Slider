const slider = document.getElementById("slider");
const overlay = document.querySelector(".comparison-overlay");

slider.addEventListener("input", function () {
  const value = slider.value;
  overlay.style.width = `${value}%`;
});
