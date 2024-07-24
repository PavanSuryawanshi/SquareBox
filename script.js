const squareArray = document.getElementsByClassName("Squares");
const colors = ["green", "blue", "pink", "red", "violet", "skyblue"];
const defaultColor = "rgb(128, 128, 128)";

for (const square of squareArray) {
    square.addEventListener("mouseenter", () => {
        const randomNum = parseInt(Math.random() * colors.length);

        square.style.background = colors[randomNum];
        square.style.transition = "background-color 0s ease";
        square.style.boxShadow = "0px 0px 10px " + colors[randomNum];
    });

    square.addEventListener("mouseleave", () => {
        square.style.background= defaultColor;
        square.style.transition = "background-color 2s ease";
        square.style.boxShadow = "0px 0px 0px";
    });
}
