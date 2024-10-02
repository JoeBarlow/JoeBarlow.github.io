function setFontSize() {
    const viewportWidth = window.innerWidth;

    var fontSize = 14; //default font size

    if (viewportWidth <= 600) {
        fontSize = 4;
    } else if (viewportWidth <= 800) {
        fontSize = 6;
    } else if (viewportWidth <= 1200) {
        fontSize = 8;
    } else if (viewportWidth <= 1920) {
        fontSize = 12;
    }

    document.documentElement.style.fontSize = fontSize + 'px';
}

setFontSize();

window.addEventListener('resize', setFontSize);