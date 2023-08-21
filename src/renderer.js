let count = 1
let countdownInterval 

async function counter() {
    let countdown = document.getElementById("seconds")
    countdownInterval = setInterval(() => {
        countdown.textContent = count
        count++
    }, 1000)
}

function pause() {
    clearInterval(countdownInterval)
}

function stop() {
    clearInterval(countdownInterval)
    count = 1
    document.getElementById("seconds").textContent = 0
}

(function startTimer() {
    let buttonStart = document.getElementById("start")
    let buttonPause = document.getElementById("pause")
    let buttonStop = document.getElementById("stop")

    buttonStart.onclick = () => {
        buttonStart.disabled=true
        buttonPause.disabled=false
        buttonStop.disabled=false
        counter()
    }

    buttonPause.onclick = () => {
        buttonStart.disabled=false
        buttonPause.disabled=true
        buttonStop.disabled=false
        pause()
    }

    buttonStop.onclick = () => {
        buttonStart.disabled=false
        buttonPause.disabled=true
        buttonStop.disabled=true
        stop()
    }
}())
