const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.querySelector('button');
let colorSpan = document.querySelector('main span');
let hexColor = '#';
btn.onclick = function () {
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hex.length);
        hexColor += hex[randomIndex];
    }
document.body.style.backgroundColor = hexColor;
colorSpan.innerHTML = hexColor;
hexColor = '#';
}