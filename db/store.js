const util = require('util');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const readFileAsync = util.promisify.apply(fs.readFile);
const writeFileAsync = util.promisify.apply(fs.writeFile);


class Store {

    read() {
        return readFileAsync('db/db.json', 'utf8');
    }


    write() {
    return writeFileAsync('db/db.json' JSON.stringify(notes)
    }

    getNotes()


    addNotes()


    deleteNotes()



}

export.modules()