// Framework

let bindings = {}

function bind(element, value) {
    // объекту bindings добавляю элемент, где 
    // в качестве ключевого значения присваивается название класса элемента
    // а в качестве значения присваивается массив из объекта и значения
    bindings[element.className] = [element, value]
}

function render(value, callable = null) {
    callable && callable()

    for (className in bindings) {
        let [element, _] = bindings[className]
        element.innerHTML = value
    }
}

// UI

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

bind(spanCounter, counter)

// обновляет забайнденные элементы согласно присвоенным им значеням выше
window.addEventListener('load', () => {
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