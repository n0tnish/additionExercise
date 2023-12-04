//let data = [7, 3, 'Abc', 2, 1, 9, 'abc', 6, -1]
//console.log(
  //  data.slice(2, 4) );
//Reverse
//console.log(data.reverse( ) );
//Sorting
//console.log(data.sort( ) ); */
//console.log(data);

//data.filter(a=> typeof a == 'number'  )
//console.log(numbers);
//let even numbers = data.filter(x=> x % 2)
// Named function or function declaration
//function onlyNumbers(a) {
   // return  typeof a == 'number'
   // }
//;

/*let person = {
    name: 'Peter' ,
    surname: 'Shawn' ,
    age: 30
    subject: [ 'HTML', 'CSS3', 'JavaScript' ,] 

}
//Display the object to the console
console.log(person);
console.table(person);

//Make use of  dot operator
console.log(person.name);
//Make use of square bracket
console.log(person['surname']);
//What if the key wasn't found
console.log(person['surnames']);
//console.log(person.subjects.at(-1));
//With the dot operator
//console.log(person.ages);
console.log(object.keys(person));
console.log(Object.values(person)); */

/*
Array: Collection of data
Object: It represents a thing, person or a place
*/
/*let marks = 90;
switch (marks) {
    case 100:
        console.log("A+")
break;
case 90:
    console.log("A");
break;
default:
    console.log("Other")
break;
}

// create an array
/*let data = [
    3, 5, 8,
    'Veronique' ,
    'Sivuyisiwe'
]
console.log(data);
console.log(`Array's size: ${data.length}`);
console.log(`Element at position 3: ${data[3]}`);
data.push('Matthew')
//console.log(data.at(-1) );
data.push('Shawn', 'Simamkele')
console.log(data);

data.unshift('new', 'element')
let lastRemovedElement = data.pop()
console.log(data);
console.log(lastRemovedElement);
let newArr = data.concat(lastRemovedElement)
console.log(newArr);
//Remove the first element
data.shift( )
.console.log(data);
//Returns the elements from a range
console.log(data.slice(1, 4) );
/*
            splice = add or remove
            0 => adding
            1 => Number(s) of elements to remove
            */
           // Adding using splice
          /* data.splice(2, 0, 'Joel')
           console.log(data);
           // Removing element using splice
           data.splice(3, 2)
           console.log(data);
           // Reverse
           data.reverse( )
           console.log(data);
           // Sorting
           console.log(data.sort( ) );
           // Return only numbers
           data.push(23, 7.4)
           let numbers = data.filter( a=> typeof a == 'number' )
           console.log( numbers) ;
           console.log( "=====Object====");
           //let person = {
          //        name : 'Peter'
          //        surname : 'Shawn'
          //        age: 30
         //   }
         // Display the object to the console
         // console.log(person) ;
         // Make use of the dot operator
         // console.log(person.name) ;
         // Make use of the square bracket
         //console.log



*/
//function repeat(limit)

//while loop
/*
let cnt = 0
while (cnt <= 10) {
    console.log(cnt);
    //if we don't  have the below code it will produce an infinite loop
    cnt++;
    }
    */
   /*let cnt = 0
   let numbers = [12, 18, 11, 5, 2, 8];
   //for(let i = 0; i<numbers.length; i++){
    //console.log(`${i} => $`)
   //}
   /*
   numbers.forEach(display)
   function display(number) {
    console.log(number);
   }
   */
 /* numbers.forEach((numbers, i)=>{
    console.log(numbers );

  })
  */

  //Named the function or declared a function
 /*function constName (firstName) {
    console.log(`Name is ${firstName}`);

    
 }
 constName( )
 constName("Damon")*/
 //let greeting = ' Hello World '

 //Hoisting - Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

 /*console.log('Accessing a value');
 x = 3
 console.log(x);
 console.log('create a variable');
 var x;
 console.log(x)
 // still displays value of x . shows 3

 let addition = function(numb1, numb2) {
    return numb1 + numb2
     }
     console.log(addition(3,2)); */


     //Recursive function



     //constructor property
     /*function NewRecord(name) {
        this.name = name

     }
     let person1 = new NewRecord('John');
     let person2 = {name : 'Henk'};
     //console.log(person2);
     //Construtor property
     console.log(person1.constructor === NewRecord); //True
     // Its the same as using instanceOf
     console.log(person1 instanceof NewRecord); //True
     
     // Fuctions are objects
     /*
     let person = {
        firstName: 'Bruce',
        lastName: 'Wayne',
        fullName: function( ){
            return `${this.firstName} ${this.lastName}`
        }
     }
     console.log(person);
     console.log(person.fullName());
     */

     /*
     let person = {
        firstName: 'Bruce',
        lastName: 'Wayne',
        hrs: 120,
        rate: 500,
        salary: function( ) {
            return this.hrs * this.rate

        }
     }
     console.log(person);
     console.log(person.salary());
     */

     //let laptop = {
       // make: 'Dell' ,
        //cpu: '3Ghz',
        //ram: '16GB'
     //}
     //console.log(laptop);
     //for (const key in laptop) {
     //   console.log(laptop [key])
     // }
     //console.log(Object.keys(laptop));
     //console.log(Object.values(laptop));
     //Object.keys(laptop).forEach( (key)=>{
       // console.log(`${key} -> ${laptop[key]}`);
     //})
     //Object.values(laptop).forEach( (value)=>{
       // console.log(`${value}`);
         //})
//for(let key in laptop){
 //   console.log(laptop[key])
// }
/*
let car1 = {
    make: 'Toyota',
    year: 2023
}
let car2 = car1
console.log("==car1==");
console.log(car1);
console.log("==car2==");
console.log(car2);
*/

/*
let car2 = {...car1}
console.log(car1, car2);
console.log("Change the value of car2");
car2.year = 2024
console.log(car1, car2);
*/

//28.11.23
//let firstName = 'Megan'
/*
let lastName = 'Thee stallion'

let person = {
  firstName, 
  lastName

}
console.log(person);
*/

//desctructuring
/*
let data = ['Suki', 'Aoki']
let [firstName, lastName] = data
//console.log(firstName)
//console.log(lastName)
console.log(`My name is ${firstName} and last name is ${lastName}`);
*/

//Array of object
/*
let products = [
  {
    id: 1, 
    name: 'table' ,
    amount: 700
  },
  {
    id: 2,
    name: 'chair' ,
    amount: 10000
  }
]
*/

/*
let [product1, product2] = products 

console.log(product1, product2);
*/

/*
let person = {
  firstName: 'n0t',
  lastName: 'nish',
  age: 34

}
const {firstName, lastName, age} = person
console.log(`My name is ${firstName} ${lastName}, and I am ${age} years old.`)
*/

/*
let [first, second, ...remaining] = [23, 5, 9, 11, 24, 32]
console.log(first, second, remaining);
*/

//Exception handling using try... and catch
/*
function division(fOp) {
  try{
       let result = fOp / sOp
       console.log(result);
  }catch(e){
    console.log("Please try again next time");
  }
}
division(4)
*/

/* 
When to use exception handling:
Retrieving a value from an input element
-Handling arguments
-Accessing a file
-Accessing data from a table (in a database)
-Etc ...
*/

// Make use of throw
/*
function addition(...args) {
  let totalOfNumbs = 0
  args.forEach( item =>{
   // if (typeof item != 'number')
     //    throw new Error(`${item} is not a number`)
  //else 
  totalOfNumbs += item
  })
  return totalOfNumbs
}
console.log(addition(3, 5, 'nOtnish', 2));
// try and catch
try{
  console.log(addition(12, 14, 'J', 75));
} catch (e) {
  console.log(e.message);
}
*/

// Promise and fetch
let myPromise = new Promise( )3
function args(resolve, reject) {
            let numb1 = +prompt("Enter a numerical value")
            if(typeof numb1 == 'number')
              resolve(`The value entered is ${numb1}`)
            reject(`Unfortunately ${numb1} is not a number`)

}
myPromise.then(
          completed => console.log(completed), //eg1
         // rejected => console.log(rejected)
).catch(
  r
)