// Section 1

// What types are these?

/* 1.1 */ 1; number
/* 1.2 */ "cat"; string
/* 1.3 */ true; boolean
/* 1.4 */ []; array
/* 1.5 */ {}; object
/* 1.6 */ 1.1; number
/* 1.7 */ var myVariable; undefined


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1; true
/* 2.2 */ "cat"; true
/* 2.3 */ true; true
/* 2.4 */ NaN; false
/* 2.5 */ []; false
/* 2.6 */ {}; true
/* 2.7 */ undefined; false
/* 2.8 */ ""; false
/* 2.9 */ 0; false


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number
var number = 5;
// 3.2 Assign a variable that is a string
var string = "Hello";
// 3.3 Assign a variable that is a boolean
var booly = false
// 3.4 Assign a variable that is an object
var myObject = {thing: "yes"};


// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

if(4 > 2) {
  console.log("hello");
} else {
  console.log("bye");
}


// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
var rocky = animals[0]; // var rocky = animals.unshift();
// 5.2. Assign the last element to a variable
var gary = animals[animals.length-1]; // var gary = animals.pop;
// 5.3. Assign the length of an array to a variable
var numberOfAnimals = animals.length;
// 5.4. Add an item to the end of the array
animals.push("hamster");
// 5.5. Add an item to the start of the array
animals.shift("aardvark");
// 5.6. Assign the index of hedgehog to a variable

for(var i=0; i<animals.length; i++){
  if (animals[i] === "hedgehog"){
    var hedgehogNumber = i;
  }
}


// Section 6

// 6.1 Create an array of 5 vegetables
var vegetables = ["neeps", "tatties", "kale", "chard", "swede"];
// 6.2 Loop over the array and write to the console using a "while"

var i = 0;
while (i < vegetables.length){
  console.log(vegetables[i]);
  i++;
}

// 6.3 Loop again using a "for" with a counter
for (var i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}

// 6.4 Loop again using a "for of"
for (veg of vegetables) {
  console.log(veg);
}

// Section 7

var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

// 7.1 Calculate the total cash in accounts

var total = 0

for (account of accounts){
  total += account.amount;
}

// 7.2 Find the amount of money in the account with the largest balance

var total2 = 0
for (account of accounts){
  if(total2 < account.amount){
    total2 = account.amount;
  }
}

// 7.3 Find the name of the account with the smallest balance

var total3 = Infinity;

var accountNameSmallest;
for (account of accounts){
  if(total3 > account.amount){
    total3 = account.amount;
    accountNameSmallest = account.name;
  }
}

// 7.4 Calculate the average bank account value

var average = total/accounts.length;

// 7.5 Find the value of marcs bank account

for (account of accounts){
  if(account.name === "marc"){
    var marcsCash = account.amount;
  }
}

// 7.6 Find the holder of the largest bank account

var total4 = 0;

var accountNameLargest;
for (account of accounts){
  if(total4 < account.amount){
    total4 = account.amount;
    accountNameLargest = account.name;
  }
}

// 7.7 Calculate the total cash in business accounts

var total5 = 0

for (account of accounts){
  if (account.type === "business" ){
    total5 += account.amount;
  }
}

// 7.8 Find the largest personal account owner

var total6 = 0;

var accountNameLargestPersonal;
for (account of accounts){
  if(account.type === "personal"){
    if(total6 < account.amount){
      total4 = account.amount;
      accountNameLargestPersonal = account.name;
    }
  }
}
