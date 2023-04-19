function createGrid(size) {
    let axis = Math.sqrt(size)
    let container = document.getElementById("gridContainer");
    for (i=0;i<size;i++) {
        let pixel = document.createElement("div");
        pixel.setAttribute("class","gridPixel");
        pixel.setAttribute("id",`pixel-${i}`);
        pixel.style.backgroundColor="red";
        container.appendChild(pixel);


    }
    container.style.display = "grid"
    container.style.gridTemplateColumns=`repeat(${axis}, 10px)`

}

createGrid(256)