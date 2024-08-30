let users = document.getElementById("users");

async function apiUser() {
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const { id, name, username, email, address, phone, website, company } = item;
        users.innerHTML += ` 
          <tr>    
            <th>${id}</th>
            <th>${name}</th>
            <th>${username}</th>
            <th>${email}</th>
            <th>${address.city}</th>
            <th>${phone}</th>
            <th><a href="">${website}</a></th>
            <th>${company.name}</th> 
          </tr>
        `;
      });
    });
}
apiUser();

















// let users = document.getElementById("users");

// async function apiUser(data) {
//   await fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((data) => {
//       console.log(data);
//       users = data;
//     });
//   users.innerHTML = "";
//   data.forEach((item) => {
//     console.log(item);
//     const { id, name, username, email, addrees, phone, website, company } =
//       item;

//     users.innerHTML += `
//         <tr>
//               <th>${id}</th>
//               <th>${name}</th>
//               <th>${username}</th>
//               <th>${email}</th>
//               <th>${addrees}</th>
//               <th>${phone}</th>
//               <th>${website}</th>
//               <th>${company}</th>
//       </tr>
//         `;
//   });
// }
// apiUser();













// let users = [];

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     users = data;
//   });

// setTimeout(() => {
//   console.log(users[0]);
// }, 1000);

// apiUser(getUser);










