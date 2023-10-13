const { nanoid } = require("nanoid");
const { readJSONFile, writeJSONFile } = require("./helpers");

const phones = readJSONFile("./data", "phones.json");

function create(){
    const [,,,name,priceInCents,color,storage,inStock] = process.argv;
    const phone = {
        id: nanoid(4),
        name: name,
        priceInCents: priceInCents,
        color: color,
        storage: storage,
        inStock: inStock,
    };
    phones.push(phone);
    return phones;
}

// READ 
// Function user can check which phones are available in the store that day and it'll show a list of the available phones

function checkInStock () {
    // Use .filter to iterate and check which phones are in stock
    return phones.filter((phone) => phone.inStock === true);
}



// UPDATE
// Function user can update the price on any cellphone. By inputting a price "npm run update 999." Will check if onSale is true
// USER INPUT 999














module.exports = {
    create,
    checkInStock,
};