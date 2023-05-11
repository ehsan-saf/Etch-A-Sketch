const grid = document.querySelector(".grid");

for (let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    div.classList.add("sqr");
    grid.append(div);
}