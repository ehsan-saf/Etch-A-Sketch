const grid = document.querySelector(".grid");
const gridDimention = 640;

createSquares(50);

function createSquares(quantity) {
    const size = (gridDimention / quantity) + "px";
    for (let i = 1; i <= quantity ** 2; i++) {
        const div = document.createElement("div");
        div.style.width = size;
        div.style.height = size;
        div.addEventListener("mouseover", drawColor);
        grid.append(div);
    }
}

function drawColor(e) {
    console.log("entered");
    if(e.buttons === 1){
        e.target.style.backgroundColor = "red";
    }   
}


