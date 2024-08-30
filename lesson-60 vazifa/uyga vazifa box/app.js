
// let dark = document.getElementById("button");

//  let element = true;

//   function tugma(e) {
//     // Orqadagi rangni o'zgartirish
//     let element = document.body;
//     e.style.backgroundColor = element ? 'red' : 'blue';
//     element = !element
// }

// let img = document.getElementById("images");
// let button = document.getElementById("tugma");

// let rasm = ['rasm1.jpg','rasm2.jpg','rasm3.jpg','rasm4.jpg']

// button.addEventListener('click', () => {
//     window.location.reload();
// })




/* BU BOM QIYMATLARI YA'NI BROWSER BOJECT MODEL MA'NOSIIDA
console.log("ishlayabdi window oynasi" + screen.availWidth);
console.log("ishlayabdi window oynasi" + screen.colorDepth);
console.log("ishlayabdi window oynasi" + screen.availHeight);
console.log(window.location);
console.log(window.history);
*/

// Backround color xususiyati uchun o'zgaruvchilar
const toggleBtn = document.getElementById('toggleBtn');
const container = document.querySelector('.container');

// Bu esa tugma uchun o'zgaruvchi xususiyat 

let tugma = document.getElementById('toggleBtn');

tugma.addEventListener('click', () => {
    tugma.classList.toggle('#15ea38')
})


toggleBtn.addEventListener('click', () => {
    container.classList.toggle('dark-mode');
});



let p = document.querySelector("p"),
 red = document.getElementById("red"),
 green = document.getElementById("green"),
 blue = document.getElementById("blue"),
 yellow = document.getElementById("yellow"),
 purple = document.getElementById("purple"),
 gray = document.getElementById("gray"),
 black = document.getElementById("black");


red.addEventListener('click', () => {
    p.style.color = 'red';
    console.log("ishlamaybdi");
})

green.addEventListener('click', () => {
    p.style.color = 'green';
    console.log("ishlamaybdi");
})

blue.addEventListener('click', () => {
    p.style.color = 'blue';
    console.log("ishlamaybdi");
})

yellow.addEventListener('click', () => {
    p.style.color = 'yellow';
    console.log("ishlamaybdi");
})

purple.addEventListener('click', () => {
    p.style.color = 'purple';
    console.log("ishlamaybdi");
})

gray.addEventListener('click', () => {
    p.style.color = 'gray';
    console.log("ishlamaybdi");
})

black.addEventListener('click', () => {
    p.style.color = 'black';
    console.log("ishlamaybdi");
})












