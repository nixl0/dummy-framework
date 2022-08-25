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

const createNote = (note, callback) => {
    setTimeout(() => {
        notes.push(note)
        callback()
    }, 2000)
}

populate()
createNote({id: 5, title: 'title 5', body: 'body'}, populate)