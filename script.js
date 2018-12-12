//setup (with default row size)
const sketchpad = document.querySelector("#sketchpad");

// change colour function
const changeColour = function() {
  this.classList.add('mouseovered')
}

// generate & size sketchpad inner divs
const generateDivs = (rowSize = 16) => {
  sketchpad.innerHTML = `<div class = "sketchpadDiv"></div>`.repeat(`${rowSize*rowSize}`);
  const size = sketchpad.clientHeight / rowSize
  document.querySelectorAll(".sketchpadDiv").forEach(item => {
    item.style.setProperty('--size', `${size}px`);
    item.addEventListener('mouseover', changeColour);
  });
}

// reset button
const resetButton = document.querySelector("button.reset");
const resetColour = function() {
  document.querySelectorAll(".sketchpadDiv").forEach(item => item.classList.remove('mouseovered'))
}
resetButton.addEventListener('click', resetColour);

// slider to change pixellation
const changeRowSizeSlider = document.querySelector("#changeRowSize");
const changeRowSize = function() {
  const rowSize = changeRowSizeSlider.value;
  sketchpad.innerHTML = "";
  generateDivs(rowSize);
}
changeRowSizeSlider.addEventListener('change', changeRowSize);

// initialise!
generateDivs()
