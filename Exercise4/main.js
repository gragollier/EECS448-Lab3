function applyColors() {
    const paragraph = document.getElementById('mainParagraph');

    const border = {};
    border.red = document.getElementById('borderRed').value;
    border.green = document.getElementById('borderGreen').value;
    border.blue = document.getElementById('borderBlue').value;
    border.width = document.getElementById('borderWidth').value;

    const background = {};
    background.red = document.getElementById('backgroundRed').value;
    background.green = document.getElementById('backgroundGreen').value;
    background.blue = document.getElementById('backgroundBlue').value;

    paragraph.style.borderWidth = border.width;
    paragraph.style.borderColor = `rgb(${border.red}, ${border.green}, ${border.blue})`;
    paragraph.style.backgroundColor = `rgb(${background.red}, ${background.green}, ${background.blue})`;
}