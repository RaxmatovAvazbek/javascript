  
  document.addEventListener('DOMContentLoaded', function () {
    // LOGIN va SIGN UP tugmalarini olamiz
    let loginButton = document.getElementById('loginButton');
    let signUpButton = document.getElementById('signUpButton');




    // LOGIN tugmasi bosilganda kirish formani ko'rsatamiz

    loginButton.addEventListener('click', function () {
        let loginForm = document.getElementById('loginForm');
        let signUpForm = document.getElementById('signupForm');
        
        let signUpButtoN = document.getElementById('signUpButton')
        let loginButtoN = document.getElementById('signUpButton')
        // Kirish formani ko'rsatamiz, ro'yxatdan o'tish formani yashiramiz
        loginForm.style.display = 'block';
        signUpForm.style.display = 'none';
    });




    // SIGN UP tugmasi bosilganda ro'yxatdan o'tish formani ko'rsatamiz

    signUpButton.addEventListener('click', function () {
        let loginForm = document.getElementById('loginForm');
        let signUpForm = document.getElementById('signupForm');

        let signUpButton = document.getElementById('signUpButton')
        // Ro'yxatdan o'tish formani ko'rsatamiz, kirish formani yashiramiz
        signUpForm.style.display = 'block';
        loginForm.style.display = 'none';

    });
});
















let raqam = [
  "Avazbek",
  "Diyorbek",
  "Asilbek",
  "Toshpolat",
  "Ogabek",
  "Temurbek",
];

// for(let i = 0; i < raqam.length; i++){
//     console.log(raqam[i].to);
// }

// let i = 0;

// while (i < raqam.length) {
//   console.log(raqam[i]);
//   i++;
// }

// let i = 0;

// do {
//     console.log(raqam[i]);
//     i++;
// }while(i < raqam.length);

// let parol = '52345678';

// if(parol.length >= 8 && parol.includes('@')){
//     console.log('sizning parolingiz kuchli ekan');
// }else{
//     console.log('kuchli parol kerak sizga');
// }

// const son = [11, 12, 13, 14, 100, 200, 0];

// for(let i = 0; i < son.length; i++){
//     if(son[i] === 12){
//         console.log(son[i]);
//         continue
//     }
// }
// console.log('sizning najitangiz: ' , son);

// let ism = prompt('Ismingizni kiriting ')
// let yosh = +prompt('Yoshingizni kiriting ')

// let qaytarish = `Qadirli ${ism} siz ${2024 - yosh} yilda tugilgansiz`

// console.log(qaytarish);