//console.log("hello world");
/*
//Primitive datatypes: 
console.log(typeof"this is string");
console.log(typeof 123456789); //int
console.log(typeof 12345678900987654321n); // big int 
console.log(typeof true); //boolen 
console.log(typeof undefined); //undefined
//symbol
console.log(typeof null); //null

//complex variables:
const arr = [1234, "yabai", false, [1,0]];// array (array is like a list here)
console.log(arr[1]);
// JSON JavaScript Object Notation

const json_obj = {
    name: "Kawa",
    here: "Solana"
} //key shd be a string
console.log(json_obj);

var name = "kawa"
let name1 = "kawa"
*/
/*
var vs let
*/

/*
const name2 = "kawa"
//const can't be changed only with assignment

// uk conditions,  loops (in for loop anything inside 3rd stmt of for loop)

//error catching
try {
    
}catch(err){
    
}

//function
function square(x){         //function decleration
    return x * x;
}

const arr1 = [1,2,3,4,5,6,7,8]
const sq_a = arr1.map((e)=> square(e)); //=> = = + >
console.log(sqaure(3));
*/

var cowsay = require("cowsay");
const Quote = require('inspirational-quotes');

console.log(
  cowsay.say({
    text: Quote.getRandomQuote(),
    e: "oO",
    T: "U ",
  })
);


/*
console.log(Quote.getQuote()); // returns quote (text and author)
console.log(Quote.getQuote({ author: false }); // return quote without author
console.log(Quote.getRandomQuote()); // return any random quote

JSON getQuote()
 {  
    "text":"My number one piece of advice is: you should learn how to program.",
    "author":"Mark Zuckerberg, founder of Facebook"
 }
 getQuote({ author: false });*/