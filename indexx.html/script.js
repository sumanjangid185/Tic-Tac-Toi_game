// let c = 12;
// let d = 13; 

// let age = 26; // initialisation

// const name = 'Anuj';
// const Name = "kumar";

// // console.log('age', age)
// // age = 28;

// // console.log("c+d is", c + d);

// // console.log('age', age)
// console.log('name', name);





// Lecture 2  Data type
// let a = 23;
// // a = a+ 1;

// // console.log(a);

// // a = a+ 1;

// // console.log(a);

// // a = false

// a = Boolean(a);

// console.log("the value of a is", a);
// console.log("the type of a is", typeof a);

// let b = undefined;
// b = Number(b);

// console.log("b is ", b);






//Lecture 3 Operators
// const firstNumber = false;
// const secondNumber = true;

// // const result = firstNumber + secondNumber;
// // const result = firstNumber % secondNumber;
// const result = firstNumber || secondNumber;

// console.log(!secondNumber);

// // console.log(result);

// // 3 = 0*4 + 3

// // let thirdNumber = 12;
// // thirdNumber **= 4; // thirdNumber = thirdNumber + 4;

// // console.log(result);




//Lecture 4
// const age = 4;

// if (age >= 18) {
//     console.log("you are inside if");
//     console.log("you can vote");

//     if (age > 60) {
//         console.log("you can vote again");
//     }
// } else {
//     console.log("you cannot vote");

//     if (age < 5) {
//         console.log("you must go to the school");

//     }
// }

// console.log("this will execute always");

// const marks = 92;

// if (marks > 90) {
//     console.log("A+");
// } else if (marks > 80) {
//     console.log("A");
// } else if (marks > 70) {
//     console.log("B+");
// } else if (marks > 60) {
//     console.log("B");
// } else {
//     console.log("Low marks");
// }

// const marks = 10;

// // const result = marks >= 40 ? "PASSED" : "FAILED";

// let result = "";
// if (marks >= 40) {
//     result = "PASSED";
// } else {
//     result = "FAILED";
// }

// result = "HAHA";

// console.log("result", result);





//Lecture 5 Switch statment 
// const grade = "D";

// switch (grade) {
//     case "A":
//         console.log("A -> very good");
//         break;
//     case "B":
//         console.log("B -> Good, keep learning");
//         break;
//     case "C":
//         console.log("C -> Need Improvement");
//         break;
//     case "D":
//     case "E":
//         console.log("Not Good");
//         break;
//     default:
//         console.log("Invalid Grade");
// }



// Lecture 6 Loops
// for (let index = 1; index < 0; index = index + 3) {
//     console.log("Anuj", index);
// }

// let step = 6;
// while (step < 5) {
//     console.log("step", step);
//     step += 1;
// }

// let step = 6;
// do {
//     console.log("step", step);
//     step += 1;
// } while (step < 5);

// let step = 0;
// while (step < 5) {
//     step += 1;
//     if (step === 2) {
//         continue;
//     }
//     console.log("step", step);
// }




// //Lecture 7 ARRAys
// // const nums = [4, 1, 2, 8, 2, 8, 6];

// // console.log(nums.indexOf(8));// 80 ki sabse 1st position btaaa degaa
// // console.log(nums.includes(80));// element present h yaa nhi agr o/p -1 too mtlab ele. present nhi h
// // console.log(nums.push(7));// sabse last m add hogaa
// // console.log(nums.unshift(11));//sabse phleee add ho jayegaa
// // nums.push(7);
// // console.log(nums);
// // nums.sort();
// // shift -> first ele ko bahar nikal sakta h

// // const subArray = nums.slice(2, 4);

// // console.log(subArray);

// // const words = [
// //     "Apple",
// //     "Banana",
// //     "Cherry",
// //     12,
// //     true,
// //     {
// //         name: "Anuj",// object bhi array m dal sakte h
// //     },
// //     function hello() {   // function bhi dal sakte h
// //         console.log("hello world");
// //     },
// // ];

// // const newWords = words;

// // newWords[6] = "Kiwi";

// // console.log(words);
// // console.log(newWords);




// //Lecture 8 function
// // block of code that perform specific task
// const a1=8;
// const b1=9;
// sum(a1,b1);

// function sum(a1,b1){
//     const sum=a1+b1;
//     console.log("The result is:",sum);
// }
// // function declaration   ko kahii bhi define krr saktee h because of Hosting  memory m iski jagah reserve jrr dii jatiii h phirr iskoo vhaa se dundd liyaa jata h 
// // function expression-> main diff b/w a function exp and a function declaration is the function name isme function name nhi diya jaya islie isee anonymous function khhhtee h
// // ismehosting nhi hoti agr function koo call phlee krr liyaa too undefined aa jayega o/p
// const square=function(num){
//     return num*num;
// }
// console.log(square(4));

// // Nested function
// function addsquare(a2,b2){
//     const sa=square(a2);
//     const sb=square(b2);

//      function square(num){
//           return num*num;
//     }
//     return sa+sb;
// }
// console.log("after result",addsquare(3,4));

// //Arrow Function
// //left side function exp and right side arrow function
// //()=>{
// // arrow  function
// // }
// //left side function exp and right side arrow function

// const great=()=>{
//     console.log("my name is suman jangid");
// }
// great();

// //(parameter daal diyaa )
// const greet=(cnt)=>{
//     for(let i=0;i<cnt;i++)
//     console.log("my name is suman jangid");
// }
// greet(3);// 3 baar print hoo jayegaa


// //isme arrow k baad ek hi cheez likhh saktee h 
// // jaydaa likne k liyee carlyy brasis  use kree orr usmee return likhnaa pdegaa direct likhne se kaam nhi chlegaa
//  const squ=(num)=> num*num;
//  console.log(squ(4));




// //Lecture 9&10 call back function
//  //Call Back function-> When  a function is pased as an argument to another function

//  const calculate = (a3, b3, operation) => { // ismee  operation ek  function h joo ki as a parameter send kiyaaa gya h
//     return operation(a3, b3);
// };

// //// method 1   function call nhi kiyaa bss function pass kiyaaa
// const addition = calculate(3, 4, function (num11, num22) {
//     return num11 + num22;
// });

// console.log(addition);


// // method 2
// const subtraction = (a, b) => a - b;// arrow function
// // isme bhi subtraction ek function h joo kimparametr k roop m aa rha uskoo bhi caall nhi kiyaa as a function pass kiyaa bss
// const subResult = calculate(8, 3, subtraction);

// console.log("after subresult:",subResult);

// //method 3
// // normal function declaration
// function multiply(a, b) {
//     return a * b;
// }
// // call back function multiply is a function which is pass as a parametr in another function which is mulresult
// const mulResult = calculate(3, 2, multiply);
// console.log("mulresulr :",mulResult);



// //Array callback function
// const arr = [4, 1, 6, -2, -5, 3, 2, -8, 6, 7];

// const firstNeg = (num) => {
//     return num < 0;
// };

// const result = arr.findIndex(firstNeg);

//  console.log(result);
// // for each loop se array k number orr uski index print krwanaa
// arr.forEach((num, i) => {
//  console.log("array num", num, i);
// });


// lecture 10 call back hall
// console.log("hello");//synchronus function

// setTimeout(function () {  //asynchronous function-> sabse baad m execute  hoga after 3ms 
//     console.log("this will execute later");
// }, 3000);

// console.log("world");
// console.log("three");
 


// function getCheese(callback) {
//     setTimeout(() => {
//         const cheese = "🧀";
//         console.log("here is cheese", cheese);
//         callback(cheese);
//     }, 2000);
// }
// getCheese();

// function makeDough(cheese, callback) {
//     setTimeout(() => {
//         const dough = cheese + "🫓";
//         console.log("here is the dough", dough);
//         callback(dough);
//     }, 2000);
// }

// function bakePizza(dough, callback) {
//     setTimeout(() => {
//         const pizza = dough + "🍕";
//         console.log("here is the pizza", pizza);
//         callback(pizza);
//     }, 2000);
// }

// getCheese((cheese) => {
//     makeDough(cheese, (dough) => {
//         bakePizza(dough, (pizza) => {
//             console.log("got my pizza", pizza);
//         });
//     });
// });

// pizza -> dough -> cheese

//Lecture 11 promices

const ticket=new Promise(function (resolve,reject){
    const isboard=false;
    if(isboard){
        resolve("you are in the flight");
    }
    else{
        reject("your flight has been cancelled");
    }
});

// then() ye jb tab resolve call hoo 
// catch() ye reject hone p 
// finally() yee har case m call hota h no matter that the function is reject or resolve 
ticket
.then((data)=>{
    console.log("wohoo",data);
})
.catch((data)=>
{
    console.log("ohh noo",data);
})
.finally(()=>{
    console.log("i am enjoying");
});

// o/p yhaa p reject call ho rhaa h isliye catch function call hoga 

//agrr isboard is true then resolve function is call tb theb function call hoga



// promise pizza
// here all the function are in synchronous nature
// getcheese function call hoga ye ek promise return kregaa yee settime out function k andar jayegaa voo reslove return krega after 2ms 
// settime out function is asyn
// function getCheese(){
//   return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//        const cheese="🍕";
//     //    console.log("here is the cheese:",cheese);
//        resolve(cheese);

// },2000);
// });
// }
// // console.log(getCheese());

// function MakeDough(cheese){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//          const dough=cheese+"🍛";
//         //  console.log("here is the dough:",dough);
//          resolve(dough);
  
//   },2000);
//   });
//   }

//   function Bakepizza(dough){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//          const pizza=dough+"🍔";
//         //  console.log("here is the pizza:",pizza);
//          resolve(pizza);
  
//   },2000);
//   });
//   }

//   getCheese().then((cheese)=>{
//     console.log("here is the cheese:",cheese);
//      return MakeDough(cheese)
//   }).then((dough)=>{
//     console.log("here is the dough:",dough);
//     return Bakepizza(dough);
//   }).then ((pizza)=>{
//     console.log("here is the pizza:",pizza);
//   });







  // agrr rejectt huaa too catch use krenge 
//   function getCheese(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//          const cheese="🍕";
//       //    console.log("here is the cheese:",cheese);
//          resolve(cheese);
  
//   },2000);
//   });
//   }
//   // console.log(getCheese());
  
//   function MakeDough(cheese){
//       return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//            const dough=cheese+"🍛";
//           //  console.log("here is the dough:",dough);
//            reject("bad cheese");
    
//     },2000);
//     });
//     }
  
//     function Bakepizza(dough){
//       return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//            const pizza=dough+"🍔";
//           //  console.log("here is the pizza:",pizza);
//            resolve(pizza);
    
//     },2000);
//     });
//     }
  
//     getCheese().then((cheese)=>{
//       console.log("here is the cheese:",cheese);
//        return MakeDough(cheese)
//     }).then((dough)=>{
//       console.log("here is the dough:",dough);
//       return Bakepizza(dough);
//     }).then ((pizza)=>{
//       console.log("here is the pizza:",pizza);
//     })
//     .catch((data)=>{
//  console.log("error occured",data);
//     });
   
  

    // asyn await function
    // yee asyn m lgaa sktee h settimeout is asyn function


    // function getCheese(){
    //     return new Promise((resolve,reject)=>{
    //        setTimeout(()=>{
    //          const cheese="🍕";
    //       //    console.log("here is the cheese:",cheese);
    //          resolve(cheese);
      
    //   },2000);
    //   });
    //   }
    //   // console.log(getCheese());
      
    //   function MakeDough(cheese){
    //       return new Promise((resolve,reject)=>{
    //          setTimeout(()=>{
    //            const dough=cheese+"🍛";
    //           //  console.log("here is the dough:",dough);
    //            resolve(dough);
        
    //     },2000);
    //     });
    //     }
      
    //     function Bakepizza(dough){
    //       return new Promise((resolve,reject)=>{
    //          setTimeout(()=>{
    //            const pizza=dough+"🍔";
    //           //  console.log("here is the pizza:",pizza);
    //            resolve(pizza);
        
    //     },2000);
    //     });
    //     }
    //     async function orderpizza(){
    //         const cheese=await getCheese();
    //         console.log("here is the cheese:",cheese);
    //         const dough=await MakeDough(cheese);
    //         console.log("here is the dough:",dough);
    //         const pizza=await Bakepizza(dough);
    //         console.log("here is the pizza:",pizza);
    //     }
    //     orderpizza();



        // error handling by try
        
// async function orderPizza() {
//     try {
//         const cheese = await getCheese();
//         console.log("here is the cheese", cheese);

//         const dough = await makeDough(cheese);
//         console.log("here is the dough", dough);

//         const pizza = await bakePizza(dough);
//         console.log("here is the pizza", pizza);
//     } catch (err) {
//         console.log("error occured", err);
//     }
//     console.log("Process ended");
// }
// orderpizza();






// Lecture 12 Html DOM
//document object model

      