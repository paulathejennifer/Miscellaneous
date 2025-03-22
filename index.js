let String2 = "Jen";
let String1 = String("Mlo");
let first1 = String1[0];
let first2 = String1.charAt(2);
let first3 = String1[1];



let text = " To School"
let textUpper = text.toUpperCase();
console.log(textUpper);

let q = "To campus"
let qlower = q.toLowerCase();
console.log(qlower);

let r ="I love cooking";
let r2 = r.concat(" So much");
console.log(r2);

let s = "I am a girl";
let s2 = s.indexOf('I');
console.log(s2);

let t = "Have you ever ate Chicken?"
let t2 = t.slice(9, );
console.log(t2);

let u = " Wow Everyone, Good job!"
console.log(u);

let m = ["Orange", "Mango", "Lemon", "Grapejuice"];
let m2 = m.pop();
console.log(m2);

let arr = [{name: 'Jenny'} , {name: 'Alice'}]
let meArr = arr.map(elem => elem.name);
console.log(meArr);

let arr2 = [{age: 17}, {age:19}]
let ageArr = arr2.forEach(elem => console.log(elem));


let arr3 = [{grandma:'Alice'}, {grandma: 'Mary'}]
let grannyArr = arr3.forEach(elem => console.log(elem));

let arr4 =[{dream: 'MANSION'}, {dream: 'LAMBORGHINI'}]
let dreamArr = arr4.forEach(elem => console.log(elem));

let filterNo = [1, 2, 4, 5, 7];
let filter = filterNo.filter(elem => elem > 2)
console.log(filter);

let mpesaBal = [2000, 345, 500, 340000];
let filterBal = mpesaBal.some(elem => elem < 1000);
console.log(filterBal);

let budget = [1000, 300, 700, 345];
let filterBudg = budget.some(elem => elem >= 10000);
console.log(filterBudg);













// console.log(first3);
// console.log(first2);
// console.log(first1);
// console.log(String1);
// console.log(String2);













