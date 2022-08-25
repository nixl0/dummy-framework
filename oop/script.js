
// ES5 functions

// function Article(author, title, slugs, body) {
//     this.author = author
//     this.title = title
//     this.slugs = slugs
//     this.body = body
// }

// Article.prototype.getInfo = function() {
//     return `${this.title} was written by ${this.author}`
// }

// const article1 = new Article('J. K. Rowling', 'Harry Pottah', ['magic', 'wizards'], 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus rerum voluptates temporibus similique beatae illo praesentium nisi vero, impedit molestiae iste neque officiis, recusandae est eos tempora exercitationem consectetur.')
// console.log(article1.getInfo())



// ES6 classes

class Article {
    constructor (author, title, slugs, body) {
        this.author = author
        this.title = title
        this.slugs = slugs
        this.body = body
    }

    getInfo() {
        return `${this.title} was written by ${this.author}`
    }
}

const article1 = new Article('J. K. Rowling', 'Harry Pottah', ['magic', 'wizards'], 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus rerum voluptates temporibus similique beatae illo praesentium nisi vero, impedit molestiae iste neque officiis, recusandae est eos tempora exercitationem consectetur.')
console.log(article1.getInfo())