const router = require('./htmlRoutes');
const Store = require('../db/store');


router.get('/notes', (req, res) => {
    Store
    .getNotes()
    .then((notes) => res.json(notes));               
});

router.post('/notes', async(req, res) => {
    let StoreObj = new Store();
    let previousData = await StoreObj.read();
    console.log(previousData);
    console.log(typeof(previousData));
    // console.log(req.body);
    // let convertedData = JSON.parse(previousData);
    // let updatedData = convertedData.push(req.body);
    // console.log(updatedData);
    StoreObj
    .write(JSON.parse(previousData).push(req.body))
    .then((notes) => res.json(notes));
});

router.delete('/notes', (req, res) => {
    Store
    .deleteNote(req.body)
    .then((notes) => res.json(notes));
});


module.exports = router;