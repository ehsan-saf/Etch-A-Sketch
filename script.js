const grid = document.querySelector(".grid");

for (let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    div.classList.add("sqr");
    div.addEventListener("mouseover", e => {
        if(e.buttons === 1){
            e.target.style.backgroundColor = "red";
        }   
    });
    grid.append(div);
}