const router = require('.htmlRoutes');



router.post('notes', (req, res) => {
    store
    .getNotes()
    .then((notes) => res.json(notes));               
})


export.modules