// JavaScript Arrays
const names = ["Jane", "Joy", "Moses"];
names[0];
console.log(names[0]);

const ladies = ["Lovelace", "Adalab", "AnitaB"]
let superlady = ladies[1];
console.log(superlady);

// Converting an array too a str
const meals = ["Githeri", "Matoke", "Chapati"];
let arr = meals.toString();
console.log(arr);

const people = ["Amuor", "Cynthia","Kevine", 60];
const person = {firstName:"Amuor", lastName:"Mangar", age:20};
console.log(person);

const continents = ["Africa", "Asia,"["Kenya", "Tanzania"]]
console.log(continents);

//Array length
const hair = ["Black","Brown","White"];
let length = hair.length;
console.log(length);

//Access first elemen1
let myHairColor = hair[4];
console.log(myHairColor);

//Last element
let herHair = hair[hair.length -1];
console.log(herHair);

//Looping Array elements//use forEach()
let text = "<ul>";
hair.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "<li>";
}
console.log(text);

let colors = ["Red","Green","Beige"];
let text1 = "<ul>";
colors.forEach(myfunct)
text1 += "</ul>";


function myfunct(value) {
  text1 += "<li>" + value +"</li>"

}
console.log(text1);

//Pushing elements
const fruits = ["Peach", "Cherry", "Plum", "Guava"];
fruits.push("Grape");
console.log(fruits);

//Associative Arrays
const friend =[];
friend[0] = "Sharon";
friend[1] = "Joy";
friend[2] = "Pauline";
friend[3] = "Josephine";
friend[4] = 100;
friend.length;
console.log(friend)

friend.push("Rooney");
friend[0];
console.log(friend[0]);

const points = [24, 4]
let find = Array.isArray(points);
console.log(find);
let find2 = (points instanceof Array);
console.log(find2);
console.log(points);

const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
console.log(myObjgit);






 




























