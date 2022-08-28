let bindings = {}

function bind(element, value) {
    // объекту bindings добавляется элемент, где 
    // в качестве ключевого значения присваивается название класса элемента
    // а в качестве значения присваивается массив из объекта и нового значения

    bindings[element.id] = [element, value]
}

function render(value, callable = null) {
    callable && callable()

    for (let key in bindings) {
        // TODO нет поиска
        let [element, _] = bindings[key]
        element.innerHTML = value
    }
}

export { bind, render }