let text = document.querySelector('h1');
let stop = document.querySelector('.stop');

let changeText = setTimeout(() => {
    text.innerHTML = `Hello World`
}, 5000);

stop.addEventListener("click", () => {
    clearTimeout(changeText)
    alert("change text stopped")
})

