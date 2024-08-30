let index = 0;
let users = [];
let searchUsers = [];

function addUser(){
  let firstName = document.getElementById('firstName').value
  let lastName = document.getElementById('lastName').value
  let age = document.getElementById('age').value
  let email = document.getElementById('email').value
  let phoneNumber = document.getElementById('phoneNumber').value
  let gender = document.querySelector('input[name="gender"]:checked')
  users.push({
    firstName,
    lastName,
    age,
    email,
    phoneNumber,
    gender
  });
    createTable();
}

function createTable(){
    let innerHTML = "";
    let tbody = document.getElementById('add-tbody');
    users.forEach((user, index) => {
        index++;
        innerHTML += `
                <tr>
                    <td>${index}</td>
                    <td>${user.firstName}</td>
                    <td>${user.lastName}</td>
                    <td>${user.age}</td>
                    <td>${user.email}</td>
                    <td>${user.phoneNumber}</td>
                    <td>${user.gender.id}</td>
                </tr>
        `
    });
    tbody.innerHTML = innerHTML;
}

function getData(){
    let firstName = document.getElementById('firstNameS').value
    let lastName = document.getElementById('lastNameS').value
    let age = document.getElementById('ageS').value
    let email = document.getElementById('emailS').value
    let phoneNumber = document.getElementById('phoneNumberS').value
    let gender = document.querySelector('input[name="genderS"]:checked')
    
    return {
        lastName, firstName, age, email, phoneNumber, gender
    }
}
function search(){
    const {firstName, lastName, age, email, phoneNumber, gender} = getData()

    searchUsers = users.filter(
        (user) =>
           user.firstName === firstName
        && user.lastName === lastName
        && user.age === age
        && user.email === email
        && user.phoneNumber === phoneNumber
        && user.gender.id === gender.id.substring(0, gender.id.length - 1)
    );
    createSearchTable();
}
    function createSearchTable(){
        let innerHTML = "";
        let tbody = document.getElementById('search-tbody');
        searchUsers.forEach((user, index) => {
            index++;
            innerHTML += `
                    <tr>
                        <td>${index}</td>
                        <td>${user.firstName}</td>
                        <td>${user.lastName}</td>
                        <td>${user.age}</td>
                        <td>${user.email}</td>
                        <td>${user.phoneNumber}</td>
                        <td>${user.gender.id}</td>
                    </tr>
            `
        });
        tbody.innerHTML = innerHTML;
    }


