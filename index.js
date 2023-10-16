const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { createPhone, checkInStock, updateSalePrice, deletePhone } = require("./src/phoneController");

function run () {
    const action = process.argv[2];
    const phoneId = process.argv[3];

    let writeToFile = false;
    let updatedPhones = [];

    switch(action){
        case 'create':
            updatedPhones = createPhone();
            writeToFile = true;
            break;
        case 'show':
            updatedPhones = checkInStock();
            writeToFile = true;
            break;
        case 'update':
            updatedPhones = updateSalePrice(phoneId,process.argv[4]);
            writeToFile = true;
            break;
        case 'destroy':
            updatedPhones = deletePhone(phoneId);
            writeToFile = true;
            break;
    }

    if(writeToFile) {
        writeJSONFile("./data", "phones.json", updatedPhones);
    }
}

run();