//selecting elements
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle'); //circle

//getting the circle's value
const perimeter = circle.getAttribute('r') * 2 * Math.PI; //panjang garis lingkaran
circle.setAttribute('stroke-dasharray', perimeter); //membuat nilai stroke-dasharray (akan full karena rumus perimeter)

let duration;

//buat class timer
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
    },
    onComplete() {
        console.log('Timer is completed');
    }
});