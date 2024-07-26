let seconds = 0;
const display = document.querySelector('#timer')
const start = document.querySelector('#start')
const stopit = document.querySelector('#stop')
const reset = document.querySelector('#reset')

const timer = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

const updateDisplay = ()=>{
    display.innerHTML = timer(seconds);
}

// console.log(timer(1))

const clockStart = (seconds)=>{
    console.log("start");
    interval = setInterval(()=>{
        seconds++;
        updateDisplay()
    }, 1000)
}




start.addEventListener('click', clockStart)
// stopit.addEventListener('click', clockStop)
// reset.addEventListener('click', clockReset)