import { bind, render } from './framework.js'

const spanCounter = document.getElementById('span_counter')
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

bind(spanCounter, counter)

// обновляет забайнденные элементы согласно присвоенным им значеням выше
window.addEventListener('DOMContentLoaded', () => {
    render(counter)
})

btnPlus.addEventListener('click', () => {
    counter = increment(counter)
    render(counter)
})

btnMinus.addEventListener('click', () => {
    counter = decrement(counter)
    render(counter)
})

btnReset.addEventListener('click', () => {
    counter = reset()
    render(counter)
})
