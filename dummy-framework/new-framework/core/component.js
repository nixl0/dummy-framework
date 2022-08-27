// TODO делаем через класс

// у компонента есть template это его элементы '<div> ...</div>'
// у него есть data это объект с переменными { counter: 10 }
// у него есть root корневой (родительский) элемент (куда рендерим)

let bindings = {}

export const bind = (element, value) => {
    // объекту bindings добавляется элемент, где 
    // в качестве ключевого значения присваивается название класса элемента
    // а в качестве значения присваивается массив из объекта и нового значения

    bindings[element.id] = [element, value]
}

export const render = (value, callable = null) => {
    callable && callable()

    for (let key in bindings) {
        // TODO нет поиска
        let [element, _] = bindings[key]
        element.innerHTML = value
    }
}

class Component {
  constructor() {

  }

  init() {
    // присвоить значения
    // отрендерить в DOM дерево (insertadjacenthtml)
  }

  render() {
    // innerhtml
  }
}


// пример создания компонента
// let component = new NewComponent()

// component.id = 'counter'
// component.template = `
// <div id="counter">
//     <section class="counter">

//     <span>counter:</span>
//     <span id="span_counter">0</span>

//     <form action="">
//         <input class="btn_plus" type="button" value="+">
//         <input class="btn_minus" type="button" value="-">
//         <input class="btn_reset" type="button" value="Reset">
//     </form>

//     </section>
// </div>`
// component.data = { count: 10 }

// component.root = 'root' // id родительского элемента
// это нужно один раз для первичного рендера

// component.bindings = { id: 'span_counter', value: count }
// // ....
// component.init()
// component.render()


// <div id="root">
//   <div id="counter">
//   </div>
//   <div id="calculator">

//   </div>
// </div>
