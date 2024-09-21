let timer;
let isRunning = false;
let timeRemaining = 25 * 60; // 25 minutes in seconds

const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

// Add audio element for alarm sound
const alarmSound = new Audio('alarm.mp3');

function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            timeRemaining--;
            updateDisplay();
            if (timeRemaining <= 0) {
                clearInterval(timer);
                isRunning = false;
                alarmSound.play(); // Play the alarm sound
                alert('Time is up!'); // Show a pop-up alert
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timer);
    timeRemaining = 25 * 60; // Reset to 25 minutes
    isRunning = false;
    updateDisplay();
}

// Event listeners
startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

// Initial display update
updateDisplay();
