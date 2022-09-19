const util = require('util');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
let dbData = require('./db.json');
// const readFileSync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);


class Store {

    read() {
        console.log(JSON.parse(dbData).push("data"));
        fs.readFileSync(dbData, 'utf8', function(error, data) {
            if (error) throw error
            console.log(JSON.parse(data));
            console.log(typeof(JSON.parse(data)));
        });
    }


    write(notes) {
        return writeFileAsync('db/db.json', JSON.stringify(notes));
    }


    // getNotes() {
    //     return
    // }


    // addNotes() {
    //     return
    // }


    deleteNotes() {
        return
    }



}

module.exports = Store;