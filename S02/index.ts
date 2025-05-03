// console.log("Session 2");

// let a = 1;
// let b = null;
// console.log(a);
// console.log(b);

// function sum(a:number, b:number): any {
// //   return a + b;
//     // return "string value";
//     // return a+b;
//     console.log(a + b);
//     return true;
// }

// // console.log(sum(1, 2));
// sum(5,5);
// console.log(sum(1,2));

// let c:void;
// let d:string = "hello";
// console.log(d);  

let e:any = 1;
e = "hello";
console.log(e.toUpperCase());
console.log(e);


let f:unknown = 2;
console.log(f);
f = "hello";
console.log(f);
f = true;
console.log(f);
if(typeof f === "string"){
    // this is working because now we know the the value of f is string
    console.log(f.toUpperCase());
}

// console.log(f.toLowerCase());
 

/**
 * variables stages:
 *  1. declaration 
 *  2. initialization or assigning the values
 */

/**
 * null vs void
 */

/**
 * any vs unknown
 *      unknown is better than any (unknown is type safe)
 *      any is not type safe
 */

/** 
 * null vs undefined
 * 
 */