let count = 1
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

function counter() {
    let countdown = document.getElementById("seconds")
    let over = document.getElementById("over")
    let background = document.querySelector("body")
    let trocar = false
    
    countdownInterval = setInterval(() => {
        let dateObj = new Date(count * 1000)
        let minutes = dateObj.getMinutes().toString().padStart(2, '0')
        let seconds = dateObj.getSeconds().toString().padStart(2, '0')

        countdown.textContent = `${minutes}:${seconds}`

        if(count < 1500) {
            count++
        } else if(count === 1500) {
            count = 1
            over.textContent = "Let's take a break :)"
            background.style.backgroundColor = "#38BDAE"
            trocar = true
        }
        if(trocar && count === 300) {
            reset()
            counter()
        }
    }, 1000)
}

(function startTimer() {
    let buttonStart = document.getElementById("start")
    let buttonPause = document.getElementById("pause")
    let buttonReset = document.getElementById("reset")

    buttonStart.onclick = () => {
        buttonStart.disabled=true
        buttonPause.disabled=false
        buttonReset.disabled=false
        counter()
    }

    buttonPause.onclick = () => {
        buttonStart.disabled=false
        buttonPause.disabled=true
        buttonReset.disabled=false
        pause()
    }

    buttonReset.onclick = () => {
        buttonStart.disabled=false
        buttonPause.disabled=true
        buttonReset.disabled=true
        reset()
    }
}())
