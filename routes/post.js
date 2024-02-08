const express = require('express');
const postRouter = express.Router();

const objects = [
    { id: 1, title: 'obj 1' },
    { id: 2, title: 'obj 2' },
    { id: 3, title: 'obj 3' },
];

postRouter.get('/all', (req, res) => {
    res.json(objects);
});

postRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    const array = objects.find(user => user.id === parseInt(id));
    res.send(array);
});

module.exports = postRouter;