
import data from "./data.json" assert { type: "json" };
/*--------------------------------------------------------------
# Create Bars
--------------------------------------------------------------*/
let charBarsContainer = document.querySelector(".chart__bars-container");

let values = [];

data.forEach((e) => {
  values.push(e.amount);
  charBarsContainer.innerHTML += `
  <div class="chart__bar">
    <div class="chart__bar--label">$${e.amount}</div>
    <div class="chart__bar--day">${e.day}</div>
  </div>`;
});
/*--------------------------------------------------------------
# create the interactive labels
--------------------------------------------------------------*/
let bars = document.querySelectorAll(".chart__bar");
bars = [...bars];

let maxHeightBar = 150;
let maxValue = Math.max(...values);

bars.forEach((bar) => {
  let newValue = parseFloat(bar.childNodes[1].innerText.slice(1));

  let actualHeight = (newValue * maxHeightBar) / maxValue;

  bar.style.height = `${actualHeight}px`;

  if (newValue == maxValue) {
    bar.style.backgroundColor = '#76b5bc';
  }

  bar.addEventListener("mouseover", (e) => {
    if (e.target.className == 'chart__bar') {
      let labelElement = e.target.childNodes[1];
      labelElement.style.display = "block";
    }
  });
  bar.addEventListener("mouseout", (e) => {
    if (e.target.className == "chart__bar") {
      let labelElement = e.target.childNodes[1];
      labelElement.style.display = "none";
    }
  });
});
