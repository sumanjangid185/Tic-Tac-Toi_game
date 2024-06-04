// element access krnaa 
// get element by body name 
// const myBody = document.body;
// console.log(myBody);

// // get element by  get element by id
// const box2 = document.getElementById('box-2');
// console.log(box2);

// // get element by tage name 
// const divs = document.getElementsByTagName('p');
// console.log(divs);

// // get element by class 
// const boxes = document.getElementsByClassName('random');
// console.log(boxes);

// // get elemnt by query selector all isme saree aa jayenge
// const random = document.querySelectorAll('.containerr .random');
//  console.log(random);


//inner html ko modify krnaa
// const box1=document.getElementById('box-1');
// box1.innerHTML="<h1>Hello world</h1> <p>My name is suman jangid</p>";


// attributr ko change krnaa
// const box1=document.getElementById('box-1');
// box1.style.backgroundColor='red';


// modify class 
// const box1=document.getElementById('box-1');
// box1.style.backgroundColor='red';
// box1.classList.add('round-border');

//for loop se saaree box ko border  denaa
// const box1 = document.getElementById('box-1');
// // box1.innerHTML = "<h1>Hello</h1> <p> Hello World</p>"
// box1.style.backgroundColor = "red"
// const boxes = document.getElementsByClassName('box');
// for(let i = 0; i<boxes.length; i++) {
//     boxes[i].classList.add('round-border');
// }

//box1.classList.remove('round-border');  

// // creating new element and appendding html
 const newpara=document.createElement('p');
 newpara.innerText="this is brand new";
 // paragrapgh too create hoo gya but yee dom k sath attach nhii h ab isko dom ksth attach krna pdega 

const container=document.getElementById('container');
container.appendChild(newpara);
