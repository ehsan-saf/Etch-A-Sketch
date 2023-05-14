const grid = document.querySelector(".grid");
const colorPicker = document.getElementById("colorPicker");
const slider = document.getElementById("sizeSlide");
const sizeText = document.querySelector(".size");

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


