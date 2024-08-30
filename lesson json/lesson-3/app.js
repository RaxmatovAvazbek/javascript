let users = document.getElementById("users");

async function apiUser() {
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const { id, name, username, email, address, phone, website, company } =
          item;
        users.innerHTML += ` 
          <tr>    
            <th>${id}</th>
            <th>${name}</th>
            <th>${username[i]}</th>
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
