const { nanoid } = require("nanoid");
const { readJSONFile, writeJSONFile } = require("./helpers");
const fs = require('fs');

const phones = readJSONFile("./data", "phones.json");

const cart = readJSONFile("./data", "cart.json");

const [,,,name,priceInCents,color,storage,inStock] = process.argv;

const emptyArray = [];

// User can see a list of all items
function showPhones() {
    let indexOfPhones = phones.map((phone) => `${phone.id} ${phone.name}`);
    console.log(indexOfPhones);
}

// User can create a new item
function createPhone(){
    const phone = {
        id: nanoid(4),
        name: name,
        priceInCents: +priceInCents,
        color: color,
        storage: parseInt(storage),
        inStock: inStock,
        onSale: false,
    };
    phones.push(phone);
    return phones;
}

// User can see the details of one item
function detailsOfPhone(phoneId){
    return phones.filter((phone) => phoneId === phone.id);
}

// User can see which phone is in stock that day
function checkInStock () {
    // Use .filter to iterate and check which phones are in stock
    return phones.filter((phone) => phone.inStock === true);
}

// User can update item
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

// User can delete an item
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

// JSON file to make cart
// Add items,
// Explain project in README

// Add to cart function:
// Expected Output: 
// Samsung S23 Ultra Phantom Black 256GB: $1199
// Google Pixel 8 Pro 128GB: $899
// Total Price: $2098

function addToCart(phoneId){

    const targetPhone = phones.find((phone) => phoneId === phone.id);

    if(targetPhone){
        let cartItem = {
            name: targetPhone.name,
            color: targetPhone.color,
            storage: targetPhone.storage,
            priceInCents: targetPhone.priceInCents
        }
        cart.push(cartItem);
    }
    else{
        console.log("Item Not Found");
    }

    console.log(cart);
    return cart;
}

function calculateTotalCost() {
    let totalCost = 0;

    console.log(`PRODUCT                     PRICE          QUANTITY`);
    console.log("-------------------------------------------------------");

    for(let item of cart){
        console.log(`${item.name}         $${item.priceInCents}.00`);
        totalCost += item.priceInCents;
    }
    return `\nGrand Total: $${+totalCost}.00`;
};

function cancelCart() {
    const jsonString = JSON.stringify(emptyArray, null, 2);
    writeJSONFile("./data", "cart.json", jsonString);
    console.log("Your cart has been cleared!");
}



module.exports = {
    createPhone,
    checkInStock,
    updateSalePrice,
    deletePhone,
    showPhones,
    detailsOfPhone,
    addToCart,
    calculateTotalCost,
    cancelCart,
};