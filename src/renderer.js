function sleep(msTime) {
    return new Promise(resolve => setTimeout(resolve, msTime))
}

async function counter(count) {
    let countdown = document.getElementById("seconds")
    while(count <= 25) {
        countdown.textContent = count
        await sleep(1000)
        count++
    }
}

(function startTimer() {
    let count = 1
    let buttonStart = document.getElementById("start")
    buttonStart.onclick = () => {
        counter(count)
    }
}())
