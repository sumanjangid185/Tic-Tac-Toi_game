//// event listeners

const box1 = document.getElementById('box-1');
//  box1.addEventListener('click', () => {
//     console.log('click by event');
// });


// box1.addEventListener('click', (e) => {
//         console.log('event object', e);
// });
    

// box1.addEventListener('mousemove', (e) => {
//    console.log('event by object ',e.clintx);
//  });

// const nameInput = document.getElementById('nameInput');
// nameInput.addEventListener('keypress', (e) => {
//     console.log('key', e.key);
// })

const nameInput = document.getElementById('nameInput');
// nameInput.addEventListener('keydown', (e) => {
//     console.log('key', e.key);
// })

nameInput.addEventListener('focus', (e) => {
    console.log('key', e);
})