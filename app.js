// Variables to store time
let hours = 0, minutes = 0, seconds = 0;
let timerInterval = null;
let isRunning = false;

// Get the display and buttons
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

// Start the timer
startBtn.addEventListener('click', () => {
    if (!isRunning) {
        timerInterval = setInterval(updateTime, 1000); // Updates every second
        isRunning = true;
    }
});

// Pause the timer
pauseBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
});

// Reset the timer
resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    display.innerHTML = "00:00:00";
    isRunning = false;
});

// Function to update time every second
function updateTime() {
    seconds++;
    
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    
    // Format the time to always show two digits
    let formattedHours = hours < 10 ? `0${hours}` : hours;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    // Update the display
    display.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
