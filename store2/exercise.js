var store2 = require('./store2-data.js');
console.log("Store #2 refactored and complete!");

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable.
console.log('Question 1: Set the sale dates for banana bunches from store2 to a variable');

var bBSaleDates = (store2['sale dates']['Banana Bunches']);
console.log(bBSaleDates);

// What built-in array property would you use to determine how many sale dates there for store2's 'Banana Bunches'?
//
console.log('Question 2: What built in array property would you use to determine how many sale dates there are for store2 bb');
console.log(bBSaleDates.length);
console.log('.length will get you the number of sale dates ther are for store 2');

/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value. When you update your new variable, does the price in the store2 data change? Why or why not?
console.log('Question 3: Create a variable equal to the price of mint wafers.  Reassign it to a new value.');

var priceMW = (store2['inventory prices']['Mint Wafers']);
console.log(priceMW);
priceMW = 2.09;
console.log(priceMW);
console.log('The price in the mint waffers in the store data does not change. We did not manipulate the cost in the store data file.');

// Set a variable equal to the Peanut Butter Buttered Peanuts sale dates in store2. Use pop to remove one of the sale dates for store2's Caramel Twists.
console.log('Question 4: Set a variable equal to the PBBP sale dates in store2. Use pop to remove one of the sale dates for store2 CT.');

var saleDatesPBBP = (store2['sale dates']['Peanut Butter Buttered Peanuts']);
console.log(saleDatesPBBP);

var saleDatesCT = (store2['sale dates']['Caramel Twists']);
console.log('Initial CT list: ', saleDatesCT);

//var popped = saleDatesCT.pop();
//console.log('Popped ', popped);
//commeted out for next problem!.
console.log('After pop CT list: ', saleDatesCT);

/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for Caramel Twists. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
console.log('Question 5: Iterate over store2 sale dates for CT.  Use this to create an object containing dates as the key and the value as the quanitity sold on that day.');



//console.log(saleDatesCT);


var arrSaleDate = [];

saleDatesCT.forEach(function (test){
  //console.log(test);
  //console.log('loop through each piece of data');
  if(arrSaleDate[test] === undefined) {
    arrSaleDate[test] = 1;
  } else {
    arrSaleDate[test] += 1;
  }
});
console.log(arrSaleDate);


// Iterate over store2's sale dates data to find which day had the most total number of sales. How did you calculate this?

console.log('Question 6: Iterate over store2s data to find out which day had the most total number of sales');

var candySaleInfoAll = store2['sale dates'];
var invenStoreTwo = {};
//console.log(candySaleInfoAll);

for (var candySales in candySaleInfoAll) {
  //console.log(candySales);

  store2['sale dates'][candySales].forEach(function (saleData) {
    if(invenStoreTwo[saleData] === undefined) {
      invenStoreTwo[saleData] = 1;
    } else {
      invenStoreTwo[saleData] += 1;
    }
  });
}
console.log(invenStoreTwo);

/////////// CHALLENGE ///////////

// Create an object containing the amounts that store2 made by selling each type of candy.
console.log('                 ');
console.log('Question Challenge:');


var totalSales = {};
var candyList;
var itemProfit;

var itemInfo = store2['inventory prices'];
for(var name in itemInfo) {
  var itemPrice = store2['inventory prices'][name];
  var itmqty = (store2['sale dates'][name]).length;
  itemProfit = (itemPrice * itmqty);
  var itemProfitRounded = itemProfit.toFixed(2);
  totalSales[name] = '$' + itemProfitRounded;
}

console.log(totalSales);
