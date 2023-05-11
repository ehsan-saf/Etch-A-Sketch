const grid = document.querySelector(".grid");
const gridDimention = 640;

createSquares(20);

function createSquares(quantity) {
    const size = (gridDimention / quantity) + "px";
    for (let i = 1; i <= quantity ** 2; i++) {
        const div = document.createElement("div");
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
        e.target.style.backgroundColor = "red";
    }   
}


