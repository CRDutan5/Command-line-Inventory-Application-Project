const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { create, checkInStock } = require("./src/phoneController");

function run () {
    const action = process.argv[2];
    // const phoneId = process.argv[3];

    let writeToFile = false;
    let updatedPhones = [];

    switch(action){
        case 'create':
            updatedPhones = create();
            writeToFile = true;
            break;
        case 'show':
            updatedPhones = checkInStock();
            writeToFile = true;
            break;
    }

    if(writeToFile) {
        writeJSONFile("./data", "phones.json", updatedPhones);
    }
}

run();