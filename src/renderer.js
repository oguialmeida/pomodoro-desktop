function sleep(msTime) {
    return new Promise(resolve => setTimeout(resolve, msTime))
}

async function counter() {
    let count = 1
    let countdown = document.getElementById("seconds")
    while(count <= 10) {
        countdown.textContent = count
        await sleep(1000)
        count++
    }
}

counter()
