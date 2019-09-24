function back() {
    const image = getImageElement();
    const currentImage = Number(image.getAttribute('src').substr(7, 1));
    image.setAttribute('src', `images/${realMod(currentImage - 1, 5)}.jpg`);
}

function next() {
    const image = getImageElement();
    const currentImage = Number(image.getAttribute('src').substr(7, 1));
    image.setAttribute('src', `images/${realMod(currentImage + 1, 5)}.jpg`);
}

function getImageElement() {
    return document.getElementById('display');
}

function realMod(x, n) {
    return (x % n + n) % n
}