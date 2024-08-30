'use strict'

let users = []
let searchUsers = []

function tugma() {
    console.log("Malumot qo'shildi");
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    let number = document.getElementById("number").value;
  
    let jadval = document.getElementById("jadval");
    let jadvalQator = jadval.insertRow();
    let jadvalJadval = [firstname, lastname, phone, email, gender , number];
    for (let i = 0; i < jadvalJadval.length; i++) {
      let jadvalCell = jadvalQator.insertCell();
      jadvalCell.innerHTML = jadvalJadval[i];
    }

  }

  // function getData() {
  //    let firstNameS = document.getElementById('firstNameS').value
  //    let lastNameS = document.getElementById('lastNameS').value
  //    let phoneNumberS = document.getElementById('phoneNumberS').value
  //    let emailS = document.getElementById('emailS').value
  //    let numberS = document.getElementById('numberS').value
  //    let genderS = document.getElementById('genderS').value

  //    return {firstNameS, lastNameS, phoneNumberS, emailS, genderS, numberS}  =  getData()
  //   }
    
//     function search(){
//       const {firstname,lastname, phone, email, number } = getData()
//       searchUsers = users.filter(
//         (users) =>(
//           user.firstNameS === firstname &&
//           user.lastNameS === lastname &&
//           user.phoneNumberS === phone &&
//           user.emailS === email &&
//           user.numberS === number &&
//           user.genderS === gender &&
//       )
      
// }









