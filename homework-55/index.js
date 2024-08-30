'use strict'


// const circles = document.querySelector("circle");
// console.log(circles);
// let activeLight = 0;

// setInterval(() => {
//   changeLight();
// }, 1800);

// function changeLight(){
//   console.log("ishlayabdimi");
//    circles[activeLight].className = "circle"
//    activeLight++;

//    if(activeLight > 2) {
//      activeLight = 0
//    }

//    const currentLight = circles[activeLight];
//    currentLight.classList.add(currentLight.getAttribute("color"))
// }












// let yashil = document.getElementsByClassName("qizil");
// let qizil = document.getElementsByClassName("yashil");
// let sariq = document.getElementsByClassName("sariq");

// let i = 0;
// let images = [];
// let time = 3000;

// let yoriq = document.querySelectorAll('.yoriq');
// let faol = 0;
// console.log(yoriq);

// chiroqYondi(() =>{
//     chiroq();
// }, 1500);

// function chiroq(){
//    yoriq[faol].className = 'yoriq'
//    faol++;

//    if(faol > 2){
//      faol = 0;
//    }

//    const yoniq = box[faol];
//    yoniq.classList.add(yoniq.getAttribute
//     ("color"))
// }
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   async function startTrafficLight() {
//     while (true) {
//       document.getElementById("red").style.backgroundColor = "red";
//       await sleep(5000); // Wait for 2 seconds
//       document.getElementById("red").style.backgroundColor = "red";
      
//       document.getElementById("yellow").style.backgroundColor = "yellow";
//       await sleep(2000); // Wait for 1 second
//       document.getElementById("yellow").style.backgroundColor = "yellow";
      
//       document.getElementById("green").style.backgroundColor = "green";
//       await sleep(3000); // Wait for 2 seconds
//       document.getElementById("green").style.backgroundColor = "green";
//     }
//   }
  
//   startTrafficLight();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startTrafficLight() {
  while (true) {
    changeColor("red")
    await sleep(5000); // 5 sekund kutamiz
    changeColor("yellow").document.getElementById("red").innerHTML = "qizil"
    await sleep(1500); // 2 sekund kutamiz
    changeColor("green");
    await sleep(3000); // 3 sekund kutamiz
  }
}

function changeColor(color) {
  const colors = ["red", "yellow", "green"];
  colors.forEach(c => {
    document.getElementById(c).style.backgroundColor = c === color ? c : "";
  });
}

startTrafficLight();

  
  
  










// for(let i = 0; i < 100; i++){
//     console.log("seni");
// }
// let i = 1;

// do{
//    console.log("Seni");
//    i++; 
// }while( i < 100)

// let i = 1;

// while( i < 10000){
// //   console.log(i);/
//   console.log("Sen");
//   i++;
// }

// let moshina = [Isuzu, wolwo, daf, Gaz];

// document.getElementById("box").innerHTML = moshina;

// const colorList = [
//     {name: 'yellow', interval: 500},
//     {name: 'red', interval: 4000},
//     {name: 'yellow', interval: 500},
//     {name: 'green', interval: 4000}
//   ];
  
//   let count = 0;
  
//   function changeColor() {
//     if (count === colorList.length) {
//       count = 0;
//     }
//     console.log(colorList[count].name)
//     setTimeout(changeColor, colorList[count].interval)
//     count = count + 1;
//   }
  
//   changeColor()

//   const arrObj = [
//     {
//       img: 'img/avatar-1.png',
//       textUser: 'Здравствуйте!',
//       textAdmin: 'Привет!',
//     },
//     {
//       img: 'img/avatar-2.png',
//       textUser: 'Как дела?',
//       textAdmin: 'Норм',
//     },
//   ];
  
//   function getChat(arr) {
//     const block = document.createElement('div');
  
//     const user = document.createElement('div');
//     const userImg = document.createElement('img');
//     userImg.src = arr.img;
//     const userText = document.createElement('p');
//     userText.textContent = arr.textUser;
  
//     const admin = document.createElement('div');
//     const adminImg = document.createElement('img');
//     adminImg.src = 'img/logo.svg';
//     const adminText = document.createElement('p');
//     adminText.textContent = arr.textAdmin;
  
//     admin.append(adminImg, adminText);
//     user.append(userImg, userText);
//     block.append(user, admin);
//   }
  
//   setInterval(() => {
//     for (let i = 0; i < arrObj.length; i++) {
//       getBlock(arrObj[i]);
//     }
//   }, 3000)