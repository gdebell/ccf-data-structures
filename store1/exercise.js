console.log('Store 1 has been refactored! Store 1 and challenge problem is complete!');

var store1 = require('./store1-data.js');

// How would you access the value '4.63' from store1?
console.log('Question 1: Access value 4.63');
var valueStore1= (store1['2015-01-08'][0][1]);
console.log(valueStore1);
// How would you access how many 'Mint Wafers' were sold on January 8th?
console.log('Question 2: Access Mint Wafers sold on Jan. 8th');
var mintWaffSold8Jan = (store1['2015-01-08'][2][2]);
console.log(mintWaffSold8Jan);

// Produce an array of the date keys in store1's data.
console.log('Question 3: Produce an array of the date keys store 1 data.');
var candySoldDates=[];
candySoldDates.push(Object.keys(store1));
console.log(candySoldDates);

// *********** LOOPING OVER DATA *********** \\

// Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
console.log('Question 4: Create a a loop to read which candies were sold on Jan.8th.');

var candySoldEigthJan = (store1['2015-01-08']);
var candyList = [];
candySoldEigthJan.forEach(function(candyName) {
  var itemCandy = candyName[0];
  candyList.push(itemCandy);
});
console.log(candyList);

// Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?
console.log('Question 5: Create loop to count the total number of candies sold on Jan 10.');

var candySoldtenJan = (store1['2015-01-10']);
var totalCount = 0;

candySoldtenJan.forEach(function(candyTotalSales) {
  var candyTotals = candyTotalSales[2];
  totalCount += candyTotals;
});
console.log(totalCount);
console.log('The counter variable should be initialized inside the forEach function after the candy item sold number has been grabbed.  That number should then be added into the total number of candy sales.');

// Use `Object.keys()` to get an array of the dates that candies were sold at store1.
console.log('Question 6: Use Object.keys() to get an array of the dates that candies were sold at store1.');
console.log(Object.keys(store1));

/* Iterate over the generated array of dates. Use each date to console.log the specific sale data for the day from store1.*/
console.log('Question 7: Iterate over the generated array of dates.  Use each date to console.log the specific sale data for the day from store1.');



var dataObj = {};

for (var date in store1) {
  var totalSales=0;
  // 1 - get keys, rather than value, add the keys to a new object
  //console.log(date);

  store1[date].forEach(function(qty) {
    totalSales += (qty[2]);
    dataObj[date]=totalSales;
  });
}

console.log(dataObj);


/* Use a loop to calculate the total number of candies sold at store1.*/
console.log('Question 8: Use a loop to calculate the toal number of canides sold at store1.');

var salesDates =Object.keys(store1);
var totSold=0;

salesDates.forEach(function(data){
  var listCandyData = (store1[data]);
  listCandyData.forEach(function(data1){
    var canSold = (data1[2]);
    totSold += canSold;
  });
});
console.log(totSold);

// In the previous exercise, where did you have to initialize the counter variable? Why?
console.log('In the previous exercise, the counter variable was initialized in the second for each loop the individual candy total was grabbed.');

// *********** CHALLENGE *********** \\
// Create an array of the candies sold by store1 on January 10th.
console.log('Challenge Problem:');
var dataOnTenth = (store1['2015-01-10']);
dataOnTenth.forEach(function(test) {
  console.log(test[0]);
});
