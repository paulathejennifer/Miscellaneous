// let  text = "Hello World!";
// let extractWord = text.split("")[1].replace("!", "");
// console.log(extractWord);

let text = "My name  is 'Jennifer'";
let length = text.length;
console.log(length);

let namey = "Jennifer " + "Chichi";
console.log(namey);

let x =String ("James");
let y = new String ("James");
console.log(x===y);

let q = "I love coding";
let char = q.charCodeAt(2);
console.log(char);

const brand = "W3schools";
let letter = brand.at(-2);
console.log(letter);

a = "I am a girl";
let extractedWord = a[7];
console.log(extractedWord);

let fruits = "Orange, Dates, Kiwi";
let sliced = fruits.slice(8,13);
console.log(sliced);

let sweet = "Apple, Banana, Kiwi";
let part = sweet.substring(7,13);
console.log(part);

let madam = "Jennifer";
let officialize = madam.charAt(0).toUpperCase() + madam.slice(1);
console.log(officialize);

let text1 = "Hi";
let text2 = "JavaScript";
let text3 = text1.concat(" " , text2);
console.log(text3);

let intro = "Hello" + " " + "Everybody";
console.log(intro);

let boyfriend = " James ";
let newCrush = boyfriend.trimEnd()
console.log(newCrush);

let luckyNumber = "X";
let padded = luckyNumber.padEnd(8,"x");
console.log(padded);

let myNumber = 5;
let mypadText = myNumber.toString();
let pading = mypadText.padEnd( 5,"3");
console.log(pading);

let location = "Please do jennee where 'jennee' is jennee";
 let locationn =location.search("jennee")
console.log(locationn);

let yearOfBirth = "2005";
let YOB = yearOfBirth.match(/05/g);
console.log(YOB);

let mom = "pauline Wachira";
let whereIsShe = mom.matchAll(/pau/gi);
console.log(whereIsShe);

let Me = "Paula The Jennifer";
let findMe = Me.endsWith("Jennifer");
console.log(findMe);

let firstName = "Edith";
let lastName = "Kandie";
let program = "codehiveX";
let welcome = `Let me take this opportunity to congratulate you ${firstName} ${lastName} for managing to join ${program} program!`
console.log(welcome);

let price = 100;
let VAT = 0.25;
let total = `Total: ${(price + VAT).toFixed(1)}`;
console.log(total);

let budget = 10000;
let transactionCost = 2.25;
let sum = `Total: ${(budget + transactionCost).toFixed(4)}`;
console.log(sum);

let shoppingCost = 50003;
let items = 6;
let productCost = `Total Money to be spent for stocking: ${(shoppingCost * items).toFixed(0)}`;
console.log(productCost);

let welcomeNote = "Welcome to AkiraChix capus in Karen,Nairobi where women are nurtured to become competent software developers"
let textLength = welcomeNote.length
console.log(textLength);

var str = "Hello"
var splitString = str.split("")
var reverseString = splitString.reverse()
var joinString = reverseString.join()
console.log(joinString);

var subString = str.substr(1)
var charString = str.charAt(0)
console.log(subString);
console.log(charString);

var findLength = str.length;
console.log(`${str} ${str.length}`);

var me = "Paula Chinyere";
var whatLength = me.length;
console.log(`${me}: length is ${me.length}`);

var campus = "AkiraChix";
var campusLength = campus.length;
console.log(`${campus} text length is : ${campus.length}`);

var vision = "To start an orphanage that nurtures children spiritually,physically and emotionally";
console.log(`${vision} text length is : ${vision.length}`);

//Escape Characters
let school = "Kinyago Secondary Shools found in \"Dandora\" County wow \f Here are the students' pics";
console.log(school);

//Template Strings
let attributes = `passionate, straight-forward, self-assertive`;
let leaderAttr = "As a leader, you need to be "
console.log(`${leaderAttr}${attributes}`);

// math.js
function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
  }
// console.log = { add, subtract, multiply, divide };
console.log(add);


























