function buttonClicked(location) {
    console.log("Clicked button at (", location.row,",", location.col, ")");
};

const body = document.getElementById('body');

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 12; j++) {

        if (i != 0 && j == 0) {
            const lineBreak = document.createElement("br");
            body.appendChild(lineBreak);
        }

        const button = document.createElement("button");
        button.location = { row: i, col: j };

        button.addEventListener('click', function () {
            buttonClicked(button.location);
        });

        body.appendChild(button);
    }
}