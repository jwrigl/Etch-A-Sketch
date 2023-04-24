const colours = [
    '#FF5733',
    '#DAF7A6',
    '#FFC300',
    '#581845',
    '#C70039',
    '#9B59B6',
    '#FF5733',
    '#DAF7A6',
    '#FFC300',
    '#581845',
    '#C70039',
    '#9B59B6',
    '#FF5733',
    '#DAF7A6',
    '#FFC300',
    '#581845',
    '#C70039',
    '#9B59B6',
    '#FF5733',
    '#DAF7A6'
  ];

function createGrid(size) {
    // get square side length
    let axis = Math.sqrt(size)
    let container = document.getElementById("gridContainer");
    //create x amount of pixels depending on size variable
    for (i=0;i<size;i++) {
        let pixel = document.createElement("div");
        pixel.setAttribute("class","gridPixel");
        pixel.setAttribute("id",`pixel-${i}`);
        container.appendChild(pixel);

    }
    container.style.display = "grid";
    container.style.gridTemplateColumns=`repeat(${axis}, 10px)`;

}

function createColourPallet(colours) {
    let container = document.getElementById("palletContainer");
    for (i=0;i<20;i++) {
        let palletColour = document.createElement("div");
        palletColour.setAttribute("class","palletColour");
        palletColour.setAttribute("id",`palletColour-${colours[i]}`);
        palletColour.style.backgroundColor = `${colours[i]}`

        container.appendChild(palletColour);
    }
    container.style.display = "grid" 
    container.style.gridTemplateColumns="repeat(2, 1rem)";
    container.style.gridTemplateRows="repeat(10, 1rem)";

}
function listeners() {
    //default colour
    let pixelColour = "black";
    //selects all pixels with gridPixel class

    // need to implement this functionality
    function changePaintColour() {
        paintColour = alert("Enter hex code of colour")
        return paintColour;

    }
    // need to implement this functionality
    function changePixelColour(change) {
        if (change === true) {
            pixelColour = changePaintColour();
        }
        return pixelColour;

    }
    //put this code into a function with the code to change the paint colour 
    //so they can run together

    //define new style object
    let style = document.createElement('style');
    style.setAttribute("id","selectedColour")
    //writing style, change all elements with coloured class to have color
    style.textContent = `
      .coloured {
        background-color: ${pixelColour};
      }
    `;
    //append style to head, if changing this in the future remove
    document.head.appendChild(style);

    //selects all elements with class gridPixel
    let isDrawing = false;
    pixels = document.querySelectorAll(".gridPixel")
    pixels.forEach(pixel => { 
        pixel.addEventListener('mousedown', () => {
            isDrawing = true;
            pixel.classList.add("hovered")
        });
        pixel.addEventListener('mouseover', () => {
            if (isDrawing === true) {
                pixel.classList.add("coloured")
            pixel.classList.add("hovered")
            };
        });
        pixel.addEventListener('mouseup', () => {
            isDrawing = false;
        });
        pixel.addEventListener("mouseout", () => {
            pixel.classList.remove("hovered")
        })
    document.addEventListener('mouseup', () => {
        isDrawing = false;
    });
        
    });

}


createGrid(256)
createColourPallet(colours)
listeners()