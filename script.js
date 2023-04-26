var brushColour = "black"
var rainbowMode = false;
var rainbowCounter = 0;
var randomMode = false;

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

  const rainbow = ["red","orange","yellow","green","blue","indigo","violet"]

  function generateRandomHex() {
    let hexValue = "";
    let colourHexValue = "#"
    for (i=0; i < 3; i++) {
        let hexValue = Math.floor(Math.random()*256)
        hexValue = hexValue.toString(16)
        colourHexValue = colourHexValue+hexValue
    }
    return colourHexValue;
    
  }

function ifRainbow() {
    if (rainbowMode === true) {
        brushColour = rainbow[rainbowCounter]
        rainbowCounter++
        if (rainbowCounter>6) {
            rainbowCounter=0;
        }
    }
}

function ifRandom() {
    if (randomMode === true) {
        brushColour = generateRandomHex()
    }

}

function createGrid(size) {
    // get square side length
    let axis = Math.sqrt(size)
    let container = document.getElementById("gridContainer");
    //create x amount of pixels depending on size variable
    for (i=0;i<size;i++) {
        let pixel = document.createElement("div");
        pixel.setAttribute("class","gridPixel");
        pixel.setAttribute("id",`pixel-${i}`);
        pixel.setAttribute("data-lastColour","black")
        container.appendChild(pixel);

    }
    container.style.display = "grid";
    container.style.gridTemplateColumns=`repeat(${axis}, 10px)`;
};

function createColourPallet(colours) {
    let container = document.getElementById("palletContainer");
    for (i=0;i<20;i++) {
        let palletColour = document.createElement("div");
        palletColour.setAttribute("class","palletColour");
        palletColour.setAttribute("id",`palletColour-${colours[i]}`);
        palletColour.setAttribute("data-colour",colours[i])
        palletColour.style.backgroundColor = `${colours[i]}`

        container.appendChild(palletColour);
    }
    container.style.display = "grid" 
    container.style.gridTemplateColumns="repeat(10, 1rem)";
    container.style.gridTemplateRows="repeat(2, 1rem)";

}



function listeners() {
    //default colour
    //put this code into a function with the code to change the paint colour 

    //selects all elements with class gridPixel
    let isDrawing = false;
    pixels = document.querySelectorAll(".gridPixel")
    pixels.forEach(pixel => { 
        pixel.addEventListener('mousedown', () => {
            isDrawing = true;
            pixel.setAttribute("data-clicked",true)
            ifRainbow()
            ifRandom()
            pixel.style.backgroundColor=brushColour
        });
        //if mouse held 
        pixel.addEventListener('mouseover', () => {
            if (isDrawing === true) {
                pixel.setAttribute("data-lastColour",pixel.style.backgroundColor)
                ifRainbow()
                ifRandom()
                pixel.style.backgroundColor = brushColour
            }
            //if mouse not held 
            else {
                pixel.classList.add("hovered")
                pixel.setAttribute("data-lastColour",pixel.style.backgroundColor)
                pixel.style.backgroundColor = "grey"
            }
        });
        pixel.addEventListener('mouseup', () => {
            isDrawing = false;
        });
        pixel.addEventListener("mouseout", () => {
            if (pixel.classList.contains("hovered")){
                pixel.classList.remove("hovered");
                if (pixel.getAttribute("data-clicked") !== "true") {
                    pixel.style.backgroundColor = pixel.getAttribute("data-lastColour");
                } else {
                    pixel.style.backgroundColor = brushColour;
                }
            }
        });
    });
    document.addEventListener('mouseup', () => {
        isDrawing = false;
    });
}


function colourPalletListener() {
    colourPallet = document.querySelectorAll(".palletColour");
    colourPallet.forEach(pallet => {
        pallet.addEventListener("click", () => {
            brushColour = pallet.getAttribute("data-colour")
        })
    })
 
}


function clearImage() {
    choice = confirm("Are you sure you wish to clear your work?")
    pixels = document.querySelectorAll(".gridPixel")
    if (choice === true) {
        pixels.forEach( pixel => {
            pixel.style.backgroundColor="white";
        })
    } 
}

function disableButtons(buttonId) {
    buttons = document.querySelectorAll(".buttons")
    buttons.forEach(btn => {
        //if buttons already disabled (i.e. disableButtons has been run previously, undisable)
        if (btn.disabled === true) {
            enableButtons()
            return;
        }
        if (btn.id !== buttonId && btn.id !== "clearBtn"){
            btn.disabled = true;
        }

        console.log(btn.id)
        console.log(buttonId)


    });
}

function enableButtons(){
    buttons = document.querySelectorAll(".buttons")
    buttons.forEach(btn => {
        btn.disabled = false;
    });
}

function rainbowBtnPress() {
    rainbowMode=!rainbowMode
    disableButtons("rainbow")
}

function randomBtnPress() {
    randomMode=!randomMode
    disableButtons("random")
}
createGrid(256)
createColourPallet(colours)
listeners()
colourPalletListener()