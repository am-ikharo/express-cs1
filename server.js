const express = require('express');

const app = express();

const posts = [
    {id: 1 , title: "post one"},
    {id: 2, title: "post two"},
    {id: 3, title: "post three"}
]

app.get('/api/post', (req, res) => {
    console.log(req.query);
})

app.get('/api/post/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(posts.filter((post) => post.id === id));
})

app.get('/api/posts', (req, res) => {
    res.json(posts);
})



app.listen(8080, () => console.log(`Server is running on port 8080`))