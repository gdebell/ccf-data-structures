//var store1


//array of date keys in store 1's data

Object.key(store1)


//candies sold by store 1 on jan 8

function candiesSold(date) {
  for (var i=0; i < store1[date].length ; i++) {
    console.log(store1.date[i][0])
  }
  //SAME CODE AS FOR LOOP, JUST WRITTEN DIFFER
  // function printDateAndSum() {
  // return dateArray.forEach(function(el) {
  //    return numCandies(el);
  //  })
 }
}

candiesSold("2015-01-0")
// create a loop using number of canides on jan 10

function numCandies(date) {
  var total = 0;      //declare var outside so it resets
  for (var i=0; i < store1[date].length ; i++) {
    total += store1[date][i][2])
  }
  console.log(total);
}


//
//for and in loop
//how we access keys in an object

     //has to varia  //has to be Object
for (date in store1) {
  console.log(date)
}
