var isInialWellIndicated = false;

function buttonClicked(button) {
    console.log("Clicked button at (", button.location.row, ",", button.location.col, ")");

    if (!isInialWellIndicated) {
        button.classList.toggle('inial-well-indicated');
        isInialWellIndicated = true;
    }
    else {
        button.classList.toggle('final-well-indicated');
        const popup = document.getElementById('fluid-transfer-amount-request');
        popup.classList.toggle('show');
    }
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
        button.className = 'well-button';

        button.addEventListener('click', function () {
            buttonClicked(button);
        });

        body.appendChild(button);
    }
}

const fluidTransferConfirmButton = document.getElementById('fluid-transfer-amount-confirm');

fluidTransferConfirmButton.addEventListener('click', function () {

    const popup = document.getElementById('fluid-transfer-amount-request');
    popup.classList.toggle('show');

    // todo: add code to move fluids

    var buttons = document.getElementsByClassName('well-button');
    for (let k = 0; k < buttons.length; k++) {
        buttons[k].classList.remove('inial-well-indicated');
        buttons[k].classList.remove('final-well-indicated');
    }
    isInialWellIndicated = false;
});