//prompt
const froyo = prompt(
    "Please enter a list of froyo flavors you'd like to order separated by commas.",
    "flavor1,flavor2,flavor3,flavor4"
);
//split string of flavors into array of strings
const flavors = froyo.split(",");
//console.log(flavors);

//counts object 
//count frequency of each flavor
const counts = {};
for (const num of flavors) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}
//console.log(counts);
console.log(`The flavors and quantities you ordered are:`);
console.table(counts);
