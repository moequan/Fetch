console.log("hehehehe")

document.getElementById('btnGetUserData').addEventListener("click", getUserData);

function getUserData() {
  console.log("Testing event");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      // console.log(users))
      let html = `<h2>List of users</h2>`
      html +=`<ul>`
      users.forEach( user => {
        html += `<li>${user.name}</li>`
      })
      html +=`</ul>`
      document.getElementById('response').innerHTML=html
    })
    }
