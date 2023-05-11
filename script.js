const grid = document.querySelector(".grid");

for (let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    div.classList.add("sqr");
    div.addEventListener("mouseover", drawColor);
    grid.append(div);
}

function drawColor(e) {
    if(e.buttons === 1){
        e.target.style.backgroundColor = "red";
    }   
}