Odin Project's Etch-a-Sketch-ish
===
The project is a simple game based on the Etch-a-Sketch, a much-beloved toy of my childhood! Alas, this one lacks the joy of playing about with iron filings, but you can't have it all.  

The premise is simple: create a sketchpad which allows you to draw by changing colour under the path of the mouse. 

---
Stage 1: Getting started
---
Read [the instructions](https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project) first, obviously. There's instructions to ship a basic version and then some ideas to jazz it up a bit.

The basic sketchpad only a two key features:
- a grid of divs (created by JS, not hardcoded in the HTML) in a sketchpad container
- event listeners on each div that change colour on mouse over

**HTML & CSS**
Elements & styling needed for the basic sketchpad:

- h1 with name of game & h2 with brief explanation
- sketchpad container for the divs (height & width = 80vh, border around outside, set up as flexbox, with flex-wrap)
- set background colour of page

**Initial setup of sketchpad div grid**
The next step is to set up the basic sketchpad divs by creating and arranging divs in 16 x 16 rows to fill the sketchpad. There are two key aspects to this:

**1. Create divs (JS):**

- grab sketchpad and inner sketchpad divs from DOM
- generate divs function: parameter = row size (default = 16), generate string with correct repeats of div html (row size^2), create div elements using innerHTML and string created in previous step

**2. Grid styling (CSS):**

- sketchpad div class with white background and CSS variable to set width / height (see below)
- calculate width/height of divs
- flexbox on sketchpad container gets divs into rows

**Setting the size of the sketchpad and its inner divs**
I want the size of the sketchpad to fit the size of the screen, so set both the height and width of the sketchpad as 80vh in CSS. As the size of the sketchpad can vary, and functionality to change row size will be added later, the size of the divs can't be hard coded in the CSS. This then needs a way to feed the size in from a JS function to set the CSS style of the div. 

I found [this tutorial on passing variables from JS to CSS](https://eager.io/blog/communicating-between-javascript-and-css-with-css-variables/), which suggested two possible methods:

- **style attribute in JS:**
JS: ``sketchpadDiv.style.height = `${sketchpadHeight / rowSize}px`;``
- **CSS variables**
CSS: ` .sketchpadDiv {height: var(--size);}`
JS `let size = sketchpad.clientHeight / rowSize;` then loop over all inner divs with forEach and add ``item.style.setProperty('--size', `${size}px`)``

I've not used CSS variables, and my inner magpie wanted a shiny new toy to play with, so the CSS variables won out. And the code is more maintainable too, win win. The CSS variable tutorial from [Wes Bos' JS 30 course](https://javascript30.com/) was pretty handy to figure out how to link it all up.

**Add event listeners to the inner divs to change colour**
To track the mouse over the sketchpad, the inner divs need to change colour when the mouse goes over them, and should stay that colour after the mouse moves to a different div. 

To do this:

- create CSS class .mouseover with a different background colour
- write changeColour function to add .mouseover to class list
- in the same forEach used to the the size, add an event listener to run changeColour on mouseover

----
Stage 2: making the basic toy a bit more functional
---
** reset button **
Resetting the colour in the basic version requires refreshing the page - that's no fun. The reset button needs:

- HTML button with class 'reset'
- CSS styling to make it not ugly (well, less ugly at least)
- JS function to change colour to white and event listener to add to inner sketchpad divs

** change pixellation**
16 squares per row makes for some very angular pictures. Let's add an input to add more squares per row. I want to avoid typing into an input box, which gives a couple of options:

- **buttons** with pre-set row sizes
- using a **slider** within defined minimum and maximum row sizes

Let's go with the slider - that's a shiny new toy for me too, and it also takes up less space, and gives an easy way to limit the resolution within reasonable levels. What's needed:
- HTML input with type 'range'. MDN code example: 
``<div>
  <input type="range" id="start" name="volume"
         min="0" max="11">
  <label for="volume">Volume</label>
</div>``
- possibly some CSS styling
- JS function to grab value and update resolution when changed

---

Stage 3: shiny stuff!
---
Odin suggests instead of always changing to the same colour, each pixel gets a random colour. This sounds fun - I like the idea of a single or multicoloured version. 

What's needed: 

- an array of hexcodes that look nice together (as true random would be so very, very ugly)
- adapt changeColour function from adding a class which sets the background colour to randomly grabbing one of the hexcodes and setting that as the background for multi colour
- randomly select a colour for all pixels in the single colour option
- radio buttons to toggle single/multi colour option

---
Fini!
---

I'm quite pleased with this little toy etch-a-sketch. As well as being fun to play with, I got to practice accessing the DOM, thought out the steps before I building, and also learnt a bit about CSS variables. 
