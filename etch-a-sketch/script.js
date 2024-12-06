const container = document.getElementById("container");
const resetButton = document.getElementById("resetGrid");

function createGrid(size) {
    container.innerHTML = ""; //clear existing grid
    const squareSize = 700 / size; //calculate size of each square
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = RandomColor(); //change color on hover
        });
        container.appendChild(square);
    }
}

function RandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

resetButton.addEventListener("click", () => {
    let size = parseInt(prompt("Enter grid size (max 100):"));
    if (size && size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Invalid size. Please enter a number between 1 and 100.");
    }
});

createGrid(16);