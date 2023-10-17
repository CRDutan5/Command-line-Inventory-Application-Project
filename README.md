# Cell Phone Store Command Line Inventory/Cart Project
A new cell phone store has opened up! Below you will learn the functionality and how to use the new inventory and cart system that is used across the store. Please make sure to read all the information for it relies you as the user to input certain information to fully use it at its full capacity!

The user will be able to: 
- view all the cell phones the store carries
- view the information regarding a specific cell phone
- create a cellphone to add to the stores inventory
- view what cellphones are currently in stock at the store
- update the price of a cellphone to a sale price
- remove a cellphone from the stores inventory
- add cellphones to their cart along with a quantity
- view their cart along with their grand total
- clear out their cart

## Installation Setup

- Begin by forking and cloning this repository through the command:
`git clone "codeurl"`

- In order to get the full functionality of our repo that being our dependecies and package.json. Run the command below:
`npm install`

- Head over to the `package.json` file and view the scripts and familiarize yourself with them: 
```js
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "index": "node index.js index",
    "create": "node index.js create",
    "show": "node index.js show",
    "update": "node index.js update",
    "destroy": "node index.js destroy",
    "details": "node index.js details",
    "add": "node index.js add",
    "calculate": "node index.js calculate",
    "cancel": "node index.js cancel"
  },
  ```

## Functionality Commands (Phones)
### Index
The index command will allow you to view the phones along with their respective id's that are kept within the phones.json file
 `npm run index`

**Sample Output:**
```js
[
  'cD-5 Samsung S23 Ultra',
  'fB-4 iPhone 15 Pro Max',
  'gF-4 Google Pixel 8 Pro',
  'xr7P Motorola Razr+',
  'D50u One Plus 10 Pro',
  'xeG5 Samsung Z-Flip 5'
]
```

### Details
The details command will allow you to view the details of a specific phone through the use of a phone id. The user will input the command along with the appropriate phoneId.
`npm run details cD-5`

**Sample Output:**
```js
[
  {
    id: 'cD-5',
    name: 'Samsung S23 Ultra',
    priceInCents: 999,
    color: 'Phantom Black',
    storage: 256,
    inStock: true,
    onSale: true
  }
]
```

### Create
The create command will allow you to create a phone and add it to the system. It does have a larger amount of user inputs in order to fully process it. Below the example I will be using is the One Plus 10 Pro.
`npm run create "One Plus 10 Pro" 899 Blue 512 true`
After running the command you follow up with the name of the phone. If it has a space you put it into a string format through the use of "". Then you follow up with the retail price which is 899. Then the color which is Blue. Then the storage capacity which is 512. Lastly you enter true or false to show if you have it in stock or not.

**Sample Output:**
```js 
{
    "id": "pESO",
    "name": "One Plus 10 Pro",
    "priceInCents": 899,
    "color": "Blue",
    "storage": 512,
    "inStock": "true",
    "onSale": false
}
```
  
You may notice that there is a key value called "id" that was already generated. This is where nanoid autogenerated a random id whenever we create a new phone. Also, there is a key called "onSale" that is preset to false. Further down we'll see why it was preset to false. At the moment this is just the regular price we're displaying

### Show
The show command will allow you to see what phones are currently in stock in the store. Since the function `checkInStock()` is embedded.
`npm run show`

**Sample Output**

```js
[
  {
    id: 'cD-5',
    name: 'Samsung S23 Ultra',
    priceInCents: 999,
    color: 'Phantom Black',
    storage: 256,
    inStock: true,
    onSale: true
  },
  {
    id: 'gF-4',
    name: 'Google Pixel 8 Pro',
    priceInCents: 899,
    color: 'Snow White',
    storage: 128,
    inStock: true,
    onSale: false
  }
]
```
As you can see, the only phones being displayed are the ones that were set to true in the `inStock` key.

### Update
The update command will allow you to change the price of any phone. However, this command will ask a little more from the user. It will ask you for you to insert the phone's id that you'll be updating. And it will also ask for the new updated price. So the command will look something like this:
`npm run update cD-5 999`

**Sample Output**

**Before**
```js
  {
    "id": "cD-5",
    "name": "Samsung S23 Ultra",
    "priceInCents": 1199,
    "color": "Phantom Black",
    "storage": 256,
    "inStock": true,
    "onSale": false
  }
```

**After**
```js
  {
    "id": "cD-5",
    "name": "Samsung S23 Ultra",
    "priceInCents": 999,
    "color": "Phantom Black",
    "storage": 256,
    "inStock": true,
    "onSale": true
  }
```
Note: The `onSale` key after has also been changed from false to true because the phone is considered to be on sale now.

### Destroy
The destroy command will allow you to delete a phone from the stores inventory. This will also ask for a phoneId for the terminal to know which phone to specifically delete.

`npm run destroy cD-5`

The output will show you that within the `phones.JSON` file that phone is no longer there.


## Functionality Commands (Cart)
### Add

The add command will allow you to add phones into your cart through the use of the phoneId and the quantity. Once added it will be shown in the `cart.json` file.
`npm run add cD-5 2`

**Sample Output:**

```js
[
  {
    "name": "Samsung S23 Ultra",
    "color": "Phantom Black",
    "storage": 256,
    "priceInCents": 1199,
    "qty": 2
  }
]
```

As you can see, here we wanted to add the Samsung S23 Ultra to our cart specifically, two of them. In the `cart.json` file you can see how our cart was updated to the object above.

### Calculate

The calculate command prints out to the user: the name of the phone, the price for each unit, and the quantity for each item. Since in the previous command `add` we added two S23 Ultra's now we can use the `calculate` command to output the grand total, quantity and product name through the command:

`npm run calculate`

**Sample Output:**
```js
PRODUCT                     PRICE          QUANTITY
-------------------------------------------------------
Samsung S23 Ultra         $1199.00              2

Grand Total: $2398.00
```

### Cancel
The cancel command allows the user to empty out the cart by simply running the command: 

`npm run cancel`

Note: The `cart.json` will show you an empty array




**Credits: Carlitos Dutan**