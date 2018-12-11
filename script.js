//setup (with default row size)
const sketchpad = document.querySelector("#sketchpad");

// generate & size sketchpad inner divs
const generateDivs = (rowSize = 16) => {
  // let text = `<div class = "sketchpadDiv"></div>`.repeat(16*16);
  sketchpad.innerHTML = `<div class = "sketchpadDiv"></div>`.repeat(`${rowSize*rowSize}`);
  const size = sketchpad.clientHeight / rowSize
  const sketchpadDivs = Array.from(document.querySelectorAll(".sketchpadDiv"));
  sketchpadDivs.forEach(item => {
    item.style.setProperty('--size', `${size}px`);
  });
}

generateDivs()
