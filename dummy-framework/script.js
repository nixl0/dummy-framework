const counter = document.querySelector(".counter");
const plus = document.querySelector(".counter__plus");
const minus = document.querySelector(".counter__minus");
const reset = document.querySelector(".counter__reset");

const increment = (number) => number + 1;
const decrement = (number) => number - 1;
const resetNumber = () => 0;

// TODO: в идеале сделать классами (Class)

let counter_number, bindings;

function init() {
    // инициализация переменных
    counter_number = resetNumber(counter_number);

    // привязка значений к элементам DOM-дерева (bindings = [])
}

function render(values) {
    // просмотреть есть ли привязки и в случае изменения, обновить DOM-дерево
    // bindings. (методы массивов)
}

init();
render();

window.addEventListener("unload", (event) => {
    console.log("unload");
});

function bindValueToElement(value, element) {
    element.innerHTML = value;
    bindings.push([element, value]);
}
function clearElements(bindings) {
    // todo
}

const domBinder = (variable, updater, callback) => {
    variable = updater(variable);
    callback && callback();
};

plus.addEventListener("click", () => {
    domBinder(counter_number, increment, render);
});

minus.addEventListener("click", (callback) => {
    domBinder(counter_number, decrement, render);
});

reset.addEventListener("click", (callback) => {
    domBinder(counter_number, reset, render);
});