function random() {
    let number = parseInt(Math.random() * 10000)
    return number
}

class Item {
    constructor(text) {
        this.id = random()
        this.text = text
        this.done = false
    }
}

export default Item