const notes = [
    {
        id: 1,
        title: 'title 1',
        body: 'Lorem ipsum dolor sit amet consectetur',
        date: '2014-7-8',
    },
    {
        id: 2,
        title: 'title 2',
        body: 'Lorem ipsum dolor sit amet consectetur',
        date: '2014-7-8',
    },
    {
        id: 3,
        title: 'title 3',
        body: 'Lorem ipsum dolor sit amet consectetur',
        date: '2014-7-8',
    },
    {
        id: 4,
        title: 'title 4',
        body: 'Lorem ipsum dolor sit amet consectetur',
        date: '2014-7-8',
    }
]

const populate = () => {
    setTimeout(() => {
        const ul_list = document.querySelector('.notes__list')
        let output = ''
        notes.forEach((note) => {
            output += `<li class='notes__item'><h3>${note.title}</h3><p>${note.body}</p></li>`
        })
        ul_list.innerHTML = output
    }, 1000);
}

const createNote = (note) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            notes.push(note)

            const error = false

            if (!error) resolve()
            else reject('mistakes were made')
        }, 2000)
    })
}

populate()



// путём пары блоков then-catch
// createNote({id: 5, title: 'title 5', body: 'body'}).then(populate).catch((err) => {
//     console.error(err)
// })



// путём только блока catch, если нас интересует только ошибка
// createNote({id: 5, title: 'title 5', body: 'body'}).catch((err) => console.error(err))



// путём только блока then, второй аргумент которого обрабатывает исключение
// аналогично первому варианту
createNote({id: 5, title: 'title 5', body: 'body'}).then(
    populate,
    (err) => console.error(err)
)



// TODO thenable?