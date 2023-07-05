// console.log('j1 zl ka');


// run();
// function run() {
//     console.log('running');
// }

// function call  or invoke


//Named function assignment
// let stand = function walk() {
//     console.log('walking');
// };

//Anonymous function assignment
// let stand2 = function() {
//     console.log('walking');
// };

// stand2();

// let jump = stand;

// jump();


// Dynamic nature function
// let x = 1;
//  x = 'a';
//   console.log(x);
  
  // function sum(a,b){
  //   console.log(arguments);
  //   return a+b;

  // };

//console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,2,3,4,5));

// let ans = sum(1,2,3,4,5,6);


// function sum(a,b) {
//   let total = 0;
//   for(let value of arguments)
//     total = total + value;
//   return total;
// }

// let ans = sum(1,2,3,4,5,6);
// console.log(ans);

// function sum(num,...args,num) {
//      console.log(args);
// }

// sum(1,2,3,4,5,6);

// // Default Parameters
// function interest(p,r=6,y=10) {
//   return p*r*y/100;

// }
// console.log(interest(1000));

//Getter SETTER

// getter -> access properties
// setter -> change or mutate properties

// let person = {
//   fName : 'Harhal',
//   lName : 'Mahajan'

// };

// console.log(person);

// function fullName() {
//   return `${person.fName} ${person.lName}`;
// }

// issue -> read only 

// console.log(fullName());


// let person = {
//   fName : 'Harhal',
//   lName : 'Mahajan',
//   get fullName() {
//     return `${person.fName}  ${person.lName}`;
//   },
//   set fullName(value) {
//       if(typeof value !== String) {
//         throw new Error("You have not sent a string");
//       }
//       let parts = value.split(' ');
//       this.fName = parts[0];
//       this.lName = parts[1];
    
//   }

// };

// try {
//   person.fullName = 1;
// }
// catch (e) {
//   alert(e);
// }
// console.log(person.fullName);

// console.log(person.fullName);

// Scope
// {
//   var a = 5;
  
// }
// console.log(a);

// function walk() {
//   var a =5;
// }
// console.log(a);

// for(var i = 0; i<10; i++) {

// }

// console.log(i);

// if(true) {
//   let a = 5;
// }

// console.log(a);

// function a() {
//   const ab = 5;

// }
// const ab = 5;

// function b() {
//   const a = 5;
// }

let arr =  [1,2,3,4];
let total = 0;

for(let value of arr)
   total = total+value;

console.log(total);


let totalsum = arr.reduce((accumulator, currentValue) =>accumulator + currentValue, 0) ;
console.log("PRINTING TOTAL SUM")
console.log(totalsum);









