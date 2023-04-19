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
    container.style.display = "grid"
    container.style.gridTemplateColumns=`repeat(${axis}, 10px)`

}


function listeners() {
    //default colour
    let pixelColour = "black"
    //selects all pixels with gridPixel class


    function changePaintColour() {
        paintColour = alert("Enter hex code of colour")

    }
    function changePixelColour() {
        this.style.backgroundColor = pixelColour;

    }
    //selects all elements with class gridPixel
    pixels = document.querySelectorAll(".gridPixel")
    pixels.forEach(pixel => { 
        pixel.addEventListener('click', changePixelColour);
        
    });

}
createGrid(256)
listeners()