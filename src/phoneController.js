const { nanoid } = require("nanoid");
const { readJSONFile, writeJSONFile } = require("./helpers");

const phones = readJSONFile("./data", "phones.json");

const [,,,name,priceInCents,color,storage,inStock] = process.argv;

function createPhone(){
    const phone = {
        id: nanoid(4),
        name: name,
        priceInCents: priceInCents,
        color: color,
        storage: storage,
        inStock: inStock,
        onSale: false,
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

// Function iterate through phones and check if user input key for onSale is true. If it is allow them to update the price

function updateSalePrice (phoneId, updatedPrice) {
    // Check if inputted id matches any phone's id by using the .find() method
    const targetPhone = phones.find((phone) => {
        if(phoneId === phone.id){
            return phone;
        }
    });
    // If it doesnt match return error message
    if(!targetPhone){
        console.log("No phone was found");
    }
    // If it matches allow them to update the price
    else if(targetPhone){
        targetPhone.priceInCents = updatedPrice;
        targetPhone.onSale = true;
        console.log(`${targetPhone.name} ${targetPhone.storage}GB ${targetPhone.color} price was successfully updated to $${updatedPrice}!`);
    }
    return phones;
}

function deletePhone(phoneId) {
    const index = phones.findIndex(phone => phone.id === phoneId);

    if(index > -1){
        phones.splice(index,1);
        return phones;
    }
    else{
        console.log("Phone was not found");
        return phones;
    }
}

module.exports = {
    createPhone,
    checkInStock,
    updateSalePrice,
    deletePhone,
};