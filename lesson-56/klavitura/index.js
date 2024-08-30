 /* O'ZGARUVCHILAR TUGMALAR  */ 
 
 let box = document.querySelectorAll(".tugma");
 let  textarea = document.querySelector("textarea");
 let del_ete = document.querySelector(".delet");
 let tab_ete = document.querySelector(".tab");
 let shift = document.querySelector(".shift");

 let localSTheme = localStorage.getItem('theme');
let themeToSet = localSTheme;
 
 
 let chars = []

 box.forEach(tugma => {
  tugma.addEventListener('click' , () => {
    textarea.value += tugma.innerText
    chars = textarea.value.split('')
  })
 })
 
 del_ete.addEventListener('click', () => {
     chars.pop()
     textarea.value = chars.join('')
 }) 
 
 tab_ete.addEventListener('click', () => {
   chars.push(' ')
   textarea.value = chars.join(' ')
 })
 
 shift.addEventListener('click', () => {
     box.forEach(tugma => {
      tugma.classlist.toggle('upper ')
     })
})


/* MAVZUSINI O'ZGARTIRTISH YANI ORQA QISMINI */

if (!localSTheme) {
  themeToSet = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

document.documentElement.setAttribute('data-theme', themeToSet);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 // Function that display value 
//   function dis(val) { 
//     document.getElementById("result").value
// } 

// function myFunction(event) { 
//     if (event.key == '0' || event.key == '1' 
//         || event.key == '2' || event.key == '3' 
//         || event.key == '4' || event.key == '5' 
//         || event.key == '6' || event.key == '7' 
//         || event.key == '8' || event.key == '9' 
//         || event.key == '+' || event.key == '-' 
//         || event.key == '*' || event.key == '/') 
//         document.getElementById("result").value += event.key; 
// } 

// var cal = document.getElementById("calcu"); 
// cal.onkeyup = function (event) { 
//     if (event.keyCode === 13) { 
//         console.log("Enter"); 
//         let x = document.getElementById("result").value 
//         console.log(x); 
//         solve(); 
//     } 
// } 

// // Function that evaluates the digit and return result 
// function solve() { 
//     let x = document.getElementById("result").value 
//     let y = math.evaluate(x) 
//     document.getElementById("result").value = y 
// } 

// // Function that clear the display 
// function clr() { 
//     document.getElementById("result").value = "" 
// } 

// function myFunction(event) { 
//     document.getElementById("result").value += val 
// } 

// function myFunction(event) {
//     console.log("salom").value
// }

// let data = []; // Ma'lumotlarni saqlash uchun massiv

// function myFunction(event) {
//     let inputElement = document.querySelector("input");
//     let inputValue = inputElement.value.trim();
//     console.log(inputValue);
//     if (inputValue !== '') {
//         data.push(inputValue); // Ma'lumotni massivga qo'shish
//         inputElement.value = '';
//         displayData(); // Ma'lumotlarni chiqarish
//     } else {
//         alert("Iltimos, ma'lumot kiritish!");
//     }
// }

// const input = document.querySelectorAll('input');

//  input.addEventListener('click', () => {
//    console.log(salom);
//  });


// let data = [];

// const input = document.querySelectorAll("input");

// const handle_input = (e) => {
//   console.log(e.target.value);
//   console.log(chiqdimi);
// };

// input.addEventListener("input", handle_input);










  // var savedValues = []; // Massivni e'lon qilish

  // function pushValue() {
  //     var inputElement = document.getElementById('myInput');
  //     var inputValue = inputElement.value; // Input maydonidagi qiymatni olish
  //     savedValues.push(inputValue); // Qiymatni massivga qo'shish
  //     inputElement.value = ''; // Input maydonidagi qiymatni tozalash
  //     displayValues(); // Qiymatlarni ekranga chiqarish
  // }

  // function displayValues() {
  //     var displayElement = document.getElementById('display');
  //     displayElement.innerHTML = "Saqlangan qiymatlar: " + savedValues.join(', '); // Massivdagi qiymatlarni ekranga chiqarish
  // }
