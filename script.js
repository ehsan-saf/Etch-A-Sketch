const grid = document.querySelector(".grid");
const colorPicker = document.getElementById("colorPicker");
const slider = document.getElementById("sizeSlide");
const sizeText = document.querySelector(".size");
const rainbowButton = document.getElementById("rainbowButton");

const gridDimention = 640;
let color = "#000000";

colorPicker.addEventListener("change", e => {
    color = e.target.value;
});

slider.addEventListener("input", e => {
    const size = e.target.value;
    createSquares(size);
    sizeText.textContent = `${size} X ${size}`;
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



function drawColor(e) {
    if(e.buttons === 1){
        e.target.style.backgroundColor = color;
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