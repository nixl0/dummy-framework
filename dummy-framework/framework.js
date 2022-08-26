let bindings = {}

function bind(element, value) {
    // объекту bindings добавляется элемент, где 
    // в качестве ключевого значения присваивается название класса элемента
    // а в качестве значения присваивается массив из объекта и нового значения

    bindings[element.className] = [element, value]
}

function render(value, callable = null) {
    callable && callable()

    for (let key in bindings) {
        let [element, _] = bindings[key]
        element.innerHTML = value
    }
}

export { bind, render }