// generate & size sketchpad inner divs
const sketchpad = document.querySelector("#sketchpad");
const generateDivs = (rowSize = 16) => {
  sketchpad.innerHTML = `<div class = "sketchpadDiv"></div>`.repeat(`${rowSize*rowSize}`);
  const size = sketchpad.clientHeight / rowSize
  document.querySelectorAll(".sketchpadDiv").forEach(item => {
    item.style.setProperty('--size', `${size}px`);
    item.addEventListener('mouseover', changePixelColour);
  });
}

// change colour function
const singleColour = document.querySelector('#single');
const multiColour = document.querySelector('#multi');
const possColours = ['#D5DDE7', '#CCD3D8', '#CFF0E0', '#D9F0EB', '#EFD9EF', '#E4D5F0', '#DCD0E6', '#D0E1F4', '#D6DDF4', '#F4D8D8'];
let currentColour = '#D5DDE7';

const singleColourSetting = function() {
    currentColour = possColours[Math.floor(Math.random()*10)]
}
singleColour.addEventListener('click', singleColourSetting);

const changePixelColour = function() {
  singleColour.checked ? this.style.backgroundColor = currentColour : this.style.backgroundColor = possColours[Math.floor(Math.random()*10)];
}

// reset colour button
const resetButton = document.querySelector("button.reset");
const resetColour = function() {
  document.querySelectorAll(".sketchpadDiv").forEach(item => item.style.backgroundColor = '#ffffff')
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
