const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { showPhones, createPhone, checkInStock, updateSalePrice, deletePhone, detailsOfPhone, addToCart, calculateTotalCost, cancelCart } = require("./src/phoneController");


function run () {
    const action = process.argv[2];
    const phoneId = process.argv[3];

    let writeToFile = false;
    let updatedPhones = [];

    let updatedCart = [];

    switch(action){
        case 'index':
            updatedPhones = showPhones();
            console.log(updatedPhones);
            break;
        case 'details':
            updatedPhones = detailsOfPhone(phoneId);
            console.log(updatedPhones);
            break;
        case 'create':
            updatedPhones = createPhone();
            writeToFile = true;
            break;
        case 'show':
            updatedPhones = checkInStock();
            console.log(updatedPhones);
            break;
        case 'update':
            updatedPhones = updateSalePrice(phoneId,process.argv[4]);
            writeToFile = true;
            break;
        case 'destroy':
            updatedPhones = deletePhone(phoneId);
            writeToFile = true;
            break;
        case 'add':
            updatedCart = addToCart(phoneId);
            writeToFile = true;
            break;
        case 'calculate':
            updatedCart = calculateTotalCost();
            console.log(updatedCart);
            break; 
        case 'cancel':
            updatedCart = cancelCart();
            break;
    }

    if(writeToFile) {
        if(action === 'add'){
            writeJSONFile("./data", "cart.json", updatedCart);
        }
        else{
            writeJSONFile("./data", "phones.json", updatedPhones);
        }
    }
}

run();