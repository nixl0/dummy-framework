export default class Framework {

    constructor(bindings = []) {
        this.bindings = bindings
    }

    get getBind() {
        return this.bindings
    }

    setBind(element, value) {
        // объекту bindings добавляется элемент, где
        // в качестве ключевого значения присваивается название класса элемента
        // а в качестве значения присваивается массив из объекта и нового значения

        this.bindings[element.className] = [element, value]
    }

    render(value, callable = null) {
        callable && callable()

        for (let key in this.bindings) {
            let [element, _] = this.bindings[key]
            element.innerHTML = value
        }
    }
}
