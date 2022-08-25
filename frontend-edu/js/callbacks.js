const posts = [
    { title: 'post one', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat voluptatem odit sequi alias eius distinctio quos numquam voluptates. Labore error pariatur nisi ab porro doloribus aperiam obcaecati eum! Ipsum rem consectetur non tenetur dolore porro odit, voluptatum velit provident ad?' },
    { title: 'post two', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde itaque, aliquid quaerat aspernatur distinctio similique esse totam dolores vero architecto?' }
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

getPosts();

createPost({title: 'post three', body: 'blablablaa'}, getPosts);