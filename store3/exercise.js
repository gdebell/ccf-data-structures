console.log('Store 3 and challenge problem is complete!');

var store3 = require('./store3-data.js');
console.log("Store #3 ");
// Hint: Don't forget to require in your data! Refer to store1 or store2 exercise.js files on how to do this.
// //()()()()() ACCESSING DATA ()()()()()\\
// Set a variable equal to Berry Bites data for store3 on January 7.
var berryBitesDataForSeventh = (store3[1]);
console.log('Question 1: Variable set to equal berry bites sold on jan 7th');
console.log(berryBitesDataForSeventh);
// Console log how many Mint Wafers were sold on January 9th?
console.log('Question 2: Number of mint wafers sold on jan. 9th');
var mintWaferSoldOnNinth = (store3[3]['inventory sold']['Mint Wafers']['quantity']);
console.log(mintWaferSoldOnNinth);
// Set a variable equal to how many dates are included in the dataset.
console.log('Question 3: Variable equal to how many dates are included in the dataset.');
var datesInDataSet = store3.length;
console.log(datesInDataSet);

//()()()()() LOOPING OVER DATA ()()()()()\\
// Create a loop to iterate over the sale data from store3. Use this loop to create an array of dates contained in the sale data.
console.log('Question 4: Create an array of dates contained in the sale data');
var arrayOfSaleDates = [];
store3.forEach(function(item){
  arrayOfSaleDates.push(item.date);
});
console.log(arrayOfSaleDates);

// Use `Object.keys()` to loop over the inventory sold for January 10th in store3. While iterating over the data, create an object containing each candy's name and price.
console.log('Question 5: Loop through data sold on Jan.10th.  Create and object containing each candys name and price.');

var candNameAndPriceObj = {};
var inveOnTenth = (store3[4]['inventory sold']);
var candyList = (Object.keys(inveOnTenth));

candyList.forEach(function (list) {
  var indPrice = (store3[4]['inventory sold'][list]['cost']);
  candNameAndPriceObj[list]=indPrice;
});
console.log(candNameAndPriceObj);

// Create a loop to iterate over the whole store3 variable to find out how many Peanut Butter Buttered Peanuts were sold on all dates.
console.log('Question 6: Loop to iterate over the whole store 3 variable to find out how many PBBP were sold on all dates');
var pBBPCount=0;
store3.forEach(function(dataCollection){
var listDates = dataCollection['date'];
var numSold = dataCollection['inventory sold']['Peanut Butter Buttered Peanuts']['quantity'];
  pBBPCount += numSold;
});
console.log(pBBPCount);

//()()()()() CHALLENGE ()()()()()\\
console.log('Question: Challenge Problem: Determine how much money store 3 made on Jan. 9th');
// Determine how much money store3 made on January 9th.

var salesOnNinth = (store3[3]['inventory sold']);
var candyListNinth = (Object.keys(salesOnNinth));
var totalSales=0;
candyListNinth.forEach(function(candyName){

  var profit = (store3[3]['inventory sold'][candyName]['cost'] * store3[3]['inventory sold'][candyName]['quantity']);
  totalSales += profit;
})
var profits = totalSales.toFixed(2);
console.log('$' + profits);
