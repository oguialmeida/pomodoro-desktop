let count = 1
let totalCount = 1
let countdownInterval

function pause() {
    clearInterval(countdownInterval)
}

function reset() {
    clearInterval(countdownInterval)
    count = 1
    document.getElementById("seconds").textContent = "00:00"
    document.getElementById("over").textContent = ""
    document.querySelector("body").style.backgroundColor = "#0085ff"
}

function productiveReset() {
    clearInterval(countdownInterval)
    totalCount = 1
    document.getElementById("productive").textContent = "00:00:00"
}

function formatTime(seconds, formatType = false) {
    const dateObj = new Date(seconds * 1000)
    const hours = dateObj.getUTCHours().toString().padStart(2, '0')
    const minutes = dateObj.getUTCMinutes().toString().padStart(2, '0')
    const secs = dateObj.getUTCSeconds().toString().padStart(2, '0')

    if (formatType === true) {
        return `${minutes}:${secs}`
    }
    return `${hours}:${minutes}:${secs}`
}

function counter() {
    let countdown = document.getElementById("seconds")
    let over = document.getElementById("over")
    let productive = document.getElementById("productive")
    let background = document.querySelector("body")
    let trocar = false

    countdownInterval = setInterval(() => {
        if (count < 1500) {
            count++

        } else if (count === 1500) {
            count = 1
            over.textContent = "Let's take a break :)"
            background.style.backgroundColor = "#38BDAE"
            trocar = true
        }

        if (trocar === false) {
            totalCount++
        }

        if (trocar && count === 300) {
            reset()
            counter()
        }

        countdown.textContent = formatTime(count, true)
        productive.textContent = formatTime(totalCount)

    }, 10)
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
