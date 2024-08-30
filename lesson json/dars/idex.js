let users = document.getElementById("users");

async function apiUser() {
  await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach(({ userId, id, title, completed }) => {
        if (userId == 1) {
        
          users.innerHTML += ` 
         <tr>    
           <th>${userId}</th>
           <th>${id}</th>
           <th>${title}</th>
           <th>${completed}</th>
         </tr>
       `;
        }
      });
    });
}

apiUser();
