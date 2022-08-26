import Framework from './framework.js'

const framework = new Framework()

const spanCounter = document.querySelector('.span_counter')
const btnPlus = document.querySelector('.btn_plus')
const btnMinus = document.querySelector('.btn_minus')
const btnReset = document.querySelector('.btn_reset')

let counter = 10

function increment(number) {
    return number += 1
}

function decrement(number) {
    return number -= 1
}

function reset() {
    return 0
}

framework.setBind(spanCounter, counter)

// обновляет забайнденные элементы согласно присвоенным им значеням выше
window.addEventListener('load', () => {
    framework.render(counter)
})

btnPlus.addEventListener('click', () => {
    counter = increment(counter)
    framework.render(counter)
})

btnMinus.addEventListener('click', () => {
    counter = decrement(counter)
    framework.render(counter)
})

btnReset.addEventListener('click', () => {
    counter = reset()
    framework.render(counter)
})