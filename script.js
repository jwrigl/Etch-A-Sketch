function createGrid(size) {
    let axis = Math.sqrt(size)
    let container = document.getElementById("gridContainer");
    for (i=1;i<size;i++) {
        let pixel = document.createElement("div");
        pixel.setAttribute("class","gridPixel");
        container.appendChild(pixel);


    }
    container.style.display = "grid"
    container.style.gridTemplateColumns=`repeat(${axis}, 1fr)`

}

createGrid(256)