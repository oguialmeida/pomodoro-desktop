let count = 1500
let totalCount = 0
let countdownInterval

function pause() {
    clearInterval(countdownInterval)
}

function reset() {
    clearInterval(countdownInterval)
    count = 1500
    document.getElementById("seconds").textContent = "25:00"
    document.getElementById("over").textContent = ""
    document.querySelector("body").style.backgroundColor = "#0085ff"
}

function productiveReset() {
    clearInterval(countdownInterval)
    totalCount = 0
    document.getElementById("productive").textContent = "00:00:00"
}

function formatTime(seconds, formatType = false) {
    const dateObj = new Date(seconds * 1000)
    const hours = dateObj.getUTCHours().toString().padStart(2, '0')
    const minutes = dateObj.getUTCMinutes().toString().padStart(2, '0')
    const secs = dateObj.getUTCSeconds().toString().padStart(2, '0')

    if (formatType) return `${minutes}:${secs}`

    return `${hours}:${minutes}:${secs}`
}

function setScreen() {
    count = 1500
    document.getElementById("over").textContent = "Let's take a break :)"
    document.querySelector("body").style.backgroundColor = "#38BDAE"
}

function counter() {
    let change = false
    let pause = document.getElementById("pause")
    countdownInterval = setInterval(() => {
        count > 0 ? count-- : (setScreen(), count = 300, change = true, pause.disabled = true)

        !change ? totalCount++ : null;

        (change && count === 0) ? (reset(), counter(), pause.disabled = false) : null

        document.getElementById("seconds").textContent = formatTime(count, true)
        document.getElementById("productive").textContent = formatTime(totalCount)

    }, 1)
}

(function startTimer() {
    let buttonStart = document.getElementById("start")
    let buttonPause = document.getElementById("pause")
    let buttonReset = document.getElementById("reset")

    buttonStart.onclick = () => {
        buttonStart.disabled = true
        buttonPause.disabled = false
        buttonReset.disabled = false
        counter()
    }

    buttonPause.onclick = () => {
        buttonStart.disabled = false
        buttonPause.disabled = true
        buttonReset.disabled = false
        pause()
    }

    buttonReset.onclick = () => {
        buttonStart.disabled = false
        buttonPause.disabled = true
        buttonReset.disabled = true
        reset()
        productiveReset()
    }
})()
