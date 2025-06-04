const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000

const app = express();

const posts = [
    {id: 1 , title: "post one"},
    {id: 2, title: "post two"},
    {id: 3, title: "post three"}
]

app.get('/api/posts', (req, res) => {
    res.json(posts)
})

//creating a static server

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });


app.listen(port, () => console.log(`Server is running on port ${port}`));