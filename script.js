//setup (with default row size)
const sketchpad = document.querySelector("#sketchpad");

// generate sketchpad divs
const generateDivs = (rowSize = 16) => {
  let text = `<div class = "sketchpadDiv"></div>`.repeat(`${rowSize}`);
  sketchpad.innerHTML = text;
}

generateDivs()
