"use strict";

let stock = {
  macbook: 2,
  iphone: 4,
};

function processPayment(itemName) {
  if (stock[itemName]) {
    stock[itemName] -= 1;
  }
  console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
  if (stock[itemName] != undefined) {
    console.log(`No more ${itemName} in stock`);
  }
  console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`);
  if (stock[itemName]) {
    callbackPayment(itemName);
  } else {
    callbackError(itemName);
  }
}

let itemName = prompt(
  "Please enter the item you would like to purchase (Macbook, iPhone)"
);

itemName.toLowerCase();

processOrder(itemName, processPayment, processError);
