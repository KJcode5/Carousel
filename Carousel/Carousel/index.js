const images = document.querySelectorAll('#carousel img');
const dots = document.getElementById('dots');
const desc = document.getElementById('desc');

let speed = 9000; // speed for the carousel (measured in m/s)
let index = 0; // starts at the first image
let intervalID; 

// create a function that increases the value of index by 1, every 3 seconds

// creating the 'dots'
images.forEach((image, i) => {
    const span = document.createElement("span"); //create a new span element
    span.className = "dot"; // gives the span element a class of "dot"
    if (i === 0) span.classList.add('active');
    span.addEventListener('click', () => {
        index = i;
        startInterval();
        updateContent();
    });

    dots.appendChild(span);

}) // we want as many dots as there are images so forEach is used to iterate that many times

startInterval();
function startInterval() {
    if (intervalID) clearInterval(intervalID);
    intervalID = setInterval(() => {
        index++;
        if (index === images.length) index = 0; // once the image array reaches the end, it resets to 0
        updateContent();
    }, speed);
}

updateContent();
function updateContent() {
    images.forEach(item => item.classList.remove('active'));
    images[index].classList.add('active');

    const dots = document.querySelectorAll('.dot');
    dots.forEach(item => item.classList.remove('active'))
    dots[index].classList.add('active');

    desc.textContent = images[index].dataset.desc;
}