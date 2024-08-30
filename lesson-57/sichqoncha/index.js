
let border = document.documentElement, 
cursor = document.querySelector(".cursor");
    border.addEventListener("mousemove", e => {
    border.style.setProperty('--x', e.clientX + "px ");     
    border.style.setProperty('--y', e.clientY + "px ");     
    console.log(border);

    let element = document.elementFromPoint(e.clientX, e.clientY);
    cursor.style.backgroundColor = getComputedStyle(element).backgroundColor;
});
 



// function bosish() {
//     document.getElementsByClassName(".box").addEventListener('mousemove', (e) => {
//         e.box.style.backroundcolor = 'red'
//     })
// }

// function bosish() {
//     let p = document.querySelector('#content');
//     p.style.color = 'red';
//     p.style.fontWeight = 'bold';
// }


// function bosish() {
//     let button = document.getElementsByClassName(".box").addEventListener('onmouseover' , () => {
//         button.style.backgroundColor = 'red'
//     });
    
//   }

//  let rang = true;

//   function hozir(e) {
//     // Orqadagi rangni o'zgartirish
//     e.style.backgroundColor = rang ? 'red' : 'blue';
//     rang = !rang
// }
