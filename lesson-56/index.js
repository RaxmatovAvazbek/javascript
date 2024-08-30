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
//     let inputElement = document.querySelectorAll("input");
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

var savedValues = []; // Massivni e'lon qilish

function pushValue() {
    var inputElement = document.getElementById('myInput');
    var inputValue = inputElement.value; // Input maydonidagi qiymatni olish
    savedValues.push(inputValue); // Qiymatni massivga qo'shish
    inputElement.value = ''; // Input maydonidagi qiymatni tozalash
    displayValues(); // Qiymatlarni ekranga chiqarish
}

function displayValues() {
    var displayElement = document.getElementById('display');
    displayElement.innerHTML = "Saqlangan qiymatlar: " + savedValues.join(', '); // Massivdagi qiymatlarni ekranga chiqarish
}
