let begun = false
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

class Orb {
    constructor(orbNum, object, x, y) { // put needed to set things before object
        this.orbNum = orbNum
        this.object = object
        this.x = 0
        this.y = 0
    }

    add() { //should only be called once per orb
        const newObject = document.createElement("div")
        newObject.classList.add('Orb')
        newObject.id = this.orbNum
        document.body.appendChild(newObject) 
        this.object = newObject
    }

    move(px) {
        this.x += px
        this.object.style.left = this.x + 'px'
    }
}

let orbAmount = 0

document.getElementById('start').addEventListener('click', () =>  {
    if (!begun) {
        begun = true
        start()     
        console.log('it has begun')
    } else {
        begun = false
    }
})

async function start() {
    orbAmount++
    const ball = new Orb(orbAmount)
    ball.add()
    while (begun) {
        ball.move(1)
        console.log('moved left')
        await sleep(10)
    }
}