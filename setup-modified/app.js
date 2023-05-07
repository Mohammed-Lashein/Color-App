const colors = ["green", "orangered", "rgba(133,122,200)", "#f15025"];
let btn = document.querySelector('button');
let colorSpan = document.querySelector('main span');
btn.onclick = function () {
        let randomIndex = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[randomIndex];
        colorSpan.textContent = colors[randomIndex];
};

