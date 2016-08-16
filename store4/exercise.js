console.log('Store 4 has been refactored! Store 4 and challenge problems are complete!');


// Remember what goes here?
var store4 = require('./store4-data.js');

// ^^^^^^^^^^^^ ACCESSING DATA ^^^^^^^^^^^^
// What is the cost of 'Dark Chocolate Crunchies' from store4?
console.log('Question 1:  What is the cost of DCC from store 4?');

var dDCCost = (store4['Dark Chocolate Crunchies']['cost']);
console.log('$'+dDCCost);
// Set the total number of 'Berry Bites' sold by store4 to a variable.
console.log('Question 2: Total number of BB sold by store 4')
var totalBBSold = (store4['Berry Bites']['sold on'].length);
console.log(totalBBSold);

// ^^^^^^^^^^^^ LOOPING OVER DATA ^^^^^^^^^^^^
// Create a loop to return an array of the candies that cost more than $2.00
console.log('Question 3: An array of the candies that cost more than $2.00');

var expensiveCandy=[];
for(var name in store4) {
  //console.log(name);
  var candyPrice = store4[name]['cost'];
  console.log(candyPrice);
  if(candyPrice > 2.00) {
    expensiveCandy.push(name);
  }
}
console.log(expensiveCandy);

// Create a loop to return an object that has the candy name as the key and the cost as the value
console.log('Question 4: An object that has the candy name as the key and the cost as the value.');

var candyListObj = {};
for(var name in store4) {
  var price = store4[name]['cost'];
  candyListObj[name]=price;
}
console.log(candyListObj);

// ^^^^^^^^^^^^ CHALLENGE ^^^^^^^^^^^^
// Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? (Each date represents 1 item sold.)
console.log('Challenge Problem: Profit made by PP:');
var pPCost = (store4['Peppermint Poppers']['cost']);
var pPSold = (store4['Peppermint Poppers']['sold on'].length);
var ppProfit = pPCost * pPSold;
console.log('$'+ ppProfit);

console.log('Challenge Problem: Profit made by CT:');
var cTCost = (store4['Caramel Twists']['cost']);
var cTSold = (store4['Caramel Twists']['sold on'].length);
var cTProfit = cTCost * cTSold;
cTProfit= cTProfit.toFixed(2)
console.log('$'+ cTProfit);

// Determine how much money did store3 make on January 9th.

console.log('Challenge Problem: Profit made on Jan 9th');

var totalCount=0;
var oneCandyProfit = 0;
var candyPrice =0;
var count =0;
var oneCandyProfit=0;
var totalCountForCandy =0;

for (var name in store4) {
  var candyPrice = store4[name]['cost'];
  store4[name]['sold on'].forEach(function(array){
    if (array === '2015-01-09') {
      count += 1;
      oneCandyProfit = count * candyPrice;
      count = 0;
      totalCountForCandy += oneCandyProfit;
      //console.log('$'+ totalCountForCandy.toFixed(2))
    }
  });
}
console.log('$'+ totalCountForCandy.toFixed(2))

// Calculate how much store4 made from selling Dark Chocolate Crunchies across all the days.
console.log('Challenge Problem: Calculate how much store4 made from selling DCC across all of the days');

var dCCcost = (store4['Dark Chocolate Crunchies']['cost']);

var dCCSold = (store4['Dark Chocolate Crunchies']['sold on'].length);

var profitFromDdc = dCCcost*dCCSold;
console.log('$'+ profitFromDdc.toFixed(2));
