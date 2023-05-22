const grid = document.querySelector(".grid");
const colorPicker = document.getElementById("colorPicker");
const slider = document.getElementById("sizeSlide");
const sizeText = document.querySelector(".size");
const rainbowButton = document.getElementById("rainbowButton");
const clearButton = document.getElementById("clearButton");

const gridDimention = 640;
let color = "rgba(0, 0, 0, 0.1)";

// Settings events -------------------

colorPicker.addEventListener("change", e => {
    const pickedColor = e.target.value;
    if(pickedColor == "#000000"){
        color = "rgba(0, 0, 0, 0.1)";
    }
    else{
        color = pickedColor;
    }
    
});

slider.addEventListener("input", e => {
    const size = e.target.value;
    createSquares(size);
    sizeText.textContent = `${size} X ${size}`;
    rainbowButton.classList.remove("active");
});

rainbowButton.addEventListener("click", () => {
    rainbowButton.classList.toggle("active");
    const squares = document.querySelectorAll(".sqr");
    if(rainbowButton.classList.contains("active")){
        squares.forEach(sqr =>
             {
                sqr.onmouseover = drawRandomColor;
             });
    }
    else {
        squares.forEach(sqr => {
                sqr.onmouseover = drawColor;
        });
    }
});

clearButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".sqr");
    squares.forEach(sqr => sqr.style.backgroundColor = "white");
});

// Settings events -------------------


createSquares(20);

function createSquares(quantity) {
    grid.innerHTML = "";
    const size = (gridDimention / quantity) + "px";
    for (let i = 1; i <= quantity ** 2; i++) {
        const div = document.createElement("div");
        div.classList.add("sqr");
        div.style.width = size;
        div.style.height = size;
        div.addEventListener("mouseover", drawColor);
        div.addEventListener("mousedown", e => {
            e.preventDefault();
        });
        grid.append(div);
    }
}

// Drawing color changer functions ---------------

function drawColor(e) {
    if(e.buttons === 1){
       const sqrColor = e.target.style.backgroundColor;
       const colorObject = tinycolor(sqrColor);
       const rgb = colorObject.toRgb()
       if(color === "rgba(0, 0, 0, 0.1)" && sqrColor.length !== 0 
           && Number(rgb.r + rgb.g + rgb.b) == 0){
            const alphaValue = rgb.a;
            colorObject.setAlpha(alphaValue + 0.1);
            e.target.style.backgroundColor = colorObject.toRgbString();
       }
       else {
          e.target.style.backgroundColor = color;
       }
    }   
}

function drawRandomColor(e) {
    if(e.buttons === 1){
    const r = Math.floor(Math.random() * 257);
    const g = Math.floor(Math.random() * 257);
    const b = Math.floor(Math.random() * 257);
    randomColor = `rgb(${r},${g},${b})`;
    e.target.style.backgroundColor = randomColor;
    }
}

// Drawing color changer functions ---------------